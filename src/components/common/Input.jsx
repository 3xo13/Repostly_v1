import React from 'react'
import "./styles/Input-style.css"
const Input = ({name , icon , type , Placeholder}) => {
  return (
    <div className='cutome-input'>
      
    <span>{icon}</span>
      <input type={type} name ={name} placeholder={Placeholder} />
    </div>
  )
}

export default Input
