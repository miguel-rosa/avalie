import React, {FC} from "react";

import { FieldProps } from "./types";

const Field:FC<FieldProps> = ({
  type,
  id,
  placeholder,
  setState,
  state,
  required,
  showError,
  setSended
}) => {
  const Type = type as keyof JSX.IntrinsicElements;

  const handleInputChange = (e: any) => {
    setSended(false)
    const {name, value} = e.currentTarget;
    setState((previousState: any ) =>  ({...previousState, [name]:value}));
  }

  return (
    <>
    <Type
      id={id}
      name={id}
      placeholder={placeholder}
      value={state[id] === undefined ? "" : state[id]}
      required={required}
      className={`${showError && state[id] === undefined ? "b--red" : "b--transparent mb3"} pa3 f6 br2 ba background-light`}
      onChange={(e) => handleInputChange(e)}
    />
    <p className="f6 red">
      {showError && state[id] === undefined && "Preencha esse campo por favor"}
    </p>
    </>
  )
}

export default Field;