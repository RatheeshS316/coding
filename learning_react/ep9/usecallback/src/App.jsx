import {useCallback, useState} from 'react'
import List from './List'

const App = () => {

  const [number , setNumber] = useState(0);
  const [dark , setDark] = useState(false);

  const getItems = useCallback( 
    (valueno) =>{
    return [
      number + valueno + 1, 
      number+ valueno + 2 ,
      number + valueno+ 3];
  }, [number]);

  const themeStyle = {
    backgroundColor:dark?'black':'white',
    color: dark ? 'white' : 'black',
  };

  return (
    <div style={themeStyle}>
      <input
      type="number" 
      value={number}
      onChange={(e) => {
      const value = parseInt(e.target.value, 10);
          setNumber(isNaN(value) ? 0 : value);
        }}

      />
      <button onClick={()=> setDark((curr)=>!curr)}>Toggle theme</button>
      <List getItems={getItems} />
    </div>
  );
};

export default App;











/*
import {useState} from 'react'
import List from './List'

const App = () => {

  const [number , setNumber] = useState(0);
  const [dark , setDark] = useState(false);

  const getItems = () =>{
    return [number +1 , number+2 ,number +3];
  };

  const themeStyle = {
    backgroundColor:dark?'black':'white',
    color: dark ? 'white' : 'black',
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
      <button onClick={()=> setDark((curr)=>!curr)}>Toggle theme</button>
      <List getItems={getItems} />
    </div>
  );
};

export default App;
*/





/*
import {useState} from 'react'
import List from './list'

const App = () => {

  const [number , setNumber] = useState(0);
  const [dark , setDark] = useState(false);

  const getItems = () =>{
    return [number +1 , number+2 ,number +3];
  };

  const themeStyle = {
    backgroundcolor:dark?'black':'white',
    color: dark ? 'white' : 'black',
  };

  return (
    <div style={themeStyle}>
      <input
      type="text" 
      value={number}
      onChange={(e)=>setNumber(parseInt(e.target.value))}
      />
      <button onClick={()=> setDark((curr)=>!curr)}>Toggle theme</button>
      <List getItems={getItems} />
    </div>
  );
};

export default App;

*/