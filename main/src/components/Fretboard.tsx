import { useState } from "react";
import { String } from "./String";
export const Fretboard = (): JSX.Element => {
  return (
    <div style={{ display: "flex" }}>
      <ul
        style={{
          paddingLeft: "1vw",
          width: "fit-content",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          color: "whitesmoke",
        }}
      >
        <li style={{ width: "fit-content" }}>G</li>
        <li style={{ width: "fit-content" }}>D</li>
        <li style={{ width: "fit-content" }}>A</li>
        <li style={{ width: "fit-content" }}>E</li>
      </ul>
      <div className="fretboard-container" style={{ zIndex: "10000" }}>
        <String stringLetter="G" />
        <String stringLetter="D" />
        <String stringLetter="A" />
        <String stringLetter="E" />
      </div>
    </div>
  );
};
