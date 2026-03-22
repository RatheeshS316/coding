import React ,{useState} from 'react'

const App = () => {

  const [x,setX] = useState(0);

  const handleAdd = () =>{
    setX((currentValue) =>{
      return currentValue + 1;
    })
  }


  return (
    <div>
      <h1>HelloWorld</h1>
      <h1>{x}</h1>
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default App
