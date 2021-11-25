import React, {FC} from "react";
import styles from "./Companies.module.css";

type Company = {
  id: number;
  logoUrl: string;
  name: string;
  segment: string;
  stars: number;
}

type CompaniesProps = {
  companies: Company[];
}

const Companies:FC<CompaniesProps> = ({companies}) => {
  return (
    <section className={`${styles.companies} mv3`}>
      {
        companies.map(({id, logoUrl, name, segment}) => (
          <article key={id} className="flex bg-white pa3 br2 ba b--light-gray">
            <img
              alt={`${name} logo`}
              src={logoUrl}
              className="w3 h3 br3"
            />
            <div className="ml2">
              <h3 className="mb1 f5">
                {name}
              </h3>
              <p className="f6">
                {segment}
              </p>
            </div>
          </article>
        ))
      }
    </section>
  )
}

export default Companies