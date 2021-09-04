import React from "react";
import "../Css/Summary.css";
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';

const InfoSummary = ({ info }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3 writings">
        <p className="center">
        <EmojiFlagsIcon />
        </p>
        <div className="card-title ">
          <p style={{color:'#48C9B0', fontWeight:'bold', textAlign:'center', width:'100%' }}>LIST</p>
        </div> 
        <p>Start earning by sharing your space. Utilize off-peak hours and unused spaces!</p>
      </div>
    </div>
  );
};

export default InfoSummary;
