import React from "react";
import "./Goles.css";

const Goles = () => {
  return (
    <div className="Goles">
      <div className="Goles-text">
        <p className="Goles-bet">+0.5 goles HT</p>
        <p className="Goles-odds">70%</p>
      </div>
      <div className="Goles-text">
        <p className="Goles-bet">+1.5 goles FT</p>
        <p className="Goles-odds">80%</p>
      </div>
      <div className="Goles-text">
        <p className="Goles-bet">+2.5 goles FT</p>
        <p className="Goles-odds">65%</p>
      </div>
      <div className="Goles-BTTS">
        <p className="Goles-bet">BTTS</p>
        <p className="Goles-odds">70%</p>
      </div>
    </div>
  );
};

export default Goles;
