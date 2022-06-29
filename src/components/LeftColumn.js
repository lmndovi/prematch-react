import React from "react";
import { Skeleton } from "primereact/skeleton";
import "./LeftColumn.css";

const LeftColumn = () => {
  return (
    <div className="LeftColumn">
      <Skeleton
        className="LeftColumn-Skeleton-1"
        width="433px"
        height="262px"
        shape="rectangle"
      />
      <Skeleton
        className="LeftColumn-Skeleton-2"
        width="433px"
        height="512px"
        shape="rectangle"
      />
    </div>
  );
};

export default LeftColumn;
