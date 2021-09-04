import React from "react";
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import "../Css/Summary.css";

const MoreTwoSummary = ({ more }) => {
  return (
    <div className="card">
      <div className="center">
        <span className="card-title ">
          <p style={{ fontSize:'25px', paddingTop:'10px' }} className="center">
            <EmojiEmotionsIcon />
          </p>
          <span style={{fontWeight: "bold" }}>Good Service</span>
        </span>
        <p>Enjoy the service from the team</p>
      </div>
    </div>
  );
};

export default MoreTwoSummary;
