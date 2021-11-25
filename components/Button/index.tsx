import React, { FC } from "react";

type ButtonProps = {
  variation?: "primary" | "secondary";
  type?: "submit" | "button" | "reset" | undefined;
  size?: "small" | "medium" | "big" | undefined;
  className?: string;
  rounded?: boolean;
  onClick?(p:any): void;
}

const Button:FC<ButtonProps> = ({
  children,
  variation="primary",
  type="button",
  size="medium",
  rounded=false,
  onClick,
  className,
}) => {
  
  const backgroundColors = {
    "primary": "background-primary white",
    "secondary" : "background-secondary color-primary"
  }

  const buttonSize = {
    "small": " pv2-l ph3-l pv1 ph2",
    "medium": "pv3-l ph4-l pt2 ph3",
    "big": " pt4 pb4 pl5 pr5"
  }

  return (
    <button 
      className={`
        ${backgroundColors[variation]} 
        ${buttonSize[size]} 
        ${rounded ? "br-round" : "br2"}
        ${className}
        ba bw1 b--transparent br2 f5 flex items-center justify-between pointer fw5
      `}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;