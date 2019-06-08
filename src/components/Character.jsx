import React from "react"
import { Link } from "react-router-dom"
import "./character.css"
const Character = props => {
  return (
    <div className="character-item">
      <h2>{props.data.name}</h2>
      <img src={props.data.image} alt="" />

      <Link to={`/detail/${props.data.id}`} className="button is-info">
        Ver Ficha {props.data.id}
      </Link>
    </div>
  )
}

export default Character
