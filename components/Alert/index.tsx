import React, { FC } from "react";
import { FiX } from "react-icons/fi";

type AlertProps = {
  title: string;
  message: string;
  show: boolean;
  setShow(p: boolean): void;
}

const Alert:FC<AlertProps> = ({title, message, show, setShow}) => {
  return show ? (
    <div className="bg-black-60 fixed w-100 vh-100 left-0 top-0 flex items-center justify-center fadeIn">
      <div className="br4 bg-white flex items-center justify-center flex-column pa5 relative fadeInUp">
        <FiX className="absolute right-0 top-0 pointer mt4 mr4" size="32" onClick={() => setShow(false)}/>
        <div className="w-100">
          <p className="w-60 f3 fw7 tc center">{title}</p>
          <p className="f4 mt3">{message}</p>
        </div>
      </div>
    </div>
  ) : null
}

export default Alert;