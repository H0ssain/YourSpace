import React from "react";
import moment from "moment";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import "../Css/Summary.css";

const ProjectttSummary = ({ projecttt }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3 writings">
        <div>
          <img className="SummaryImage" src={projecttt.image} height="200" width="150" alt=" " />
        </div>
        <span className="card-title ">
          <span style={{color:'#48C9B0', fontWeight:'bold' }}>{projecttt.subs} </span>
        </span> 
        <p>At {projecttt.location}</p>
        <p className="green-text">From BDT{projecttt.salary}</p>
      </div>
    </div>
  );
};

export default ProjectttSummary;
