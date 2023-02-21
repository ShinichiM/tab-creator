import { useState } from "react";
import { String } from "./String";
export const Fretboard = (): JSX.Element => {
  const [note, setNote] = useState<boolean>(false);
  return (
    <div className="fretboard-container">
      <String stringLetter="G" />
      <String stringLetter="D" />
      <String stringLetter="A" />
      <String stringLetter="E" />
    </div>
  );
};
