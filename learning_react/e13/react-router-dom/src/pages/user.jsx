import { useParams } from "react-router-dom"
import React from 'react'

const Userrrr = () => {
  const {  username } = useParams();
  return (
    <div>
      <h1>User :{username}</h1>
    </div>
  )
}

export default Userrrr
