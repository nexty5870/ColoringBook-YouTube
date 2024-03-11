import { Popover, Transition } from "@headlessui/react";
import { MutableRefObject, Fragment } from "react";
import BrandIconPicker from "./BrandIconPicker";
import IconPicker from "./IconPicker";
import ShapePicker from "./ShapePicker";
import classnames from "classnames";
import config from "@/config";
import { NSIcon } from "../../base/NSIcon";

const CanvasToolbox = ({
  menuState,
  setMenuState,
  brushWidth,
  setBrushWidth,
  addSvg,
  addImageUrl,
  inputFile,
  eraserWidth,
  setEraserWidth,
  className,
}: {
  menuState: string;
  setMenuState: (value: string) => void;
  brushWidth: number;
  setBrushWidth: (value: number) => void;
  addSvg: (svg: string) => void;
  addImageUrl: (url: string) => void;
  inputFile: MutableRefObject<any>;
  eraserWidth: number;
  setEraserWidth: (value: number) => void;
  className: string;
}) => {
  return (
    <div
      className={classnames(
        "left-0 right-[50%] translate-x-[50%] flex justify-center",
        className
      )}
    >
      <div className="mx-auto p-1 ring-1 ring-[#EBF0F3] flex bg-white gap-1 rounded-xl">
        <button
          data-tooltip-id="canvas-tooltip"
          data-tooltip-content="Select"
          data-attr-shortcut="V"
          className={`${
            menuState === "Select" ? "bg-surface-brand-hover" : ""
          } p-2.5 hover:bg-surface-brand-hover rounded-lg`}
          onClick={() => setMenuState("Select")}
        >
          <NSIcon type="cursor" />
        </button>
        <Popover className="relative">
          {({ close }) => (
            <>
              <Popover.Button
                data-tooltip-id="canvas-tooltip"
                data-tooltip-content="Sketch"
                data-attr-shortcut="S"
                className={`${
                  menuState === "Brush" ? "bg-surface-brand-hover" : ""
                } p-2.5 hover:bg-surface-brand-hover rounded-lg`}
                onClick={() => setMenuState("Brush")}
              >
                <NSIcon type="pencilSimple" />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="fixed z-10 -translate-x-[70px] mt-2">
                  <div className="overflow-hidden rounded-xl shadow-rounded ring-1 ring-border-disabled max-w-[184px] min-w-[184px]">
                    <div className="relative flex items-end gap-4 p-3 bg-white">
                      <button
                        className={`${
                          brushWidth === 4
                            ? "bg-content-brand"
                            : "bg-surface-secondary"
                        } rounded-full hover:bg-content-brand w-2 h-2`}
                        onClick={() => (setBrushWidth(4), close())}
                      />
                      <button
                        className={`${
                          brushWidth === 6
                            ? "bg-content-brand"
                            : "bg-surface-secondary"
                        } rounded-full hover:bg-content-brand w-3 h-3`}
                        onClick={() => (setBrushWidth(6), close())}
                      />
                      <button
                        className={`${
                          brushWidth === 10
                            ? "bg-content-brand"
                            : "bg-surface-secondary"
                        } rounded-lg hover:bg-content-brand w-5 h-5`}
                        onClick={() => (setBrushWidth(10), close())}
                      />
                      <button
                        className={`${
                          brushWidth === 12
                            ? "bg-content-brand"
                            : "bg-surface-secondary"
                        } rounded-lg hover:bg-content-brand w-6 h-6`}
                        onClick={() => (setBrushWidth(12), close())}
                      />
                      <button
                        className={`${
                          brushWidth === 16
                            ? "bg-content-brand"
                            : "bg-surface-secondary"
                        } rounded-lg hover:bg-content-brand w-8 h-8`}
                        onClick={() => (setBrushWidth(16), close())}
                      />
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <button
          data-tooltip-id="canvas-tooltip"
          data-tooltip-content="Line"
          data-attr-shortcut="L"
          className={`${
            menuState === "Line" ? "bg-surface-brand-hover" : ""
          } p-2.5 hover:bg-surface-brand-hover rounded-lg`}
          onClick={() => setMenuState("Line")}
        >
          <NSIcon type="penNibStraight" />
        </button>
        {!config.canvas.hideShapes && (
          <Popover className="relative">
            {({ close }) => (
              <>
                <Popover.Button
                  data-tooltip-id="canvas-tooltip"
                  data-tooltip-content="Shape"
                  data-attr-shortcut="O"
                  className={`${
                    menuState === "Shape" ? "bg-surface-brand-hover" : ""
                  } p-2.5 hover:bg-surface-brand-hover rounded-lg`}
                  onClick={() => setMenuState("Shape")}
                >
                  <NSIcon type="shapes" />
                </Popover.Button>
                <Transition
                  show={menuState === "Shape"}
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="fixed z-10 -translate-x-[150px] mt-2">
                    <div className="overflow-hidden rounded-xl shadow-popover ring-1 ring-border-disabled max-w-[345px] min-w-[345px]">
                      <ShapePicker
                        onShapeSelect={(shape: string) => {
                          addSvg(shape);
                          setMenuState("Select");
                          close();
                        }}
                      />
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        )}
        {!config.canvas.hideIcons && (
          <Popover className="relative">
            {({ close }) => (
              <>
                <Popover.Button
                  data-tooltip-id="canvas-tooltip"
                  data-tooltip-content="Icons"
                  data-attr-shortcut="I"
                  className={`${
                    menuState === "Icons" ? "bg-surface-brand-hover" : ""
                  } p-2.5 hover:bg-surface-brand-hover rounded-lg`}
                  onClick={() => setMenuState("Icons")}
                >
                  <NSIcon type="smileyWink" />
                </Popover.Button>
                <Transition
                  show={menuState === "Icons"}
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="fixed z-10 -translate-x-[150px] mt-2">
                    <div className="overflow-hidden rounded-xl shadow-popover ring-1 ring-border-disabled max-w-[345px] min-w-[345px]">
                      <IconPicker
                        onIconSelect={(icon: string) => {
                          addImageUrl(icon);
                          setMenuState("Select");
                          close();
                        }}
                      />
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        )}
        {!config.canvas.hideBrands && (
          <Popover className="relative">
            {({ close }) => (
              <>
                <Popover.Button
                  data-tooltip-id="canvas-tooltip"
                  data-tooltip-content="Brands"
                  data-attr-shortcut="B"
                  className={`${
                    menuState === "Brands" ? "bg-surface-brand-hover" : ""
                  } p-2.5 hover:bg-surface-brand-hover rounded-lg`}
                  onClick={() => setMenuState("Brands")}
                >
                  <NSIcon type="googleLogo" />
                </Popover.Button>
                <Transition
                  show={menuState === "Brands"}
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="fixed z-10 -translate-x-[150px] mt-2">
                    <div className="overflow-hidden rounded-xl shadow-popover ring-1 ring-border-disabled max-w-[345px] min-w-[345px]">
                      <BrandIconPicker
                        onIconSelect={(icon: string) => {
                          addImageUrl(icon);
                          setMenuState("Select");
                          close();
                        }}
                      />
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        )}
        {!config.canvas.hideUpload && (
          <button
            id="upload-btn"
            data-tooltip-id="canvas-tooltip"
            data-tooltip-content="Upload Image"
            className="p-2.5 hover:bg-surface-brand-hover rounded-lg"
            onClick={() => (setMenuState("Select"), inputFile.current.click())}
          >
            <NSIcon type="image" />
          </button>
        )}

        {!config.canvas.hideEraser && (
          <Popover className="relative">
            {({ close }) => (
              <>
                <Popover.Button
                  data-tooltip-id="canvas-tooltip"
                  data-tooltip-content="Eraser"
                  data-attr-shortcut="E"
                  className={`${
                    menuState === "Eraser" ? "bg-surface-brand-hover" : ""
                  } p-2.5 hover:bg-surface-brand-hover rounded-lg`}
                  onClick={() => setMenuState("Eraser")}
                >
                  <NSIcon type="eraser" />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="fixed z-10 -translate-x-[70px] mt-2">
                    <div className="overflow-hidden rounded-xl shadow-popover ring-1 ring-border-disabled max-w-[184px] min-w-[184px]">
                      <div className="relative flex items-end gap-4 p-3 bg-white">
                        <button
                          className={`${
                            eraserWidth === 4
                              ? "bg-content-brand"
                              : "bg-surface-secondary"
                          } rounded-full hover:bg-content-brand w-2 h-2`}
                          onClick={() => (setEraserWidth(4), close())}
                        />
                        <button
                          className={`${
                            eraserWidth === 6
                              ? "bg-content-brand"
                              : "bg-surface-secondary"
                          } rounded-full hover:bg-content-brand w-3 h-3`}
                          onClick={() => (setEraserWidth(6), close())}
                        />
                        <button
                          className={`${
                            eraserWidth === 10
                              ? "bg-content-brand"
                              : "bg-surface-secondary"
                          } rounded-lg hover:bg-content-brand w-5 h-5`}
                          onClick={() => (setEraserWidth(10), close())}
                        />
                        <button
                          className={`${
                            eraserWidth === 12
                              ? "bg-content-brand"
                              : "bg-surface-secondary"
                          } rounded-lg hover:bg-content-brand w-6 h-6`}
                          onClick={() => (setEraserWidth(12), close())}
                        />
                        <button
                          className={`${
                            eraserWidth === 16
                              ? "bg-content-brand"
                              : "bg-surface-secondary"
                          } rounded-lg hover:bg-content-brand w-8 h-8`}
                          onClick={() => (setEraserWidth(16), close())}
                        />
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        )}
      </div>
    </div>
  );
};

export default CanvasToolbox;
