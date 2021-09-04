import React from "react";
import MoreTwoSummary from "./MoreTwoSummary";

const MoreTwoList = ({ more }) => {
  return (
    <div className="project-list section">
        <MoreTwoSummary more={more} />
    </div>
  );
};

export default MoreTwoList;
