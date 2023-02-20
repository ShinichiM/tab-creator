import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const populateNotes = () => {
    let hold = [];
    for (let i = 0; i < 12 * 4; i++) {
      hold.push(<span>Note{i + 1}</span>);
    }

    return <>{hold}</>;
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="fretboard-container">
          {populateNotes()}
          {/* <span className="string"></span>
          <span className="string"></span>
          <span className="string"></span>
          <span className="string"></span> */}
        </div>
      </header>
    </div>
  );
}

export default App;
