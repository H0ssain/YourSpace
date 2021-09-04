import React from "react";
import InfoSummary from "./InfoSummary";

const InfoList = ({ info }) => {
  return (
    <div className="project-list section">
      <InfoSummary info={info} />
    </div>
  );
};

export default InfoList;
