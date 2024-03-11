/* eslint-disable @next/next/no-img-element */
"use client";

import { Fragment, useMemo, useRef, useState } from "react";
import { faIcons } from "@/types/fa-icons";
import { useVirtualizer } from "@tanstack/react-virtual";
import Fuse from "fuse.js";
import { NSInput } from "../../base/NSInput";

const BrandIconPicker = ({
  onIconSelect,
}: {
  onIconSelect: (icon: string) => void;
}) => {
  const parentRef = useRef();
  const [query, setQuery] = useState("");

  const filteredIcons = useMemo(() => {
    let icons = faIcons;
    icons = icons.filter((icon) => icon.c === "brands");

    if (query) {
      const fuseOptions = {
        // isCaseSensitive: false,
        // includeScore: false,
        // shouldSort: true,
        // includeMatches: false,
        // findAllMatches: false,
        // minMatchCharLength: 1,
        // location: 0,
        // threshold: 0.6,
        // distance: 100,
        // useExtendedSearch: false,
        // ignoreLocation: false,
        // ignoreFieldNorm: false,
        // fieldNormWeight: 1,
        keys: ["n"],
      };

      const fuse = new Fuse(icons, fuseOptions);

      // Change the pattern

      return fuse.search(query).map((q) => q.item);
    }
    return icons;
  }, [query]);

  // The virtualizer
  const rowVirtualizer = useVirtualizer({
    count: Math.ceil(filteredIcons.length / 7),
    getScrollElement: () => parentRef.current,
    estimateSize: () => 48,
    overscan: 5,
  });

  const columnVirtualizer = useVirtualizer({
    horizontal: true,
    count: 7,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 48,
    overscan: 5,
  });

  return (
    <div className="relative flex flex-col gap-3 py-3 bg-white">
      <div className="flex items-center mx-3">
        <NSInput
          placeholder="Search..."
          className=""
          onChange={(value) => setQuery(value.target.value)}
        />
      </div>
      <div
        ref={parentRef}
        className="max-h-[272px] overflow-y-scroll no-scrollbar pl-3 overflow-x-hidden"
      >
        <div
          className="grid grid-cols-7 gap-3"
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => (
            <Fragment key={virtualRow.key}>
              {columnVirtualizer.getVirtualItems().map(
                (virtualColumn) =>
                  virtualRow.index * 7 + virtualColumn.index <
                    filteredIcons.length && (
                    <button
                      key={virtualColumn.key}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: `32px`,
                        height: `32px`,
                        transform: `translateX(${
                          48 * virtualColumn.index
                        }px) translateY(${virtualRow.index * 48}px)`,
                      }}
                      onClick={() =>
                        onIconSelect(
                          `/assets/fa-icons${
                            filteredIcons[
                              virtualRow.index * 7 + virtualColumn.index
                            ].p
                          }`
                        )
                      }
                    >
                      <img
                        className="w-8 h-8 p-[5px]"
                        src={`/assets/fa-icons${
                          filteredIcons[
                            virtualRow.index * 7 + virtualColumn.index
                          ].p
                        }`}
                        alt=""
                      />
                    </button>
                  )
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandIconPicker;
