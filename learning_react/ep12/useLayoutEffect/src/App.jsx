import React ,{useLayoutEffect, useState} from 'react'

const App = () => {

  const [add , setAdd]  = useState(0);

useLayoutEffect(()=>{
  console.log("useLayoutEffect called" , add);
},[add]);


  return (
    <div>
      <h1>{add}</h1>
      <button  
        onClick={()=>{
          setAdd((curr) => curr + 1)
        }}
      >Add</button>
    </div>
  )
}

export default App
