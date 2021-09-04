import React from "react";
import InfoTwoSummary from "./InfoTwoSummary";

const InfoTwoList = ({ infotwo }) => {
  return (
    <div className="project-list section">
      <InfoTwoSummary info={infotwo} />
    </div>
  );
};

export default InfoTwoList;
