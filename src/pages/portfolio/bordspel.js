import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'

// Images
import img_bordspel from '../../assets/images/portfolio/Bordspel/Bordspel.jpg'

const bordspel = prosp => (
  <Layout>
    <Helmet>
      <title>bordspel - M.Bordes</title>
      <meta name="description" content="bordspel" />
    </Helmet>

    {/* Main */}
    <div id="main" className="alt">
      <section>
        <div className="inner">
          {/* Header */}
          <header className="major">
            <h1>Bordspel</h1>
            <p>25 mei 2019</p>
          </header>

          {/* Content */}
          <div className="grid-wrapper">
            <div className="col-6">
              <p>
                Tijdens de eerste 10 weken van 1e schooljaar op het HBO was er
                de opdracht om als groep een bordspel te ontwikkelen met als
                thema Rotterdam. Met de groep waarmee ik heb samengewerkt,
                hebben we na overleg besloten om het bordspel te maken over een
                mythisch Rotterdam.
              </p>
              <p>
                De bedoeling was om mythische creaturen, maar ook historische
                personen te gebruiken om een uniek bordspel te maken. Dit
                bordspel hebben we na overleg met de klant de naam “
                <b>De strijd der Districten”</b> gegeven.
              </p>
              <p>
                Bij de inleiding van het spel wordt verteld dat professor
                Putricide per ongeluk de duistere portaal opende. Hierdoor werd
                de huidige samenleving verwoest. Alleen wanneer één district
                zijn 3 torens weet te bouwen, dan pas, zal alles weer normaal
                worden.
              </p>
            </div>
            <div className="col-6 image fit">
              <img src={img_bordspel} alt="Bordspel bord" />
              <sup>Het uiterlijk van het bordspel.</sup>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default bordspel
