import React from "react"
import "./character.css"
const Character = props => {
  return (
    <div className="character-item">
      <h2>{props.data.name}</h2>
      <img src={props.data.image} alt="" />
    </div>
  )
}

export default Character
