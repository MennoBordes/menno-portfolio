import React from 'react'
import Helmet from 'react-helmet'

// Components
import Layout from '../../components/layout'

// Images
import RtE_Banner from '../../assets/images/portfolio/Return_to_Eden/Game_Home.png'
import RtE_Game_Goal from '../../assets/images/portfolio/Return_to_Eden/Game_Goal.png'

// Images Jupiter
import RtE_Jupi_Intro from '../../assets/images/portfolio/Return_to_Eden/Jupiter-Ascending/Intro.png'
import RtE_Jupi_Level from '../../assets/images/portfolio/Return_to_Eden/Jupiter-Ascending/Level.png'
import RtE_Jupi_Death from '../../assets/images/portfolio/Return_to_Eden/Jupiter-Ascending/Death.png'
import RtE_Jupi_Finish from '../../assets/images/portfolio/Return_to_Eden/Jupiter-Ascending/Finish.png'

const ReturnToEden = props => (
  <Layout>
    <Helmet>
      <title>Return to Eden - M.Bordes</title>
      <meta name="description" content="Return to Eden - Python game" />
    </Helmet>

    {/* Main */}
    <div id="main" className="alt">
      <section>
        <div className="inner">
          {/* Header */}
          <header className="major">
            <h1>Return to Eden</h1>
            <p>18 juni 2019</p>
          </header>

          {/* Intro */}
          <section className="spotlights">
            <section id="intro">
              <div className="image">
                <img src={RtE_Banner} alt="Hoofdscherm" />
              </div>
              <div className="content">
                <div className="inner">
                  <header className="major">
                    <h3>Intro</h3>
                  </header>
                  <p>
                    Het tweede project waar ik tijdens mijn eerste HBO
                    schooljaar aan heb meegewerkt, was het maken van een spel.
                    De opdracht was om een spel te maken, welke bestond uit
                    meerdere minigames. Eén minigame per lid van de groep. Onze
                    groep bestond uit 6 leden, wat betekende dat het spel uit 6
                    minigames moest gaan bestaan.
                  </p>
                </div>
              </div>
            </section>
            {/* End of spotlights */}
          </section>

          {/* Verschillende minigames */}
          <div className="grid-wrapper">
            {/* General game */}
            <div className="col-12 grid-wrapper">
              <div className="col-12">
                <header className="major">
                  <h3>Het spel</h3>
                </header>
              </div>
              {/* Verschillende minigames */}
              <p className="col-8">
                Het hoofd-thema dat wij hadden bedacht voor het spel, was dat er
                een intergalactische oorlog had plaatsgevonden. Na afloop van
                deze oorlog probeerde één ruimteschip terug te gaan naar de
                aarde. Het was hem gelukt om tot de rand van het zonnenstelcel
                te komen, maar nu had hij niet genoeg brandstof meer om op de
                aarde te landen. Met de scanner aan boord van zijn ruimteschip
                kon hij detecteren dat er op verschillende planeten
                brandstof-reserves lagen opgeslagen, maar dat hij deze allemaal
                moest ophalen om genoeg brandstof te hebben voor het landen op
                aarde. Op elke planeet moet een andere opdracht worden
                uitgevoerd om de brandstof te verkrijgen.
              </p>
              <div className="col-4 image fit">
                <img src={RtE_Game_Goal} alt="Game doel" />
              </div>
            </div>

            {/* Jupiter */}
            <div className="col-6">
              <header className="major">
                <h3>Jupiter Ascending</h3>
              </header>
              {/* Intro */}
              <div className="grid-wrapper">
                <div className="image fit col-6">
                  <img src={RtE_Jupi_Intro} alt="Jupiter Ascending intro" />
                </div>
                <p className="col-6">
                  Om bij Jupiter Ascending de brandstof te verkrijgen moet je
                  tussen de wolken door, naar een oud-brandstof station om hier
                  brandstof te verkrijgen.
                </p>
                <p className="col-12">
                  Met de scanner aan boord van je ruimteschip kun je zien dat er
                  één doorgang door de wolken is, maar dat je snel moet zijn als
                  je deze wilt halen.
                </p>
                <div className="image fit col-6">
                  <img src={RtE_Jupi_Level} alt="Jupiter Ascending level" />
                  <p>Het scherm waarop het level te zien is.</p>
                </div>
                <div className="image fit col-6">
                  <img src={RtE_Jupi_Death} alt="Jupiter Ascending death" />
                  <p>Het scherm wanneer je door de wolken bent ingehaald.</p>
                </div>
                <div className="image fit col-12">
                  <img src={RtE_Jupi_Finish} alt="Jupiter Ascending doel" />
                  <p>
                    Het scherm dat je te zien krijgt wanneer je de brandstof
                    hebt gevonden.
                  </p>
                </div>
              </div>
            </div>

            {/* Mars */}
            <div className="col-6">
              <header className="major">
                <h3>Mars</h3>
              </header>
              <p>Er wordt nog aan gewerkt om dit stuk af te maken.</p>
            </div>

            {/* Neptunus */}
            <div className="col-6">
              <header className="major">
                <h3>Neptunus</h3>
              </header>
              <p>Er wordt nog aan gewerkt om dit stuk af te maken.</p>
            </div>

            {/* Saturnus */}
            <div className="col-6">
              <header className="major">
                <h3>Saturnus</h3>
              </header>
              <p>Er wordt nog aan gewerkt om dit stuk af te maken.</p>
            </div>

            {/* Uranus */}
            <div className="col-6">
              <header className="major">
                <h3>Uranus</h3>
              </header>
              <p>Er wordt nog aan gewerkt om dit stuk af te maken.</p>
            </div>

            {/* Venus */}
            <div className="col-6">
              <header className="major">
                <h3>Venus</h3>
              </header>
              <p>Er wordt nog aan gewerkt om dit stuk af te maken.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default ReturnToEden
