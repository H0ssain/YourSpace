import React from "react";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import "../Css/Summary.css";

const MoreThreeSummary = ({ more }) => {
  return (
    <div className="card">
      <div className="center">
        <span className="card-title ">
          <p style={{ fontSize:'25px', paddingTop:'10px' }} className="center">
            <AttachMoneyIcon />
          </p>
          <span style={{fontWeight: "bold" }}>Income Source</span>
        </span>
        <p>Spacers can earn around ৳9700 per booking</p>
      </div>
    </div>
  );
};

export default MoreThreeSummary;
