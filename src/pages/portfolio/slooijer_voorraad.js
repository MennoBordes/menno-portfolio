import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'

// Images
import ImgSlooijerVoorraad from '../../assets/images/portfolio/Slooijer_voorraad/Voorraad.jpg'

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
            <h1>Slooijer voorraadbeheer</h1>
            <p>23 mei 2019</p>
          </header>

          {/* Content */}
          <div className="grid-wrapper">
            <div className="col-12">
              <p>
                Mijn vader is timmerman en werkt in de werkplaats van het
                bouwbedrijf Slooijer. Van hem kreeg ik aan het begin van mijn
                2de studiejaar als Informaticus te horen dat er binnen Slooijer
                geen systeem werd gebruikt om de voorraad van materialen en
                artikelen mee bij te houden.
                <br /> Het leek mij een interessante uitdaging om een applicatie
                te maken welke:
                {/* Lijst */}
                <ul>
                  <li>de voorraad van artikelen bijhoudt;</li>
                  <li>nieuwe artikelen kan toevoegen aan het systeem;</li>
                  <li>artikelen kan afschrijven op lopende projecten;</li>
                  <li>artikelen kan afschrijven op naam van medewerkers;</li>
                  <li>
                    automatisch een bestelformulier genereert wanneer de
                    voorraad lager wordt dan minimaal is ingesteld.
                  </li>
                </ul>
              </p>
            </div>
            <div className="col-6">
              <p>
                Op het moment dat ik begon met het maken van de applicatie had
                ik de meeste ervaring met C# als taal, met Windows Forms voor de
                gebruikers interface en met MS SQL voor de database. Om te
                beginnen heb ik een interface gemaakt waarop de gebruiker kan
                filteren op alfabetische volgorde, evenals een zoekfunctie
                waarmee (delen van) woorden kunnen worden opgezocht.
              </p>
            </div>
            <div className="col-6 image fit">
              <img src={ImgSlooijerVoorraad} alt="Voorraad scherm" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default slooijer_voorraad
