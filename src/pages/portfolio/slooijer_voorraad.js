import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'

// Images
import Slooijer_Banner from '../../assets/images/portfolio/Slooijer_voorraad/Slooijer_Banner.jpg'
import Slooijer_Hoofdscherm from '../../assets/images/portfolio/Slooijer_voorraad/hoofdscherm.jpg'
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
      <section>
        {/* Content */}
        <div className="inner">
          {/* Header */}
          <header className="major">
            <h1>Slooijer voorraadbeheer</h1>
            <p>23 mei 2019</p>
          </header>

          {/* Spotlights */}
          <section className="spotlights">
            <section>
              <span className="image">
                <img src={Slooijer_Banner} alt="Slooijer fabriek" />
              </span>
              <div className="content">
                <div className="inner">
                  <p>
                    Mijn vader is timmerman en werkt in de werkplaats van het
                    bouwbedrijf Slooijer. Van hem kreeg ik aan het begin van
                    mijn 2de studiejaar tot Informaticus te horen dat er binnen
                    Slooijer geen systeem werd gebruikt om de voorraad van
                    materialen en artikelen mee bij te houden.
                  </p>
                </div>
              </div>
            </section>
            {/* End of spotlights */}
          </section>

          <div className="grid-wrapper">
            {/* Intro */}
            <section className="col-12">
              <p>
                Het leek mij een interessante uitdaging om een applicatie te
                maken welke:
                {/* List */}
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
            </section>

            {/* Tekst */}
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

            {/* Images */}
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

            {/* Progress */}
            <section className="col-12 grid-wrapper">
              {/* Tekst */}
              <div className="col-4">
                <p>
                  Na het maken van het voorraad scherm ben ik begonnen om
                  interfaces te maken waarmee een nieuw artikel kan worden
                  toegoegd aan de database en een artikel kan worden aagepast.
                </p>
              </div>

              {/* Images */}
              <div className="col-8">
                <div className="grid-wrapper">
                  <div className="col-5 image fit">
                    <img
                      src={ImgSlooijerArtikelToevoegen}
                      alt="Artikel toevoegen"
                    />
                    <sup>Het scherm om artikelen toe te voegen.</sup>
                  </div>
                  <div className="col-7 image fit">
                    <img
                      src={ImgSlooijerArtikelAanpassen}
                      alt="Artikel aanpassen"
                    />
                    <sup>Het scherm om artikelen aan te passen.</sup>
                  </div>
                </div>
              </div>
            </section>

            {/* Tekst */}
            <div className="col-6">
              <p>
                Na het maken van het voorraad scherm en de schermen om artikelen
                mee toe te voegen of aan te passen, werd het tijd om een
                hoofdscherm te maken. Dit hoofdscherm is bedoeld als beginpagina
                van de applicatie, waar alle sub-schermen in terug te vinden
                zijn.
              </p>
            </div>

            {/* Images */}
            <div className="col-6 image fit">
              <img src={Slooijer_Hoofdscherm} alt="Hoofdscherm" />
              <sup>Het hoofdscherm van de applicatie.</sup>
            </div>

            {/* Tekst */}
            <div className="col-12">
              <p>
                Nu het mogelijk is om artikelen toe te voegen, of te wijzigen,
                wil ik verder gaan met het afschrijven van artikelen op
                projecten. Hier ben ik nog mee bezig.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default slooijer_voorraad
