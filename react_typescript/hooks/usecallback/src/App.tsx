import { useCallback, useState, type CSSProperties } from "react";
import List from "./List";

const App: React.FC = () => {
  const [number, setNumber] = useState<number>(0);
  const [dark, setDark] = useState<boolean>(false);

  const getItems = useCallback(
    (valueno: number): number[] => {
      return [
        number + valueno + 1,
        number + valueno + 2,
        number + valueno + 3,
      ];
    },
    [number]
  );

  const themeStyle: CSSProperties = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div style={themeStyle}>
      <input
        type="text"
        value={number}
        onChange={(e) => {
          const value = parseInt(e.target.value, 10);
          setNumber(isNaN(value) ? 0 : value);
        }}
      />
      <button onClick={() => setDark((curr) => !curr)}>Toggle theme</button>
      <List getItems={getItems} />
    </div>
  );
};

export default App;

