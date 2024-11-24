import { MarketingItemType } from "@/types/docs/marketing.types";
import React, { FC } from "react";
import ExternalLink from "../ExternalLink/ExternalLink";

interface MarketingTableProps {
  marketingItems: MarketingItemType[];
  columns: string[];
}

const MarketingTable: FC<MarketingTableProps> = ({
  marketingItems,
  columns,
}) => {
  return (
    <table className="table w-full">
      {/* head */}
      <thead>
        <tr>
          <th></th>
          {columns.map((column) => (
            <th className="text-xs sm:text-base" key={column}>{column}</th>
          ))}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {marketingItems?.map((marketingItem) => (
          <tr className="hover:bg-base-100 text-xs sm:text-sm" key={marketingItem.title}>
            <th> 
              <label>
                <input type="checkbox" className="checkbox w-1 h-1 sm:w-4 sm:h-4" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div>
                  <div className="font-bold"><ExternalLink href={marketingItem.url}>{marketingItem.title}</ExternalLink></div>
                </div>
              </div>
            </td>
            {columns.includes("Link Strength") && (
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-bold">
                      {marketingItem.linkStrength}
                    </div>
                  </div>
                </div>
              </td>
            )}
            <td>{marketingItem.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MarketingTable;
