import React from 'react'
// import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'

const Artic_webshop = props => (
  <Layout>
    <Helmet>
      <title>Artic webshop - M.Bordes</title>
      <meta name="descritpion" content="Artic webshop" />
    </Helmet>
    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Artic webshop</h1>
          </header>
          <p>
            In het tweede jaar van mijn Informatica opleiding werd onze klas in
            groepen opgedeeld, waarna elke groep de opdracht kreeg om een
            webshop te creëren. Na overleg hebben wij ervoor gekozen om een
            webshop te maken waarop kunst wordt aangeboden. Alle kunstwerken die
            onze webshop zou gaan aanbieden, zijn afkomstig van het Rijksmuseum.
          </p>
          <p>
            Alvorens te beginnen met het maken van de website, hebben we eerst
            een mockup gemaakt. Deze mockup dient om de Product Owner (PO) een
            indruk te geven over wat wij als groep in gedachten hebben om te
            maken.
          </p>
          <p>
            Na goedkeuring van de PO zijn we begonnen met het creëren van de
            webshop.
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Artic_webshop
