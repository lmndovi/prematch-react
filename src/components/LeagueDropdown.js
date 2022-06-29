import React, { useState } from "react";
import "./LeagueDropDown.css";

const LeagueDropdown = () => {
  const [selectedLeague, setSelectedLeague] = useState(null);

  const leagues = [
    { name: "Peru Liga 1", code: "PER" },
    { name: "La Liga", code: "ESP" },
    { name: "Premier League", code: "GBR" },
    { name: "Bundesliga", code: "GER" },
    { name: "Ligue Un", code: "FRA" },
  ];

  const onLeagueChange = (e) => {
    setSelectedLeague(e.value);
  };

  return (
    <div className="dropdown-demo">
      <div className="LeagueDropdown-card">
        <h5>Select a league:</h5>
        <select
          className="LeagueDropdown-dropdown"
          value={selectedLeague}
          options={leagues}
          onChange={onLeagueChange}
          optionLabel="name"
          placeholder="Select a League"
        >
          {leagues.map((league) => (
            <option value={league.value} className="LeagueDropdown-options">
              {league.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LeagueDropdown;
