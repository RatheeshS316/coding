import React, { useState, useMemo } from "react";

const App: React.FC = () => {
  const [number, setNumber] = useState<number>(0);
  const [dark, setDark] = useState<boolean>(false);

  // useMemo with typed function
  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  const themeStyle: React.CSSProperties = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNumber(Number(e.target.value))
        }
      />
      <button onClick={() => setDark((curr) => !curr)}>Toggle theme</button>
      <p style={themeStyle}>{doubleNumber}</p>
    </div>
  );
};

export default App;

// slowFunction typing
function slowFunction(num: number): number {
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}
