import React from 'react'
import './Button.css'

const Button = ({ name, type, width, height, onButtonClick }) => {
  return (
    <button
      className={`custom-button-${type}`}
      style={{ width: `${width}`, height: `${height}` }}
      onClick={onButtonClick}
    >
      {name}
    </button>
  )
}

export default Button
