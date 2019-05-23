import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'

// Images
import ImgSlooijerVoorraad from '../../assets/images/portfolio/Slooijer_voorraad/Voorraad.jpg'
import ImgSlooijerVoorraadDB from '../../assets/images/portfolio/Slooijer_voorraad/Voorraad_Database.jpg'
import ImgSlooijerArtikelToevoegen from '../../assets/images/portfolio/Slooijer_voorraad/Artikel_Toevoegen.jpg'
import ImgSlooijerArtikelAanpassen from '../../assets/images/portfolio/Slooijer_voorraad/Artikel_Aanpassen.jpg'

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
            <div className="col-5">
              <p>
                Op het moment dat ik begon met het maken van de applicatie had
                ik de meeste ervaring met C# als taal, met Windows Forms voor de
                gebruikers interface en met MS SQL voor de database. Om te
                beginnen heb ik een interface gemaakt waarop de gebruiker kan
                filteren op alfabetische volgorde, evenals een zoekfunctie
                waarmee (delen van) woorden kunnen worden opgezocht. Deze
                gegevens worden opgehaald uit een MS SQL database, waarna ze
                worden weergegeven in de applicatie.
              </p>
            </div>
            <div className="col-7">
              <div className="grid-wrapper">
                <div className="col-7 image fit">
                  <img src={ImgSlooijerVoorraad} alt="Voorraad scherm" />
                  <sup>Het voorraad scherm.</sup>
                </div>
                <div className="col-5 image fit">
                  <img src={ImgSlooijerVoorraadDB} alt="Database" />
                  <sup>De database.</sup>
                </div>
              </div>
            </div>
            <div className="col-12">
              Na het maken van het voorraad scherm ben ik begonnen om interfaces
              te maken waarmee een nieuw artikel kan worden toegoegd aan de
              database en een artikel kan worden aagepast.
            </div>
            <div className="col-5 image fit">
              <img src={ImgSlooijerArtikelToevoegen} alt="Artikel toevoegen" />
              <sup>Het scherm om artikelen toe te voegen.</sup>
            </div>
            <div className="col-7 image fit">
              <img src={ImgSlooijerArtikelAanpassen} alt="Artikel aanpassen" />
              <sup>Het scherm om artikelen aan te passen.</sup>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default slooijer_voorraad
