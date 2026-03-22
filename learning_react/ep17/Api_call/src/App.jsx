import React from 'react'
import axios from '/axios'
import { useEffect } from 'react';

const App = () => {
// async function apiCall() {
//   const response = await fetch("https://randomuser.me/api/");
//   console.log(response);  // neega use panra actual format not give
  
//   const data = await response.json();
//   console.log(data);  
// }            // it is a JS method


async function apiCall(){
  const response = await axios.get("/api/");           // epalam axios lam use panromo apa la data nu console la kattum mattadhu la kattadhu
console.log(response); 
}

//or 
useEffect(()=>{
apiCall();
},[])     // page vandha odane console display aagum




  return (
    <div>
      <h1>API</h1>
      <button onClick={apiCall}>Api Call</button>
    </div>
  )
}

export default App
