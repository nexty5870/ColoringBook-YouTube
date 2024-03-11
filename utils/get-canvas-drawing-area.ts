import { fabric } from "fabric";

export const getCanvasDrawingArea = (canvas: fabric.StaticCanvas | fabric.Canvas) => {
    let objects = canvas.getObjects();
    let minX = Number.MAX_VALUE;
    let minY = Number.MAX_VALUE;
    let maxX = Number.MIN_VALUE;
    let maxY = Number.MIN_VALUE;
  
    objects.forEach(function (obj) {
      const objCoords = obj.getBoundingRect();
      minX = Math.min(minX, objCoords.left);
      minY = Math.min(minY, objCoords.top);
      maxX = Math.max(maxX, objCoords.left + objCoords.width);
      maxY = Math.max(maxY, objCoords.top + objCoords.height);
    });
  
    return { left: minX, top: minY, width: maxX - minX, height: maxY - minY };
  }