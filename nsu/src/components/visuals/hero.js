import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "250px",
  color: "#fff",
  lineHeight: "180px",
  textAlign: "center",
  background: "#364d79",
  fontSize: "42px",
};

function Apphero() {
  return (
    <div className="advances">
      <div className="HeroBlock">
        <Carousel effect="fade">
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
        ,
      </div>
    </div>
  );
}
export default Apphero;
