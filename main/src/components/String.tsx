interface StringI {
  stringLetter: string;
}

export const String: React.FC<StringI> = ({ stringLetter }): JSX.Element => {
  const numFrets = 16;
  const handleNoteClick = (e: React.MouseEvent) => {
    console.log(stringLetter, " - ", e.currentTarget.id);
    // TODO
    // Save User input for notes in database?
  };
  const populateStringFrets = (numFrets: number) => {
    const holdNotes = [];
    for (let index = 0; index <= numFrets; index++) {
      holdNotes.push(
        <span
          className="note-container"
          key={`${stringLetter}-${index}-container`}
        >
          <hr />

          <div
            className="note"
            key={`${stringLetter}-${index}`}
            onClick={(e) => handleNoteClick(e)}
            id={`${index + 1}`}
          >
            <div className="circle">{index}</div>
          </div>
        </span>
      );
    }
    return holdNotes;
  };
  return stringLetter === "G" ? (
    <span
      className="string-note-container"
      style={{
        borderTop: "solid black 0.5vh",
        borderBottom: "solid black 0.5vh",
      }}
    >
      {populateStringFrets(numFrets)}
    </span>
  ) : (
    <span
      className="string-note-container"
      style={{
        borderBottom: "solid black 0.5vh",
      }}
    >
      {populateStringFrets(numFrets)}
    </span>
  );
};
