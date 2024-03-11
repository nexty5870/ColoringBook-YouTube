/* eslint-disable no-unused-vars */
import classnames from "classnames";
import { Popover, Transition } from "@headlessui/react";
import React, { FC, Fragment, useState } from "react";
import { usePopper } from "react-popper";
import { HexColorPicker } from "react-colorful";
import { RGBColorPickerProps } from "./types";

const RGBColorPicker: FC<RGBColorPickerProps> = ({
  color,
  onColorChange,
  placement = "right-start",
}) => {
  const [referenceElement, setReferenceElement] = useState();
  const [popperElement, setPopperElement] = useState();
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: placement ?? "right-start",
    strategy: "fixed",
  });

  const hexToRgb = (hex: string) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const rgbToHex = (r: number, g: number, b: number) => {
    return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
  };

  return (
    <Popover className="relative">
      {({ close }) => (
        <>
          <Popover.Button ref={setReferenceElement as any}>
            <svg
              className="cursor-pointer"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="35.5"
                y="0.5"
                width="35"
                height="35"
                rx="7.5"
                transform="rotate(90 35.5 0.5)"
                fill={color.length ? color : "#FBFBFB"}
              />
              <rect
                x="35.5"
                y="0.5"
                width="35"
                height="35"
                rx="7.5"
                transform="rotate(90 35.5 0.5)"
                stroke="#EBF0F3"
              />
              <g opacity="0.5">
                <path
                  opacity="0.2"
                  d="M24.2344 14.8437L22.2523 16.8383L22.6344 17.2195C22.7506 17.3356 22.8428 17.4735 22.9057 17.6252C22.9686 17.777 23.001 17.9396 23.001 18.1039C23.001 18.2682 22.9686 18.4308 22.9057 18.5826C22.8428 18.7343 22.7506 18.8722 22.6344 18.9883L21.9313 19.6914C21.8732 19.7495 21.8043 19.7956 21.7284 19.8271C21.6525 19.8585 21.5712 19.8747 21.4891 19.8747C21.4069 19.8747 21.3256 19.8585 21.2497 19.8271C21.1739 19.7956 21.1049 19.7495 21.0469 19.6914L16.3063 14.9492C16.2481 14.8912 16.202 14.8222 16.1706 14.7464C16.1391 14.6705 16.1229 14.5892 16.1229 14.507C16.1229 14.4249 16.1391 14.3436 16.1706 14.2677C16.202 14.1918 16.2481 14.1229 16.3063 14.0648L17.0094 13.3617C17.1255 13.2456 17.2633 13.1535 17.4149 13.0907C17.5666 13.0278 17.7292 12.9955 17.8934 12.9955C18.0575 12.9955 18.2201 13.0278 18.3718 13.0907C18.5235 13.1535 18.6613 13.2456 18.7773 13.3617L19.1586 13.7437L21.1117 11.782C21.9547 10.9391 23.3281 10.8875 24.1938 11.7039C24.4066 11.9051 24.5768 12.1469 24.6944 12.4151C24.812 12.6833 24.8745 12.9724 24.8783 13.2652C24.8821 13.5581 24.8271 13.8487 24.7165 14.1198C24.6058 14.391 24.4419 14.6371 24.2344 14.8437Z"
                  fill={color.length ? "#FFFFFF" : "#020617"}
                />
                <path
                  d="M25.5 13.2578C25.4958 12.8817 25.4157 12.5103 25.2645 12.1658C25.1134 11.8214 24.8942 11.511 24.6203 11.2532C23.5266 10.2157 21.7516 10.2547 20.6656 11.3414L19.1562 12.8594C18.7998 12.5345 18.3318 12.3595 17.8497 12.3707C17.3675 12.3819 16.9082 12.5785 16.5672 12.9196L15.8641 13.6227C15.7478 13.7388 15.6556 13.8766 15.5927 14.0284C15.5298 14.1801 15.4975 14.3428 15.4975 14.5071C15.4975 14.6713 15.5298 14.834 15.5927 14.9857C15.6556 15.1375 15.7478 15.2753 15.8641 15.3914L16.0203 15.5524L12.0359 19.5368C11.6524 19.9173 11.3748 20.3913 11.2305 20.9119C11.0863 21.4326 11.0803 21.9819 11.2133 22.5055L10.5883 23.9438C10.5011 24.1414 10.4759 24.3608 10.5159 24.5731C10.5559 24.7854 10.6593 24.9805 10.8125 25.1328C10.9897 25.3112 11.2167 25.4316 11.4637 25.4784C11.7107 25.5251 11.966 25.4959 12.1961 25.3946L13.5648 24.7969C14.0791 24.9133 14.6144 24.8973 15.1208 24.7504C15.6272 24.6035 16.088 24.3305 16.4602 23.9571L20.4445 19.9727L20.6055 20.1336C20.8399 20.3679 21.1577 20.4995 21.4891 20.4995C21.8204 20.4995 22.1383 20.3679 22.3727 20.1336L23.0758 19.4305C23.4175 19.0891 23.6142 18.6289 23.625 18.146C23.6357 17.6631 23.4597 17.1946 23.1336 16.8383L24.6766 15.286C24.9433 15.0208 25.1537 14.7044 25.2952 14.3559C25.4367 14.0074 25.5064 13.6339 25.5 13.2578ZM15.5781 23.0782C15.3376 23.3192 15.036 23.4901 14.7057 23.5727C14.3753 23.6553 14.0288 23.6464 13.7031 23.5469C13.5603 23.5029 13.4065 23.5115 13.2695 23.5711L11.8555 24.1891L12.4531 22.7977C12.5151 22.6556 12.5221 22.4954 12.4727 22.3485C12.3594 22.0175 12.3415 21.6614 12.4209 21.3207C12.5003 20.9801 12.6739 20.6686 12.9219 20.4219L16.9062 16.4375L19.5578 19.0938L15.5781 23.0782ZM23.7914 14.4063L21.8094 16.4C21.6925 16.5172 21.6269 16.6759 21.6269 16.8414C21.6269 17.0069 21.6925 17.1657 21.8094 17.2828L22.1914 17.6649C22.2495 17.7229 22.2956 17.7919 22.3271 17.8677C22.3585 17.9436 22.3747 18.0249 22.3747 18.1071C22.3747 18.1892 22.3585 18.2705 22.3271 18.3464C22.2956 18.4223 22.2495 18.4912 22.1914 18.5493L21.4883 19.2524L16.75 14.5047L17.4531 13.8016C17.5703 13.6845 17.7292 13.6187 17.8949 13.6187C18.0606 13.6187 18.2195 13.6845 18.3367 13.8016L18.7187 14.1836C18.8359 14.3006 18.9946 14.3664 19.1602 14.3664C19.2424 14.3663 19.3237 14.3499 19.3996 14.3183C19.4755 14.2867 19.5444 14.2404 19.6023 14.1821L21.5508 12.2219C22.1609 11.611 23.1523 11.5828 23.7609 12.1586C23.913 12.3022 24.0346 12.4749 24.1187 12.6663C24.2027 12.8578 24.2475 13.0642 24.2504 13.2733C24.2532 13.4824 24.214 13.6899 24.1352 13.8836C24.0564 14.0773 23.9395 14.2531 23.7914 14.4008V14.4063Z"
                  fill={color.length ? "#FFFFFF" : "#020617"}
                />
              </g>
            </svg>
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
            <Popover.Panel
              ref={setPopperElement as any}
              style={styles.popper}
              {...attributes.popper}
              className={classnames(
                { "flex-row-reverse": placement.startsWith("left") },
                "absolute z-10 flex ml-1"
              )}
            >
              <svg
                className={classnames(
                  { "rotate-180": placement.startsWith("left") },
                  "mt-3"
                )}
                width="5"
                height="14"
                viewBox="0 0 5 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-3.0598e-07 7L4.5 0.937821L4.5 13.0622L-3.0598e-07 7Z"
                  fill="#020617"
                />
              </svg>

              <div
                className="overflow-hidden rounded-xl max-w-[340px] min-w-[340px]"
                style={{ border: "1px solid rgba(0,0,0,0.05)" }}
              >
                <div className="relative p-3 bg-white">
                  <HexColorPicker
                    className="min-w-[319px]"
                    color={color}
                    onChange={onColorChange}
                  />
                  <div className="mt-2 ">
                    {/** TOP LABELS */}
                    <div className="flex justify-between gap-2">
                      <span className="block w-[97px]">Hex</span>
                      <span className="block grow ">R</span>
                      <span className="block grow ">G</span>
                      <span className="block grow">B</span>
                    </div>
                    {/** BOTTOM INPUTS */}
                    <div className="flex justify-between gap-2">
                      <input
                        value={color}
                        onChange={(e) => onColorChange(e?.target?.value)}
                        className="border-2 w-[97px] rounded-lg h-[44px] pl-3"
                      />
                      <input
                        style={{ appearance: "none" }}
                        type="number"
                        min="0"
                        max="256"
                        value={hexToRgb(color)?.r}
                        onChange={(e) =>
                          onColorChange(
                            rgbToHex(
                              +e?.target?.value,
                              hexToRgb(color)?.g,
                              hexToRgb(color)?.b
                            )
                          )
                        }
                        className="border-2 w-[62px] rounded-lg h-[44px] pl-3"
                      />
                      <input
                        type="number"
                        min="0"
                        max="256"
                        value={hexToRgb(color)?.g}
                        onChange={(e) =>
                          onColorChange(
                            rgbToHex(
                              hexToRgb(color)?.r,
                              +e?.target?.value,
                              hexToRgb(color)?.b
                            )
                          )
                        }
                        className="border-2 w-[62px] rounded-lg h-[44px] pl-3"
                      />
                      <input
                        type="number"
                        min="0"
                        max="256"
                        value={hexToRgb(color)?.b}
                        onChange={(e) =>
                          onColorChange(
                            rgbToHex(
                              hexToRgb(color)?.r,
                              hexToRgb(color)?.g,
                              +e?.target?.value
                            )
                          )
                        }
                        className="border-2 w-[62px] rounded-lg h-[44px] pl-3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default RGBColorPicker;
