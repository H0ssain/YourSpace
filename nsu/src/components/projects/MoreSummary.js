import React from "react";
import HttpsIcon from "@material-ui/icons/Https";
import "../Css/Summary.css";

const MoreSummary = ({ more }) => {
  return (
    <div className="card">
      <div className="center">
        <span className="card-title ">
          <p style={{ fontSize:'25px', paddingTop:'10px' }} className="center">
            <HttpsIcon />
          </p>
          <span style={{fontWeight: "bold" }}>Secure</span>
        </span>
        <p>Pay your bills with 100% security</p>
      </div>
    </div>
  );
};

export default MoreSummary;
