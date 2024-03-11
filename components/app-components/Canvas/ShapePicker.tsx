"use client";

import { useState } from "react";
import { canvasShapes } from "@/types/canvas-types";
import { NSTabStatic } from "@/components/base/NSTab";

const ShapePicker = ({
  onShapeSelect,
}: {
  onShapeSelect: (icon: string) => void;
}) => {
  const [shapeType, setShapeType] = useState("Regular");

  return (
    <div className="relative flex flex-col gap-3 p-3 bg-white">
      <NSTabStatic
        value={shapeType}
        options={["Regular", "Solid"]}
        onChange={(value: string) => setShapeType(value)}
      />
      <div className="grid grid-cols-9 gap-3">
        {canvasShapes[shapeType as keyof typeof canvasShapes].map(
          (shape, i) => {
            return (
              <button
                key={i}
                className="w-6 h-6"
                dangerouslySetInnerHTML={{ __html: shape }}
                onClick={() => onShapeSelect(shape)}
              ></button>
            );
          }
        )}
      </div>
    </div>
  );
};

export default ShapePicker;
