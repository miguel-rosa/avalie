import React, { FC } from "react";

type ButtonProps = {
  variation?: "primary"
  type?: "submit" | "button" | "reset" | undefined 
}

const Button:FC<ButtonProps> = ({children, variation, type="button"}) => {
  
  const backgroundColors = {
    "primary": "background-main white"
  }

  return (
    <button 
      className={`${backgroundColors[variation || "primary"]} 
        pt3 pb3 pl4 pr4 bn br-round f5 flex items-center justify-between pointer
      `}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button;