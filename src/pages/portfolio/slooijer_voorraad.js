import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'

// Images

const slooijer_voorraad = props => (
  <Layout>
    <Helmet>
      <title>Slooijer voorraad - M.Bordes</title>
      <meta name="description" content="Slooijer voorraad systeem" />
    </Helmet>

    {/* Main */}
    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          {/* Header */}
          <header className="major">
            <h1>Slooijer voorraadbeheer systeem</h1>
          </header>

          {/* Content */}
          <div className="grid-wrapper">
            <div className="col-12">
              <p>
                Mijn vader is timmerman en werkt in de werkplaats van het
                bouwbedrijf Slooijer. Van hem kreeg ik aan het begin van mijn
                2de studiejaar als Informaticus te horen dat er binnen Slooijer
                geen systeem werd gebruikt om de voorraad van materialen en
                artikelen mee bij te houden. Het leek mij een interessante
                uitdaging om een applicatie te maken welke:
                <ul>
                  <li>De voorrad van artikelen bijhoudt.</li>
                  <li>Nieuwe artikelen kan toevoegen aan het systeem.</li>
                  <li>Artikelen kan afschrijven op lopende projecten.</li>
                  <li>Artikelen kan afschrijven op naam van medewerkers.</li>
                  <li>
                    Automatisch een bestelformulier genereert wanneer de
                    voorraad lager wordt dan minimaal is ingesteld.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default slooijer_voorraad
