import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Fretboard } from "./components/Fretboard";
import { Header } from "./components/Header";
import { Tab } from "./components/Tab";

function App() {

  return (
    <div className="main-container">
      <Header />
      <Fretboard />
      <Tab />
      {/* <header className="App-header">
        <div className="fretboard-container">
          {populateNotes()}

        </div>
      </header> */}
    </div>
  );
}

export default App;
