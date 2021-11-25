import React from "react";

import Logo from "../Logo";
import Search from "../Search";
import Button from "../Button";

type HeaderProps = {

}

const Header = ({}) => {
  return (
    <header className="flex justify-center bb b--light-gray pa0 pv3 ph3 pa3-l bg-white">
      <div className="mw8 w-100 flex items-center justify-between">
        <Logo />
        <Search className="order-3 order-2-l mh3 mh0-l"/>
        <div className="dn flex-l items-center order-2 order-3-l">
          <Button size="small" className="mr2">
            Cadastrar
          </Button>
          <Button size="small" variation="secondary">
            Fazer Login
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header;