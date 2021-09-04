import React from "react";
import InfoThreeSummary from "./InfoThreeSummary";

const InfoThreeList = ({ infothree }) => {
  return (
    <div className="project-list section">
      <InfoThreeSummary info={infothree} />
    </div>
  );
};

export default InfoThreeList;
