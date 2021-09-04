import React from "react";
import MoreThreeSummary from "./MoreThreeSummary";

const MoreThreeList = ({ more }) => {
  return (
    <div className="project-list section">
        <MoreThreeSummary more={more} />
    </div>
  );
};

export default MoreThreeList;
