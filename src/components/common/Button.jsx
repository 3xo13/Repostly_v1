import React from 'react'
import "./styles/button-style.css"
const Button = ({type  , title}) => {
  return (
   <button className='button-style' type= {type}>{title}</button>
  )
}

export default Button
