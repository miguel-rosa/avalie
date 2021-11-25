import type { NextPage } from 'next'
import Header from "../components/Header";

import React from 'react';
import Banner from '../components/Banner';
import Companies from '../components/Companies';

const companies = [
  {
    id: 1,
    logoUrl: "https://media-exp1.licdn.com/dms/image/C4D0BAQGjwPKNaVZ7jQ/company-logo_100_100/0/1625578658814?e=1645660800&v=beta&t=utgU3Wp48IE7vm-7Y3-vaUh_5DuPGg3uRlbBAxfhhRs",
    name: "IBM",
    segment: "Desenvolvimento de software",
    stars:3
  },
  {
    id: 1,
    logoUrl: "https://media-exp1.licdn.com/dms/image/C510BAQGpRhkpxp5A9A/company-logo_100_100/0/1561962168715?e=1645660800&v=beta&t=nDVOKuRTjvTlOo00y9k7yBW40j4JQBhZSQHfLL3Onsw",
    name: "EW Software",
    segment: "Desenvolvimento de software",
    stars:3
  },
  {
    id: 1,
    logoUrl: "https://media-exp1.licdn.com/dms/image/C4E0BAQGd23iENnlnNw/company-logo_100_100/0/1561728203769?e=1645660800&v=beta&t=5S3fHeg8I3veCjPNpl9R-bfALAlqAZ2z0NS9ctcN6LI",
    name: "Paraná banco",
    segment: "Desenvolvimento de software",
    stars:3
  },
  {
    id: 1,
    logoUrl: "https://media-exp1.licdn.com/dms/image/C560BAQHTvZwCx4p2Qg/company-logo_100_100/0/1612205615891?e=1645660800&v=beta&t=LpJ7FBkLUaSt1l0FAvyDXmTW6EQPIAYqkiXqWBL96Tw",
    name: "Amazon",
    segment: "Desenvolvimento de software",
    stars:3
  },
]

const Home: NextPage = () => {
  return (
    <>
    <Header/>
    <main className="center mw8 w-100 pv5 ph2 ph0-l">
      <Banner
        title="Chega de não receber feedbacks!"
        description="Preencha o formulário, avaliando processos seletivos que participou, e ajude as empresas a melhorarem!"
      />
      <h2 className="mt5">As empresas mais bem avaliadas</h2>
      <Companies companies={companies}/>
      <h2 className="mt5">Empresas com as menores notas</h2>
      <Companies companies={companies}/>
      <h2 className="mt5">Empresas com as menores notas</h2>
      <Companies companies={companies}/>
    </main>
    </>
  )
}

export default Home
