import React from "react";
import moment from "moment";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import "../Css/Summary.css";

const ProjecttttSummary = ({ projectttt }) => {
  return (
    <div className="card">
      <div className="card-content grey-text text-darken-3 writings">
        <div className="row row-cols-2">
          <div>
            <img
              className="ListImage"
              src={projectttt.image}
              height="200"
              width="150"
              alt=" "
            />
          </div>
          <div>
            <span className="card-title ">
              <span style={{ color: "#48C9B0", fontWeight: "bold" }}>
                {projectttt.subs}{" "}
              </span>
            </span>
            <p>At {projectttt.location}</p>
            <p className="green-text">From BDT{projectttt.salary}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjecttttSummary;
