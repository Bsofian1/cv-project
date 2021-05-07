import "./App.css";
import Practical from "./components/Practical";
import PersonalInfo from "./components/PersonalInfo";
import EducationalXp from "./components/EducationalXp";

function App() {
  return (
    <div className="App">
      <h1 className="App-text">Welcome to my React resume</h1>
      <PersonalInfo />
      <EducationalXp />
      <Practical />
    </div>
  );
}

export default App;
