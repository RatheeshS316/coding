import React from 'react'
import User from './User.jsx'

function App() {

 const details={
  name:"ratheesh",
  dept:"Cse",
  idno:323
 }

 return <div>
  <User 
    // Name={details.name}
    // Dept={details.dept}
    // Rollno ={details.idno}

   {...details}
  />
 </div>
}
// <user randomname={objectname.declarename}>

export default App;




/*

  OBJECT DESTRUCTURING

  const arr={
  name : "ratheesh",
  std:"2nd year"
  rollno:122
  }
  const {name , std , rollno}=arr;
  console.log(name);            // ratheesh
  console.log(std);             // 2nd year
  console.log(rollno);          // 122




*/