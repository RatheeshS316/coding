import React, { useRef, useState } from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const inputRef = useRef();

  const display = () => {
    // inputRef.current.value is the current value of the input element
    console.log(inputRef.current.value);
    // inputRef.current is the input element itself
    // textContent is not relevant for input elements, use value instead
  };

  const line = () => {
    const ptag = document.querySelector('p');
    console.log(ptag.textContent);
  };

  return (
    <div>
      <h1>Input</h1>
      <input
        type="text"
        ref={inputRef}
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={display}>Show Input</button>
      <button onClick={line}>Show line</button>
      <p>my name is {input}</p>
      <p>my Name is {input}</p>
    </div>
  );
};

export default App;
