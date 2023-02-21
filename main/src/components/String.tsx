interface StringI {
  stringLetter: string;
}

export const String: React.FC<StringI> = ({ stringLetter }): JSX.Element => {
  const numFrets = 16;
  const handleNoteClick = (e: React.MouseEvent) => {
    console.log(stringLetter, " - ", e.currentTarget.innerHTML);
  };
  const populateStringFrets = (numFrets: number) => {
    const holdNotes = [];
    for (let index = 0; index < numFrets; index++) {
      holdNotes.push(
        <span
          className="note-container"
          key={`${stringLetter}-${index + 1}-container`}
        >
          <hr />
          <div
            className="note"
            key={`${stringLetter}-${index + 1}`}
            onClick={(e) => handleNoteClick(e)}
          >
            {index + 1}
          </div>
        </span>
      );
    }
    return holdNotes;
  };

  return (
    <span className="string-note-container">
      {populateStringFrets(numFrets)}
    </span>
  );
};
