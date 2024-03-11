/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import { countryFlags } from "@/app/utils/country-flags";
import { useVirtualizer } from "@tanstack/react-virtual";
import { Popover, Transition } from "@headlessui/react";
import Fuse from "fuse.js";
import React, { useMemo, useRef, useState, Fragment, FC } from "react";
import { usePopper } from "react-popper";
import classnames from "classnames";
import { NSIcon, NSInput } from "@/components/base";
import { CountryFlagPickerProps } from "./types";

const CountryFlagPicker: FC<CountryFlagPickerProps> = ({
  country,
  onCountrySelected,
}) => {
  const parentRef = useRef();
  const [query, setQuery] = useState("");
  const [referenceElement, setReferenceElement] = useState();
  const [popperElement, setPopperElement] = useState();
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "right-start",
    strategy: "fixed",
  });

  const filteredFlags = useMemo(() => {
    let flags = countryFlags;

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
        keys: ["name"],
      };

      const fuse = new Fuse(flags, fuseOptions);

      // Change the pattern

      return fuse.search(query).map((q) => q.item);
    }
    return flags;
  }, [query]);

  // The virtualizer
  const rowVirtualizer = useVirtualizer({
    count: filteredFlags.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 48,
    overscan: 5,
  });

  const onFlagSelect = (flag: string, close: () => void) => {
    if (flag === "None") {
      onCountrySelected(null);
    } else {
      onCountrySelected(flag);
    }
    close();
    // Resetting the query
    setQuery("");
  };

  const getSelectedCountryFlag = (name: string) => {
    return countryFlags?.find((item) => item.name === name)?.image;
  };

  return (
    <Popover className="relative w-full">
      {({ close }) => (
        <>
          <Popover.Button className="w-full" ref={setReferenceElement as any}>
            <div
              className={classnames(
                country ? "bg-surface-brand-hover" : "bg-surface-primary",
                "flex items-center h-10 gap-4xs p-4xs ring-1 ring-border-disabled rounded-xs hover:bg-surface-brand-subdued"
              )}
            >
              {!country ? (
                <NSIcon type="flag" />
              ) : (
                <img
                  className="w-6 h-6"
                  src={getSelectedCountryFlag(country)}
                  alt=""
                />
              )}
              <p className="flex-1 text-xs font-medium text-left truncate text-content-primary text-ellipsis">
                {country ? `${country} ` : "Select a country"}
              </p>
              <NSIcon type="caretRight" className="!w-4 !h-4" />
            </div>
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
              className="absolute z-10 flex ml-1 border rounded-sm shadow-popover bg-surface-primary border-border-disabled py-2xs pl-2xs"
            >
              <div className="flex flex-col bg-white">
                <div className="flex items-center gap-3 mr-2xs">
                  <NSInput
                    placeholder="Search a country..."
                    onChange={(value) => setQuery(value.target.value)}
                  />
                </div>
                <div
                  ref={parentRef}
                  className="max-h-[272px] overflow-y-scroll no-scrollbar overflow-x-hidden bg-white mt-1"
                >
                  <div
                    style={{
                      height: `${rowVirtualizer.getTotalSize()}px`,
                      width: "100%",
                      position: "relative",
                    }}
                  >
                    {rowVirtualizer.getVirtualItems().map((virtualRow) => (
                      <Fragment key={virtualRow.key}>
                        <button
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            height: `40px`,
                            transform: `translateY(${virtualRow.index * 48}px)`,
                          }}
                          className={classnames(
                            "flex items-center w-full gap-3xs hover:bg-surface-brand-subdued rounded-xs p-3xs",
                            country === filteredFlags[virtualRow.index]?.name
                              ? "bg-surface-brand-hover"
                              : "bg-surface-primary"
                          )}
                          onClick={() =>
                            onFlagSelect(
                              `${filteredFlags[virtualRow.index].name}`,
                              close
                            )
                          }
                        >
                          <img
                            className="w-6 h-6"
                            src={`${filteredFlags[virtualRow.index]?.image}`}
                            alt=""
                          />
                          <span className="flex-1 flex-grow text-sm text-left truncate text-ellipsis">
                            {filteredFlags[virtualRow.index]?.name}
                          </span>
                        </button>
                      </Fragment>
                    ))}
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

export default CountryFlagPicker;
