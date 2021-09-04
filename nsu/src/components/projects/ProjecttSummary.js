import React from "react";
import moment from "moment";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import "../Css/Summary.css";

const ProjecttSummary = ({ projectt }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3 writings">
        <div>
          <img className="SummaryImage" src={projectt.image} height="200" width="150" alt=" " />
        </div>
        <span className="card-title ">
          <span style={{color:'#48C9B0', fontWeight:'bold' }}>{projectt.subs}</span>
        </span>
        <p>At {projectt.location}</p>
        <p className="green-text">From BDT{projectt.salary}</p>
      </div>
    </div>
  );
};

export default ProjecttSummary;
