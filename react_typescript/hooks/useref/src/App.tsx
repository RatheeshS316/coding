import React, { useRef, useState } from "react";

const App: React.FC = () => {
  const [input, setInput] = useState<string>("");

  // tell TypeScript this ref will point to an <input> element
  const inputRef = useRef<HTMLInputElement | null>(null);

  const display = (): void => {
    if (inputRef.current) {
      console.log(inputRef.current.value);
    }
  };

  const line = (): void => {
    const ptag = document.querySelector("p");
    if (ptag) {
      console.log(ptag.textContent);
    }
  };

  return (
    <div>
      <h1>Input</h1>
      <input
        type="text"
        ref={inputRef}
        value={input}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setInput(event.target.value)
        }
      />
      <button onClick={display}>Show Input</button>
      <button onClick={line}>Show line</button>
      <p>my name is {input}</p>
      <p>my Name is {input}</p>
    </div>
  );
};

export default App;
