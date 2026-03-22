import React, { useState, useMemo } from 'react'
import { useEffect } from 'react';

const App = () => {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

 const doubleNumber = useMemo(() => slowFunction(number), [number])

 // or  const doubleNumber = useMemo(() => { return slowFunction(number)}, [number])}


//  const [doubleNumber , setDoubleNumber] = useState(0);
//  useEffect(()=>{
//   setDoubleNumber(slowFunction(number));
//  },[number]);
  const themeStyle = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(Number(e.target.value))}
      />
      <button onClick={() => setDark(curr => !curr)}>Toggle theme</button>
      <p style={themeStyle}>{doubleNumber}</p>
    </div>
  )
}

export default App;

function slowFunction(num) {
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;

  
}
