import React, { useState } from "react";

const App: React.FC = () => {
  const [x, setX] = useState<number>(0);

  const handleAdd = (): void => {
    setX((currentValue) => currentValue + 1);
  };

  return (
    <div>
      <h1>HelloWorld</h1>
      <h1>{x}</h1>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default App;