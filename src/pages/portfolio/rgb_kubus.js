import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'

// Images
import RgbHeader from '../../assets/images/portfolio/RGB_kubus/rgb-header.jpg'

const RGB_kubus = props => (
  <Layout>
    <Helmet>
      <title>RGB kubus - M.Bordes</title>
      <meta name="descritpion" content="RGB kubus" />
    </Helmet>

    {/* Main */}
    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          {/* Header */}
          <header className="major">
            <h1>RGB kubus</h1>
            <p>22 mei 2019</p>
          </header>
          <div className="grid-wrapper">
            {/* Intro */}
            <div className="col-6">
              <h2 id="content">Intro</h2>
              <p>
                De eindopdracht waaraan ik heb gewerkt op mijn MBO opleiding tot
                elektrotechnicus, was het maken van een rgb kubus. Deze kubus
                zou gaan bestaan uit 3mm led's, welke door middel van een matrix
                aangestuurd worden.
              </p>
            </div>

            {/* Header image */}
            <div className="col-6 image fit">
              <img src={RgbHeader} alt="rgb kubus" />
            </div>

            {/* Construction */}
            <div className="col-12">
              <h2 id="content">Bouwproces</h2>
              <p>Hier komt een beschrijving van het bouwproces.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default RGB_kubus
