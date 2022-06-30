import React, { useState } from "react";
import "./TeamDropdown.css";

const TeamDropdown = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const localTeams = [
    { name: "Universitario de Deportes", code: "UDD" },
    { name: "Melgar", code: "MEL" },
    { name: "Sport Huancayo", code: "SPH" },
    { name: "Sporting Cristal", code: "SPC" },
    { name: "Allianza Lima", code: "ALL" },
    { name: "Cienciano", code: "CIE" },
  ];

  const visitorTeams = [
    { name: "Allianza Lima", code: "ALL" },
    { name: "Universitario de Deportes", code: "UDD" },
    { name: "Melgar", code: "MEL" },
    { name: "Sport Huancayo", code: "SPH" },
    { name: "Sporting Cristal", code: "SPC" },
    { name: "Cienciano", code: "CIE" },
  ];

  const onTeamChange = (e) => {
    setSelectedTeam(e.value);
  };

  return (
    <div className="dropdown-demo">
      <div className="TeamDropdown-card">
        <div className="TeamDropdown-card-local">
          <h5>Local:</h5>
          <select
            className="TeamDropdown-local"
            value={selectedTeam}
            options={localTeams}
            onChange={onTeamChange}
            optionLabel="name"
            placeholder="Select a Team"
          >
            {localTeams.map((localTeam) => (
              <option value={localTeam.value} className="TeamDropdown-options">
                {localTeam.name}
              </option>
            ))}
          </select>
        </div>
        <h6 className="TeamDropdown-versus">vs</h6>
        <div className="TeamDropdown-visitor-card">
          <h5>Visitor:</h5>
          <select
            className="TeamDropdown-visitor"
            value={selectedTeam}
            options={visitorTeams}
            onChange={onTeamChange}
            optionLabel="name"
            placeholder="Select a Team"
          >
            {visitorTeams.map((visitorTeam) => (
              <option
                value={visitorTeam.value}
                className="TeamDropdown-options"
              >
                {visitorTeam.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default TeamDropdown;
