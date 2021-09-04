import React from "react";
import MoreSummary from "./MoreSummary";

const MoreList = ({ more }) => {
  return (
    <div className="project-list section">
        <MoreSummary more={more} />
    </div>
  );
};

export default MoreList;
