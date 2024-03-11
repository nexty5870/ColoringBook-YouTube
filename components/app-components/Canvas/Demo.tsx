"use client";
import { CanvasContext } from "@/store/context/CanvasContext";
import { useContext, useEffect } from "react";
import Canvas from "./Canvas";
import { useCanvasProvider } from "@/store/hooks/useCanvasProvider";

const CanvasInner = () => {
  const { fullScreen, fabricCanvas } = useContext(CanvasContext);
  useEffect(() => {
    const handleResize = () => {
      let containerWidth = 0;
      let containerHeight = 0;
      if (fullScreen) {
        containerWidth = document.body.clientWidth;
        containerHeight = document.body.clientHeight;
      } else {
        containerWidth = document.body.clientWidth;
        containerHeight = containerWidth;
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

export const CanvasDemo = () => {
  const canvasContext = useCanvasProvider();

  return (
    <CanvasContext.Provider value={canvasContext}>
      <CanvasInner />
    </CanvasContext.Provider>
  );
};
