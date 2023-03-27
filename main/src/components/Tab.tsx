export const Tab = (): JSX.Element => {
  // TODO
  // Change type of tabSections when we figure out what kind of data we want to store
  const createMeasure= () => {
    const tabSections: any = [];
    for (let i = 0; i < 16; i++) {
      if (i % 4 === 0 && i !== 0) {
        tabSections.push(
          <div
            style={{
              height: "15vh",
              border: "1px solid white",
              marginLeft: "1vw",
            }}
          ></div>
        );
      }
      tabSections.push(
        <ul style={{ height: "15vh", paddingLeft: "1vw" }}>
          <li>-</li>
          <li>-</li>
          <li>-</li>
          <li>-</li>
        </ul>
      );
    }
    return tabSections;
  };
  return (
    <div
      style={{
        display: "flex",
        marginTop: "5vh"
      }}
    >
      <ul
        style={{
          paddingLeft: "1vw",
          width: "fit-content",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          color: "whitesmoke",
          height: "15vh",
        }}
      >
        <li>G</li>
        <li>D</li>
        <li>A</li>
        <li>E</li>
      </ul>

      <div style={{ height: "15vh", border: "1px solid white" }}></div>
      <div style={{ width: "100vw", display: "flex" }}>
        {createMeasure()}
      </div>
    </div>
  );
};
