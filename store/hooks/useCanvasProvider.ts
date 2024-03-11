"use client"

import { fabric } from "fabric";
import { useCallback, useEffect, useRef, useState } from "react";
import { ICanvasContext } from "../context/CanvasContext";
import { useUndoRedo } from "./useUndoRedo";
import CanvasUtils from "@/utils/canvas-utils";

const DEV_MODE = process.env.NODE_ENV === "development";

export function useCanvasProvider(): ICanvasContext {
  const elementRef = useRef<HTMLCanvasElement>(null);
  const fc = useRef<fabric.Canvas | null>(null);
  const data = useRef<any>(null);
  const [gridBackgroundActive, setGridBackgroundActive] = useState<boolean>(false);
  const [activeSelection, setActiveSelection] = useState<fabric.Object[]>([]);
  const [menuState, setMenuState] = useState('Select');
  const [brushWidth, setBrushWidth] = useState(4);
  const [brushColor, setBrushColor] = useState('#000000');
  const [eraserWidth, setEraserWidth] = useState<number>(4);
  const { undo, redo, push } = useUndoRedo<string>();
  const [fullScreen, setFullScreen] = useState(false);
  const [lineToDraw, setLineToDraw] = useState<fabric.Line>();
  const [isDrawingLine, setIsDrawingLine] = useState(false);
  var canvasUtils: CanvasUtils;

  const downloadHandler = (fileName: string) => {
    // Convert base64 string to Blob
    const fileString = fc.current.toDataURL({
      format: 'png',
    })
    const byteCharacters = atob(fileString.substring('data:image/png;base64,'.length));
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'image/png' });

    // Create a downloadable link
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName || 'download.png';
    document.body.appendChild(a);
    a.click();

    // Clean up
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const addGridBackground = () => {
    return new Promise<void>((resolve, reject) => {
      setGridBackgroundActive(true);
      fc.current.setBackgroundImage("/assets/canvas-grid.svg", () => {
        fc.current.renderAll();
        resolve();
        return;
      })
    })
  }

  const removeGridBackground = () => {
    return new Promise<void>((resolve, reject) => {
      setGridBackgroundActive(false);
      fc.current.setBackgroundImage(null, () => {
        fc.current.renderAll();
        resolve();
        return;
      })
    })
  }

  const undoHandler = () => {
    try {
      let desired = undo();
      if (desired) {
        fc.current.loadFromJSON(JSON.parse(desired), fc.current.renderAll.bind(fc.current))
      } else {
        fc.current.clear();
      }
    } catch (_) {
      console.error("undo failed")
    }
  };

  const redoHandler = () => {
    try {
      let desired = redo();
      if (desired) {
        fc.current.loadFromJSON(JSON.parse(desired), fc.current.renderAll.bind(fc.current))
      }
    } catch (_) {
      console.error("redo failed")
    }
  };

  const clearHandler = () => {
    fc.current.clear();
    let currentState = fc.current.toJSON();
    push(JSON.stringify(currentState));
  };

  const setRef = useCallback(
    (ref: HTMLCanvasElement | null, init?: (canvas: fabric.Canvas) => void) => {
      //@ts-ignore
      elementRef.current = ref;
      // save state
      if (DEV_MODE && fc.current) {
        data.current = fc.current.toJSON();
      }
      // dispose canvas
      fc.current?.dispose();
      // set/clear ref
      if (!ref) {
        fc.current = null;
        return;
      }
      const canvas = new fabric.Canvas(ref, { backgroundColor: "transparent", preserveObjectStacking: true, });
      fc.current = canvas;
      console.log("FC CURR", fc.current)
      // invoke callback
      init && init(canvas);
      canvasUtils = new CanvasUtils(canvas, setMenuState);

      function onChange(options: fabric.IEvent) {
        let currentState = canvas.toJSON();
        push(JSON.stringify(currentState));
      }
      canvas.on('path:created', onChange)
      canvas.on('object:modified', onChange)

      // restore state
      if (DEV_MODE && data.current) {
        canvas.loadFromJSON(data.current, canvas.renderAll.bind(canvas));
      }
    },
    [data.current]
  );

  useEffect(() => {
    if (!fc.current) return;

    if (menuState === 'Brush') {
      fc.current.freeDrawingBrush = new fabric.PencilBrush(fc.current);
      fc.current.isDrawingMode = true;
      fc.current.freeDrawingBrush.width = brushWidth;
      fc.current.freeDrawingBrush.color = brushColor;
      fc.current.on("path:created", function (e) {
        fc.current.renderAll();
      });
    } else if (menuState === 'Eraser') {
      fc.current.freeDrawingBrush = new fabric.EraserBrush(fc.current);
      fc.current.isDrawingMode = true;
      fc.current.freeDrawingBrush.width = eraserWidth;
      fc.current.freeDrawingBrush.color = brushColor;
    } else if (menuState === 'Line') {
      fc.current.isDrawingMode = false;
      fc.current.defaultCursor = 'crosshair'
      fc.current.selection = false
    } else {
      fc.current.isDrawingMode = false;
      fc.current.defaultCursor = null;
      fc.current.selection = true
    }
  }, [menuState, brushWidth, brushColor, eraserWidth]);

  useEffect(() => {
    let canvas = fc.current;
    if (!canvas) return;

    canvas.off('mouse:down');
    canvas.off('mouse:move');
    canvas.off('mouse:up');
    if (menuState !== 'Line') return
    canvas.on('mouse:down', (o) => {
      console.log('mouseDown: menuState', menuState);
      if (menuState !== 'Line' || isDrawingLine) return

      let pointer = canvas.getPointer(o.e)
      let pointerPoints = [pointer.x, pointer.y, pointer.x, pointer.y]

      let lineToDraw = new fabric.Line(pointerPoints, {
        strokeWidth: 2,
        stroke: '#000000'
      });
      lineToDraw.selectable = false
      lineToDraw.evented = false
      lineToDraw.strokeUniform = true
      lineToDraw.hasControls = true
      canvas.isDrawingMode = true
      canvas.discardActiveObject().requestRenderAll()
      canvas.add(lineToDraw)
      setLineToDraw(prev => lineToDraw);
      setIsDrawingLine(prev => true)
    });

    canvas.on('mouse:move', (o) => {
      if (!isDrawingLine) return
      canvas.isDrawingMode = true

      console.log(lineToDraw);
      let pointer = canvas.getPointer(o.e)

      lineToDraw.set({
        x2: pointer.x,
        y2: pointer.y
      })

      canvas.renderAll()
    });

    canvas.on('mouse:up', () => {
      if (!isDrawingLine) return

      lineToDraw.setCoords()
      lineToDraw.selectable = true
      canvas.isDrawingMode = false
      canvas.fire('object:modified')
      setIsDrawingLine(prev => false)
    });
  }, [menuState, lineToDraw, isDrawingLine]);

  const addSvg = (svg: string) => {
    try {
      fabric.loadSVGFromString(
        svg,
        (objects, options) => {
          var obj = fabric.util.groupSVGElements(objects, options)
          obj.strokeUniform = true
          obj.strokeLineJoin = 'miter'
          obj.scaleToWidth(100)
          obj.scaleToHeight(100)

          fc.current.add(obj).viewportCenterObject(obj).renderAll()
          fc.current.fire('object:modified')
        }
      )
    } catch (_) {
      console.error("can't add shape");
    }
  };

  const addImageUrl = (url: string) => {
    try {
      fabric.loadSVGFromURL(
        url,
        (objects, options) => {
          var obj = fabric.util.groupSVGElements(objects, options)
          obj.strokeUniform = true
          obj.strokeLineJoin = 'miter'
          obj.scaleToWidth(100)
          obj.scaleToHeight(100)

          fc.current.add(obj).viewportCenterObject(obj).renderAll()
          fc.current.fire('object:modified')
        }
      )
    } catch (_) {
      console.error("can't add shape");
    }
  };

  const addNetworkImage = (url: string, scale: number = 1) => {
    try {
      fabric.Image.fromURL(url, function (img) {
        img.scaleToWidth(fc.current.width * scale)
        img.scaleToHeight(fc.current.height * scale)
        fc.current.add(img).viewportCenterObject(img).renderAll()
        fc.current.fire('object:modified')
      });
    } catch (_) {
      console.error("can't add image");
    }
  };

  const scaleFactor = 0.66;
  const addImage = (file: File, position?: { left: number; top: number }) => {
    try {
      var reader = new FileReader();
      reader.onload = function (event) {
        var imgObj = new Image();
        imgObj.src = event.target.result as string;
        imgObj.onload = function () {
          var image = new fabric.Image(imgObj);
          // Scale
          const maxSize = fc.current.getWidth() * scaleFactor;
          if (image.height > maxSize || image.width > maxSize) {
            if (image.height > image.width) {
              image.scaleToHeight(maxSize);
            } else {
              image.scaleToWidth(maxSize);
            }
          }
          if (position) {
            const zoom = fc.current.getZoom();
            image.set({
              left: position.left / zoom - image.width / 2,
              top: position.top / zoom - image.height / 2,
            })
            fc.current.add(image)
          } else {
            fc.current.add(image).viewportCenterObject(image);
          }
          fc.current.renderAll();
          fc.current.fire('object:modified')
        }
      }
      reader.readAsDataURL(file);
      // ADDING THIS FOR BEING ABLE TO UPLOAD THE SAME IMAGE AGAIN EVEN AFTER IT IS REMOVED AND WANTED TO GET ADDED AGAIN
      (document.querySelector("[name='upload-image-canvas-form']") as HTMLFormElement).reset()
    } catch (e) {
      console.error(e);
      console.error("can't add shape");
    }
  };

  const handleSetMenuState = (selectedState: string) => {
    // discarding the active object so that the newly added object won't be beneath the active object
    // and the user will think that the new object has not been added because that is not instantly visible
    fc?.current?.discardActiveObject()?.requestRenderAll();
    setMenuState(selectedState)
  }

  const getImage = async () => {
    const canvasWidth = fc.current.getWidth();
    let wasGridBackgroundActive = gridBackgroundActive;
    if (wasGridBackgroundActive) {
      await removeGridBackground();
    }
    const input = fc.current.toDataURL({
      format: 'png',
      multiplier: 1024 / canvasWidth,
      left: 0,
      top: 0,
      width: canvasWidth,
      height: canvasWidth,
    });

    if (wasGridBackgroundActive) {
      await addGridBackground();
    }

    return input;
  };

  return {
    fabricCanvas: fc,
    htmlCanvas: elementRef,
    setRef,
    menuState,
    setMenuState: handleSetMenuState,
    brushWidth,
    setBrushWidth,
    eraserWidth,
    setEraserWidth,
    brushColor,
    setBrushColor,
    addSvg,
    addImage,
    addImageUrl,
    undo: undoHandler,
    redo: redoHandler,
    clear: clearHandler,
    download: downloadHandler,
    addGridBackground,
    removeGridBackground,
    gridBackgroundActive,
    fullScreen,
    setFullScreen,
    activeSelection,
    setActiveSelection,
    getImage,
  }
}
