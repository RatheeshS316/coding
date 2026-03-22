import React, { useEffect , useState} from 'react'

const App = () => {

  const [num1 , setNum1] = useState(50);
  const [num2 , setNum2] = useState(100);
  const [num3 , setNum3] = useState(150);


  useEffect(()=>{
    setNum1(200);
    console.log("setNum1");
    setNum2(400);
    console.log("setNum2");
    setNum3(600);
    console.log("setNum3");
    

    return ()=>{
      console.log("setNum 1 2 3");
      
      setNum1(50);
      setNum2(100);
      setNum3(150);
    }
  }, [num1,num2,num3]);

  
  return (
    <div>
      <h1>{num1}</h1>
      <button onClick={()=>setNum1((curr)=>curr + 1)}>Add</button>
      <h1>{num2}</h1>
      <button onClick={()=>setNum2((curr)=>curr + 1)}>Add</button>
      <h1>{num3}</h1>
      <button onClick={()=>setNum3((curr)=>curr + 1)}>Add</button>
    </div>
  )
}

export default App;

