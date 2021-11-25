import React, {FC} from "react";
import styles from "./Logo.module.css";

type LogoProps = {
  size?: "small" | "medium" | "big",
  className?: "string"
}

const Logo:FC<LogoProps> = ({size="medium", className}) => {

  const logoSize = {
    "small": "f5 pv1 ph3",
    "medium": "f3 f4-l pv1 ph2 pv2-l ph3-l",
    "big": "f2 pv2 ph4"
  }

  return (
    <span className={`${styles.logo} ${className} ${logoSize[size]} flex lh-solid white background-primary cursor-default fw6 `}>
      a<span className="dn db-l">valie</span>
    </span>
  )
}

export default Logo;