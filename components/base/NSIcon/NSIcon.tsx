/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { IconProps } from "./types";
import {
  PiArrowRight,
  PiCheck,
  PiSparkle,
  PiX,
  PiInfo,
  PiFlag,
  PiCaretRight,
  PiArrowCounterClockwise,
  PiEyedropper,
  PiBroom,
  PiClockCounterClockwiseDuotone,
  PiUserDuotone,
  PiSignOutDuotone,
  PiBugDuotone,
  PiVideoDuotone,
  PiKeyboardDuotone,
  PiBackspace,
  PiKeyReturn,
  PiArrowFatUp,
  PiCommand,
  PiQuestion,
  PiWarning,
  PiLightningFill,
  PiFunnelDuotone,
  PiSlidersHorizontalDuotone,
  PiUser,
  PiGridNineDuotone,
  PiCursorDuotone,
  PiPencilSimpleDuotone,
  PiPenNibStraightDuotone,
  PiShapesDuotone,
  PiSmileyWinkFill,
  PiSmileyWinkDuotone,
  PiGoogleLogoDuotone,
  PiImageDuotone,
  PiEraserDuotone,
  PiArrowsOutDuotone,
  PiDownloadSimpleDuotone,
  PiBroomDuotone,
  PiArrowUUpLeftDuotone,
  PiArrowUUpRightDuotone,
  PiDotsThreeOutlineVerticalDuotone,
  PiTrashDuotone,
} from "react-icons/pi";
import classnames from "classnames";

const customIcons: Record<string, string> = {
  horizontal:
    '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20"><path d="M19.333 11.667a1 1 0 0 1-1 1H8.667a1 1 0 0 1-1-1V8.333a1 1 0 0 1 1-1h9.666a1 1 0 0 1 1 1v3.334Z"/><rect width="5" height="5" x=".5" y="7.5" rx="2.5"/></svg>',
  vertical:
    '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path d="M13.75 10.5a1 1 0 0 1-1 1H2.25a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h10.5a1 1 0 0 1 1 1v3Z"/><rect width="5" height="5" x="5" rx="2.5"/></svg>',
  single:
    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M16.25 11.5a1 1 0 0 1-1 1H4.75a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h10.5a1 1 0 0 1 1 1v3Z"/></svg>',
  twoParts:
    '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20"><path d="M9.333 11.667a1 1 0 0 1-1 1H3.667a1 1 0 0 1-1-1V8.333a1 1 0 0 1 1-1h4.666a1 1 0 0 1 1 1v3.334ZM18.333 11.667a1 1 0 0 1-1 1h-4.666a1 1 0 0 1-1-1V8.333a1 1 0 0 1 1-1h4.666a1 1 0 0 1 1 1v3.334Z"/></svg>',
  leftAlign:
    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M18.125 11.875V15a1.25 1.25 0 0 1-1.25 1.25H6.25A1.25 1.25 0 0 1 5 15v-3.125a1.25 1.25 0 0 1 1.25-1.25h10.625a1.25 1.25 0 0 1 1.25 1.25Zm-15-9.375a.625.625 0 0 0-.625.625v13.75a.625.625 0 1 0 1.25 0V3.125a.625.625 0 0 0-.625-.625ZM6.25 9.375h7.5A1.25 1.25 0 0 0 15 8.125V5a1.25 1.25 0 0 0-1.25-1.25h-7.5A1.25 1.25 0 0 0 5 5v3.125a1.25 1.25 0 0 0 1.25 1.25Z"/></svg>',
  centered:
    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M17.5 11.875V15a1.25 1.25 0 0 1-1.25 1.25h-5.625v1.25a.624.624 0 1 1-1.25 0v-1.25H3.75A1.25 1.25 0 0 1 2.5 15v-3.125a1.25 1.25 0 0 1 1.25-1.25h5.625v-1.25h-3.75a1.25 1.25 0 0 1-1.25-1.25V5a1.25 1.25 0 0 1 1.25-1.25h3.75V2.5a.625.625 0 0 1 1.25 0v1.25h3.75A1.25 1.25 0 0 1 15.625 5v3.125a1.25 1.25 0 0 1-1.25 1.25h-3.75v1.25h5.625a1.25 1.25 0 0 1 1.25 1.25Z"/></svg>',
  justified:
    '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12"><rect width="13.334" height="4.5" x=".333" y="7" rx="1"/><rect width="13.334" height="4.5" x=".333" rx="1"/></svg>',
};

const NSIcon = ({
  type = "arrowRight",
  className = "",
  ...rest
}: IconProps) => {
  if (customIcons[type]) {
    return (
      <div
        {...rest}
        className={classnames(className)}
        dangerouslySetInnerHTML={{ __html: customIcons[type] }}
      />
    );
  }
  const icon = () => {
    switch (type) {
      case "sparkle":
        return PiSparkle;
      case "arrowRight":
        return PiArrowRight;
      case "check":
        return PiCheck;
      case "close":
        return PiX;
      case "info":
        return PiInfo;
      case "flag":
        return PiFlag;
      case "caretRight":
        return PiCaretRight;
      case "arrowCounterClockwise":
        return PiArrowCounterClockwise;
      case "eyedropper":
        return PiEyedropper;
      case "broom":
        return PiBroomDuotone;
      case "clockCounterClockwise":
        return PiClockCounterClockwiseDuotone;
      case "user":
        return PiUser;
      case "userDuotone":
        return PiUserDuotone;
      case "signOut":
        return PiSignOutDuotone;
      case "bug":
        return PiBugDuotone;
      case "video":
        return PiVideoDuotone;
      case "keyboard":
        return PiKeyboardDuotone;
      case "backspace":
        return PiBackspace;
      case "keyReturn":
        return PiKeyReturn;
      case "arrowFatUp":
        return PiArrowFatUp;
      case "command":
        return PiCommand;
      case "question":
        return PiQuestion;
      case "warning":
        return PiWarning;
      case "lightning":
        return PiLightningFill;
      case "funnel":
        return PiFunnelDuotone;
      case "slidersHorizontal":
        return PiSlidersHorizontalDuotone;
      case "gridNine":
        return PiGridNineDuotone;
      case "cursor":
        return PiCursorDuotone;
      case "pencilSimple":
        return PiPencilSimpleDuotone;
      case "penNibStraight":
        return PiPenNibStraightDuotone;
      case "shapes":
        return PiShapesDuotone;
      case "smileyWink":
        return PiSmileyWinkDuotone;
      case "googleLogo":
        return PiGoogleLogoDuotone;
      case "image":
        return PiImageDuotone;
      case "eraser":
        return PiEraserDuotone;
      case "arrowsOut":
        return PiArrowsOutDuotone;
      case "downloadSimple":
        return PiDownloadSimpleDuotone;
      case "arrowUUpLeft":
        return PiArrowUUpLeftDuotone;
      case "arrowUUpRight":
        return PiArrowUUpRightDuotone;
      case "dotsThreeOutlineVertical":
        return PiDotsThreeOutlineVerticalDuotone;
      case "trash":
        return PiTrashDuotone;
    }
  };

  const Icon = icon();

  return <Icon {...rest} className={classnames("w-5 h-5", className)} />;
};

export default NSIcon;
