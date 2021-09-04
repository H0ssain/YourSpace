import React from "react";
import "../Css/Summary.css";
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

const InfoThreeSummary = ({ info }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3 writings">
        <p className="center">
        <EmojiObjectsIcon />
        </p>
        <div className="card-title ">
          <p style={{color:'#48C9B0', fontWeight:'bold', textAlign:'center', width:'100%' }}>PLAN</p>
        </div> 
        <p>Enrich your booking with add-on services and create the perfect event for you!</p>
      </div>
    </div>
  );
};

export default InfoThreeSummary;
