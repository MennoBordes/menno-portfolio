import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'

// Images
import mockup_frontpage from '../../assets/images/portfolio/Artic_webshop/mockup.jpg'
import artic_home from '../../assets/images/portfolio/Artic_webshop/artic-home.png'

const Artic_webshop = props => (
  <Layout>
    <Helmet>
      <title>Artic webshop - M.Bordes</title>
      <meta name="descritpion" content="Artic webshop" />
    </Helmet>

    {/* Main */}
    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          {/* Header */}
          <header className="major">
            <h1>Artic webshop</h1>
            <p>22 mei 2019</p>
          </header>

          {/* Content */}
          <div className="grid-wrapper">
            <div className="col-12">
              <p>
                In het tweede jaar van mijn Informatica opleiding werd onze klas
                in groepen opgedeeld, waarna elke groep de opdracht kreeg om een
                webshop te creëren. Na overleg hebben wij ervoor gekozen om een
                webshop te maken waarop kunst wordt aangeboden. Alle kunstwerken
                die onze webshop zou gaan aanbieden, zijn afkomstig van het
                Rijksmuseum.
              </p>
            </div>
            <div className="col-6">
              <p>
                Alvorens te beginnen met het maken van de website, hebben we
                eerst een mockup gemaakt. Deze mockup dient om de Product Owner
                (PO) een indruk te geven over wat wij als groep in gedachten
                hebben om te maken.
                <br /> Na goedkeuring van de PO zijn we begonnen met het creëren
                van de webshop.
              </p>
            </div>
            <div className="col-6 image fit">
              <img src={mockup_frontpage} alt="webshop mockup" />
              <sup>De home-pagina volgens de mockup.</sup>
            </div>
            <div className="col-6">
              <p>
                Tijdens het maken van de mockup hebben we al veel details
                toegepast. hierdoor was er een duidelijk voorbeeld en doel voor
                de webshop. Er zijn enkele verschillen tussen de mockup en de
                webshop, dit komt voornamelijk doordat het implementeren
                lastiger bleek dan we hadden verwacht.
              </p>
            </div>
            <div className="col-6 image fit">
              <img src={artic_home} alt="webshop mockup" />
              <sup>De home-pagina op de website.</sup>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default Artic_webshop
