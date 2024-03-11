"use client";

import { memo, useCallback, useContext, useEffect, useRef } from "react";
import { Tooltip } from "react-tooltip";
import classnames from "classnames";
import { fabric } from "fabric";
import { CanvasContext } from "@/store/context/CanvasContext";
import { useContextMenu } from "react-contexify";
import CanvasContextMenu from "@/components/app-components/Canvas/CanvasContextMenu";
import CanvasToolbox from "@/components/app-components/Canvas/CanvasToolbox";
import ClearButton from "@/components/app-components/Canvas/ClearButton";
import config from "@/config";
import { NSIcon } from "@/components/base/NSIcon";

const MENU_ID = "canvasContextMenu";

// eslint-disable-next-line react/display-name
const FabricMemo = memo(
  ({ setRef, handleCanvasInit }: { setRef: any; handleCanvasInit: any }) => {
    return (
      <canvas
        ref={(ref) => setRef(ref, handleCanvasInit)}
        className="w-full h-full rounded-2xl"
      />
    );
  }
);

const Canvas = () => {
  const {
    setRef,
    setMenuState,
    menuState,
    fabricCanvas,
    undo,
    redo,
    clear,
    download,
    brushWidth,
    setBrushWidth,
    eraserWidth,
    setEraserWidth,
    addSvg,
    addImage,
    addImageUrl,
    fullScreen,
    setFullScreen,
    addGridBackground,
    removeGridBackground,
    gridBackgroundActive,
    activeSelection,
    setActiveSelection,
  } = useContext(CanvasContext);

  const handleCanvasInit = useCallback((canvas: fabric.Canvas) => {
    canvas.setHeight(document.getElementById("canvasContainer").clientHeight);
    canvas.setWidth(document.getElementById("canvasContainer").clientWidth);
    canvas.backgroundColor = "#FFFFFF";

    fabric.util.addListener(
      document.getElementsByClassName("upper-canvas")[0] as HTMLElement,
      "contextmenu",
      function (options: PointerEvent) {
        let target = canvas.findTarget(options, false);
        if (target) {
          // Right click on a canvas object
          let type: string = target.type;
          canvas.setActiveObject(target);
          canvas.renderAll();
          handleContextMenu(options, type);
        } else {
          // Right click on the canvas
          canvas.discardActiveObject();
          canvas.renderAll();
        }
        options.preventDefault();
      }
    );
  }, []);

  const { show, hideAll } = useContextMenu({
    id: MENU_ID,
  });

  function handleContextMenu(event: PointerEvent, type: string) {
    show({
      event,
      props: {
        activeObjectType: type,
      },
    });
  }

  const openContextMenuOnMobile = (event: any) => {
    const type = fabricCanvas.current.getActiveObjects()[0].type;
    show({
      event,
      props: {
        activeObjectType: type,
      },
    });
  };

  useEffect(() => {
    const selectionCreatedHandler = (event: fabric.IEvent<MouseEvent>) => {
      const activeSelection = event.selected;
      setActiveSelection(activeSelection);
    };

    const selectionClearedHandler = (event: fabric.IEvent<MouseEvent>) => {
      setActiveSelection([]);
      hideAll();
    };
    // Event listener for selection creation
    fabricCanvas.current?.on("selection:created", selectionCreatedHandler);

    // Event listener for selection cleared
    fabricCanvas.current?.on("selection:cleared", selectionClearedHandler);

    return () => {
      fabricCanvas.current?.off("selection:created", selectionCreatedHandler);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      fabricCanvas.current?.off("selection:cleared", selectionClearedHandler);
    };
  }, [fabricCanvas, setActiveSelection]);

  const handleRemoveClick = () => {
    fabricCanvas.current.getActiveObjects().forEach((obj) => {
      fabricCanvas.current.remove(obj);
    });

    fabricCanvas.current.discardActiveObject().requestRenderAll();
    fabricCanvas.current.fire("object:modified");
  };

  const inputFile = useRef(null);
  return (
    <>
      {fullScreen && (
        <div className="fixed inset-0 z-10 bg-black/60" aria-hidden="true" />
      )}
      <CanvasToolbox
        menuState={menuState}
        setMenuState={setMenuState}
        brushWidth={brushWidth}
        setBrushWidth={setBrushWidth}
        addSvg={addSvg}
        addImageUrl={addImageUrl}
        inputFile={inputFile}
        eraserWidth={eraserWidth}
        setEraserWidth={setEraserWidth}
        className={classnames({
          "min-[568px]:hidden top-[-71px] absolute z-[2]": !fullScreen,
          hidden: fullScreen,
        })}
      />
      <div
        className={
          fullScreen
            ? "fixed top-0 max-[567px]:top-[120px] left-1/2 -translate-x-1/2 z-10"
            : "relative w-full h-full"
        }
      >
        <form name="upload-image-canvas-form">
          <input
            type="file"
            id="file"
            ref={inputFile}
            className="hidden"
            onChange={(e) => addImage(e.target.files[0])}
          />
        </form>
        <div id="canvasContainer" className="w-full h-full">
          <FabricMemo setRef={setRef} handleCanvasInit={handleCanvasInit} />
          <CanvasContextMenu menuId={MENU_ID} />
        </div>
        <CanvasToolbox
          menuState={menuState}
          setMenuState={setMenuState}
          brushWidth={brushWidth}
          setBrushWidth={setBrushWidth}
          addSvg={addSvg}
          addImageUrl={addImageUrl}
          inputFile={inputFile}
          eraserWidth={eraserWidth}
          setEraserWidth={setEraserWidth}
          className={classnames(
            { "max-[567px]:hidden": !fullScreen },
            " absolute top-3",
            { "max-[567px]:top-[-71px]": fullScreen }
          )}
        />
        {/** ADD/REMOVE GRID */}
        {!config.canvas.hideGrid && (
          <button
            id="grid-btn"
            onClick={async () => {
              if (gridBackgroundActive) {
                await removeGridBackground();
              } else {
                await addGridBackground();
              }
            }}
            data-tooltip-id="canvas-tooltip"
            data-tooltip-content="Add Grid"
            className={classnames(
              "absolute top-3 left-3 p-2.5 ring-1 ring-[#EBF0F3] rounded-xl hover:bg-surface-brand-hover",
              gridBackgroundActive && "bg-surface-brand-hover"
            )}
          >
            <NSIcon type="gridNine" />
          </button>
        )}
        {/** SET FULL SCREEN */}
        {!config.canvas.hideFullscreen && (
          <button
            id="fullscreen-btn"
            onClick={() => setFullScreen((prev) => !prev)}
            className="absolute top-3 right-3 p-2.5 ring-1 ring-[#EBF0F3] rounded-xl hover:bg-surface-brand-hover"
          >
            <NSIcon type="arrowsOut" />
          </button>
        )}
        <div className="absolute bottom-3 left-3 ring-1 ring-[#EBF0F3] rounded-xl flex divide-x-[1px]">
          {/** DOWNLOAD */}
          {!config.canvas.hideDownload && (
            <button
              id="download-btn"
              className="p-2.5 hover:bg-surface-brand-hover rounded-l-xl"
              onClick={() => download("my-sketch.png")}
            >
              <NSIcon type="downloadSimple" />
            </button>
          )}
          {!config.canvas.hideClear && <ClearButton onClear={() => clear()} />}
        </div>
        {/** Mobile Context Menu */}
        {activeSelection?.length ? (
          <div className=" flex items-center rounded-xl bg-surface-overlay min-[1080px]:hidden absolute bottom-2 left-[50%] translate-x-[-50%]">
            {/** Mobile remove button */}
            <button className="p-1.5 rounded-l-lg" onClick={handleRemoveClick}>
              <NSIcon type="trash" className="text-content-error" />
            </button>
            {/** Open context menu on mobile */}
            <button
              className="p-1.5 rounded-r-lg"
              onClick={openContextMenuOnMobile}
            >
              <NSIcon
                type="dotsThreeOutlineVertical"
                className="text-content-invert"
              />
            </button>
          </div>
        ) : (
          <></>
        )}
        {!config.canvas.hideUndoRedo && (
          <div className="absolute bottom-3 right-3 ring-1 ring-[#EBF0F3] rounded-xl flex divide-x-[1px]">
            <button
              id="undo-btn"
              className="p-2.5 hover:bg-surface-brand-hover rounded-l-xl"
              onClick={() => undo()}
            >
              <NSIcon type="arrowUUpLeft" />
            </button>
            <button
              id="redo-btn"
              className="p-2.5 hover:bg-surface-brand-hover rounded-r-xl"
              onClick={() => redo()}
            >
              <NSIcon type="arrowUUpRight" />
            </button>
          </div>
        )}
      </div>
      <Tooltip
        id="canvas-tooltip"
        place="bottom"
        classNameArrow=" hidden"
        className="p-0 m-0 "
        style={{ padding: "3px 5px", backgroundColor: "#030616" }}
        render={({ content, activeAnchor }) => (
          <span className="text-xs">
            {content}{" "}
            {activeAnchor?.getAttribute("data-attr-shortcut") ? (
              <span className=" bg-[#292B39] px-1 py-[2px] rounded-[4px] text-[#BEBFC3]">
                {activeAnchor?.getAttribute("data-attr-shortcut")}
              </span>
            ) : (
              <></>
            )}
          </span>
        )}
      />
    </>
  );
};

export default Canvas;
