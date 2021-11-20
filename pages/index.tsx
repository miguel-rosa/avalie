import type { NextPage } from 'next'
import Form from '../components/Form'
import Logo from '../components/Logo'

import React from 'react';

const Home: NextPage = () => {
  return (
    <main
      className="flex flex-column items-center justify-center cover min-vh-100"
      style={{
        background: "linear-gradient(90deg, rgba(0,0,0,.7) , rgba(0,0,0,0.5) ), url('https://images.unsplash.com/photo-1562564055-71e051d33c19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80')",
        backgroundPosition: "90% 20%"
      }}
    > 
    <header className="absolute top-0 w-100 flex justify-center items-center pa3">
    <Logo/>
  </header>
      <div className="mt5 mb6 flex flex-row-l flex-column justify-between mw8 pa3 pa0-l">
        <div className="flex flex-column justify-center mw6 pr4-l pr0 tc tl-l center mb4 mb0-l">
          <h1 className="white f1-l f3 f2-ns w-100">
            Chega de não receber feedbacks!
          </h1>
          <p className="white f4 w-100">
            Preencha o formulário, avaliando processos seletivos que participou, e ajude as  empresas a melhorarem!
          </p>
        </div>
        <div className="center" style={{  maxWidth: "450px"}}>
        <Form
          title="Avalie o último processo seletivo que participou"
          button="Enviar avaliação"
          fields={
            [
              {placeholder: "João da Silva", label:"Nome Completo", id:"name", type:"input", required: true},
              {placeholder: "Desenvolvedor front-end", label:"Cargo", id:"role", type:"input", required: true},
              {placeholder: "joao.silva@gmail.com", label:"E-mail", id:"email", type:"input", required: true},
              {placeholder: "Advanced Company", label:"Empresa", id:"company", type:"input", required: true},
              {placeholder: "Processo seletivo ok, mas não deram feedback final :(", label:"Como foi o processo seletivo?", id:"feedback", type: "textarea", required: true}
            ]}
        /> 
      </div>
      </div>
    </main>
  )
}

export default Home
