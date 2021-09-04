import React from "react";
import "../Css/Summary.css";
import ImportContactsIcon from '@material-ui/icons/ImportContacts';

const InfoTwoSummary = ({ info }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3 writings">
        <p className="center">
        <ImportContactsIcon />
        </p>
        <div className="card-title ">
          <p style={{color:'#48C9B0', fontWeight:'bold', textAlign:'center', width:'100%' }}>BOOK</p>
        </div> 
        <p>Find and book the perfect spaces or experiences that match your requirements!</p>
      </div>
    </div>
  );
};

export default InfoTwoSummary;
