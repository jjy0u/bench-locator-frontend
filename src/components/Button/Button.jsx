import React from 'react'
import "./Button.scss"


const Button = (props) => {
    const {handleClick, buttonText} = props
  return (
    <div>
        <button className="button" onClick={handleClick}>{buttonText}</button>
    </div>
  )
}

export default Button