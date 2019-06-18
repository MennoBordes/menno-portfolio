import React from 'react'
import Helmet from 'react-helmet'

// Components
import Layout from '../../components/layout'

// Images
import RtE_Banner from '../../assets/images/portfolio/Return_to_Eden/Game_Home.png'

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
          <br />

          {/* Content */}
          <div className="grid-wrapper">
            <div className="col-12">
              {/* Verschillende minigames */}
              <p>
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
            </div>

            {/* Jupiter */}
            <div className="col-6">
              <header className="major">
                <h3>Jupiter</h3>
              </header>
              {/* Uitdaging */}
              <p>blablabla</p>
            </div>
            {/* Mars */}
            <div className="col-6">
              <header className="major">
                <h3>Mars</h3>
              </header>
              {/* Uitdaging */}
              <p>blablabla</p>
            </div>
            {/* Neptunus */}
            <div className="col-6">
              <header className="major">
                <h3>Neptunus</h3>
              </header>
              {/* Uitdaging */}
              <p>blablabla</p>
            </div>
            {/* Saturnus */}
            <div className="col-6">
              <header className="major">
                <h3>Saturnus</h3>
              </header>
              {/* Uitdaging */}
              <p>blablabla</p>
            </div>
            {/* Uranus */}
            <div className="col-6">
              <header className="major">
                <h3>Uranus</h3>
              </header>
              {/* Uitdaging */}
              <p>blablabla</p>
            </div>
            {/* Venus */}
            <div className="col-6">
              <header className="major">
                <h3>Venus</h3>
              </header>
              {/* Uitdaging */}
              <p>blablabla</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default ReturnToEden
