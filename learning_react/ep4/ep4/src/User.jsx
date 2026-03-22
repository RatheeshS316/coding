//    1st method 


//import React from 'react'

// function User(props) {
//   return (
//     <div>
//       <h1>{props.Name}</h1>
//       <h1>{props.Dept}</h1>
//       <h1>{props.Rollno}</h1>
//     </div>
//   )
// }

// export default User



//   2nd method and easy method
import React from 'react'


// function User({Name,Dept,Rollno})
function User({name,dept,idno}) {
  return (
    <div>
{/* 
      <h1>Name</h1>
      <h1>Dept</h1>
      <h1>Rollno</h1> */}

      <h1>{name}</h1>
      <h1>{dept}</h1>
      <h1>{idno}</h1>
    </div>
  )
}

export default User;




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