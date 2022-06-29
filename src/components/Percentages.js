import "./Percentages.css";
import React from "react";

const Percentages = () => {
  return (
    <div className="Percentages">
      <div className="Percentages-winLocal">
        <h7>45%</h7>
        <p className="Percentages-winLocal-p">Win (Local)</p>
      </div>
      <div className="Percentages-Draw">
        <h7>25%</h7>
        <p className="Percentages-Draw-p">Win (Local)</p>
      </div>
      <div className="Percentages-winVisitor">
        <h7>35%</h7>
        <p className="Percentages-winVisitor-p">Win (Local)</p>
      </div>
    </div>
  );
};

export default Percentages;
