import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    // let name = "Rimzim"
    const {name} = useParams()
  return (
    <div>User : {name}</div>
  )
}

export default User