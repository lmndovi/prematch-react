import "./App.css";
import LeagueDropdown from "./components/LeagueDropdown";
import Nav from "./components/Nav";
import SecondaryNav from "./components/SecondaryNav";
import Percentages from "./components/Percentages";
import TeamDropdown from "./components/TeamDropdown";
import Goles from "./components/Goles";
import Info from "./components/Info";
import RightColumn from "./components/RightColumn";
import LeftColumn from "./components/LeftColumn";

function App() {
  return (
    <div className="App">
      <Nav />
      <SecondaryNav />
      <div className="App-Columns">
        <div className="App-LeftColumn">
          <LeftColumn />
        </div>
        <div className="App-CentreColumn">
          <h1>Selección de equipos</h1>
          <LeagueDropdown />
          <TeamDropdown />
          <h1>Win rate</h1>
          <Percentages />
          <Goles />
          <Info />
        </div>
        <div className="App-RightColumn">
          <RightColumn />
        </div>
      </div>
    </div>
  );
}

export default App;
