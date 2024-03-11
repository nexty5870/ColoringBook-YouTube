import { Canvas } from "@/components/app-components";
import { CanvasContext } from "@/store/context/CanvasContext";
import { useContext, useEffect } from "react";

const CanvasInner = () => {
  const { fullScreen, fabricCanvas } = useContext(CanvasContext);
  useEffect(() => {
    const handleResize = () => {
      const object = document.getElementById("canvas-showcase-wrapper");
      let containerWidth = 0;
      let containerHeight = 0;
      if (fullScreen) {
        containerWidth = document.body.clientWidth;
        containerHeight = document.body.clientHeight;
      } else if (object.clientWidth > 600) {
        containerWidth = 600 * 0.87;
        containerHeight = 600 * 0.87;
      } else {
        containerWidth = object.clientWidth * 0.87;
        containerHeight = object.clientHeight * 0.87;
      }

      const min = Math.min(containerWidth, containerHeight);

      const scale = min / fabricCanvas.current.getWidth();
      if (scale === 1) return;
      const zoom = fabricCanvas.current.getZoom() * scale;
      fabricCanvas.current.setDimensions({
        width: min,
        height: min,
      });
      fabricCanvas.current.setViewportTransform([zoom, 0, 0, zoom, 0, 0]);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        handleResize();
      }
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [fullScreen]);
  return <Canvas />;
};

export default CanvasInner;
