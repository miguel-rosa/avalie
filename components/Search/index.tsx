import React, {FC} from "react";
import { FiSearch } from "react-icons/fi";

type SearchProps = {
  className?: string
}

const Search:FC<SearchProps> = ({className=""}) => {
  return (
    <fieldset
      className={`${className} focus-shadow flex items-center br2 pl3 b--transparent mw6 w-100 br2 ba bw2 background-light ma0 pa0`}
    >
      <FiSearch/>
      <input 
        className="br2 w-100 pv2 pr3 pl2 f6 f5-l br2 bn background-light fw5 outline-0"
        placeholder="Digite aqui sua busca"
      />
    </fieldset>
  )
}

export default Search;