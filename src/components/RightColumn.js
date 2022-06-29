import React from "react";
import { Skeleton } from "primereact/skeleton";
import "./RightColumn.css";

const RightColumn = () => {
  return (
    <div className="RightColumn">
      <Skeleton
        className="RightColumn-Skeleton-1"
        width="441px"
        height="251px"
        shape="rectangle"
      />
      <Skeleton
        className="RightColumn-Skeleton-2"
        width="441px"
        height="252px"
        shape="rectangle"
      />
      <Skeleton
        className="RightColumn-Skeleton-3"
        width="441px"
        height="251px"
        shape="rectangle"
      />
    </div>
  );
};

export default RightColumn;
