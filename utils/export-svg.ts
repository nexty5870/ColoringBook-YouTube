/* eslint-disable no-unused-vars */
import { fabric } from "fabric";
import { getCanvasDrawingArea } from "./get-canvas-drawing-area";
import axios from "axios";
import axiosRetry from "axios-retry";

interface ExportSvgArgs {
  canvasCtx: fabric.Canvas | fabric.StaticCanvas;
  fileName: string;
  onStart: () => void;
  onComplete: () => void;
  onError: () => void;
}

export const exportSvg: (args: ExportSvgArgs) => void = ({
  canvasCtx,
  fileName,
  onStart,
  onComplete,
  onError,
}) => {
  onStart();
  const drawingArea = getCanvasDrawingArea(canvasCtx);

  canvasCtx.setBackgroundColor("white", () => {
    const fileString = canvasCtx.toDataURL({
      format: "png",
      left: drawingArea.left,
      top: drawingArea.top,
      width: drawingArea.width,
      height: drawingArea.height,
    });

    const byteCharacters = atob(
      fileString.substring("data:image/png;base64,".length)
    );
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const imageBlob = new Blob([byteArray], { type: "image/png" });

    const reader = new FileReader();
    reader.readAsDataURL(imageBlob);
    reader.onloadend = function () {
      // The result property contains the base64 encoded string
      const base64String = (reader.result as string).split(",")[1]; // Exclude the data URL prefix

      // Custom retry delay
      axiosRetry(axios, {
        retryDelay: (retryCount) => {
          return retryCount * 1;
        },
        retries: 15,
      });
      axios
        .post("/api/ai/generate-svg", {
          sourceImg: base64String,
        })
        .then((res) => {
            const svgStr = res?.data?.output?.svg;
            if (svgStr) {
                onComplete();
                // GENERATE SVG FILE AND DOWNLOAD
                // Create a Blob containing the text
                var blob = new Blob([svgStr], { type: 'image/svg+xml' });

                // Create a temporary URL for the Blob
                var url = URL.createObjectURL(blob);

                // Create an anchor element
                var a = document.createElement('a');

                // Set the anchor's attributes
                a.href = url;
                a.download = fileName;

                // Simulate a click on the anchor to trigger the download
                document.body.appendChild(a);
                a.click();

                // Remove the anchor from the DOM
                document.body.removeChild(a);

                // Revoke the temporary URL
                URL.revokeObjectURL(url);
            } else {
                onError();
            }
        })
        .catch((err) => {
          onError();
        });
    };

    // Clean up
    canvasCtx.setBackgroundColor(null, canvasCtx.renderAll.bind(canvasCtx));
  });
};
