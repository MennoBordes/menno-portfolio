import React from 'react'
import Helmet from 'react-helmet'

// Components
import Layout from '../../components/layout'
import Video from '../../components/Video'

// Images
import img_bordspel from '../../assets/images/portfolio/Bordspel/Bordspel.jpg'
import Bordspel_kaarten from '../../assets/images/portfolio/Bordspel/Kaarten.jpg'
import Bordspel_naam from '../../assets/images/portfolio/Bordspel/Bordspel_naam.jpg'

const bordspel = props => (
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

          {/* Intro */}
          <section className="spotlights">
            <section id="intro">
              <div className="image">
                <img src={img_bordspel} alt="Bordspel bord" />
                {/* <sup>Het uiterlijk van het bordspel.</sup> */}
              </div>
              <div className="content">
                <div className="inner">
                  <header className="major">
                    <h3>Intro</h3>
                  </header>
                  <p>
                    Tijdens de eerste 10 weken van het eerste schooljaar op het
                    HBO was er de opdracht om als groep een bordspel te
                    ontwikkelen met als thema Rotterdam. Met de groep waarmee ik
                    heb samengewerkt, hebben we na overleg besloten om het
                    bordspel te maken met als thema <i>mythisch Rotterdam</i>.
                  </p>
                  <p>
                    <span className="image right">
                      <img src={Bordspel_naam} alt="Bordspel naam" />
                    </span>
                    De bedoeling was om mythische creaturen en historische
                    personen te gebruiken om een uniek bordspel te maken. Dit
                    bordspel hebben we na overleg met de klant de naam{' '}
                    <b>"De strijd der Districten”</b> gegeven.
                  </p>
                </div>
              </div>
            </section>
            {/* Film */}
            <div>
              <header className="major">
                <h3>Film</h3>
              </header>
              <Video
                videoSrcURL="https://www.youtube.com/embed/MwgGU0DmAp4"
                videoTitle="Bordspel introductie"
              />
            </div>
          </section>

          {/* Spelregels */}
          <div className="grid-wrapper">
            <div className="col-12 grid-wrapper" id="spelregels">
              <div className="col-12">
                <header className="major">
                  <h3>Spelregels</h3>
                </header>
              </div>

              {/* Spelregels intro */}
              <div className="col-6">
                <p>
                  Haven, polder, markthal, goudsmit. Lang geleden leefden de
                  vier districten in vrede samen. Maar alles veranderde toen
                  professor Putricide per ongeluk de donkere portaal opende.
                  Niets is meer wat het lijkt, de gehele geschiedenis is door de
                  war geschud, mythes zijn waarheid geworden. Alleen als één
                  district de drie torens weet te herbouwen, dan zal alles weer
                  normaal worden. Blijf geloven dat op een dag de wereld door
                  één van de helden gered zou worden.
                </p>
              </div>

              {/* Spelregels */}
              <div className="col-6">
                <p>
                  In het spel bestaan 4 districten: Voedsel, Klei, Textiel en
                  Goud. Deze districten staan voor de verschillende soorten
                  grondstoffen die verkregen kunnen worden in het spel. Deze
                  grondstoffen moet de speler gebruiken om zijn 3 torens opnieuw
                  op te bouwen. <br /> Elk district heeft een andere combinatie
                  van grondstoffen nodig om zijn torens te bouwen, hierdoor is
                  een duidelijk verschil tussen de torens van de districten.
                </p>
              </div>

              {/* Resources */}
              <div className="col-6">
                <header className="major">
                  <h4>Grondstoffen</h4>
                </header>
                <p>
                  De grondstoffen worden weergegeven door middel van
                  grondstofkaarten.{' '}
                </p>
              </div>
              <div className="col-6 image left">
                <img src={Bordspel_kaarten} alt="Grondstoffen" />
              </div>

              {/* Dobbelstenen */}

              {/* Vakjes */}

              {/* Gebouw bouwen */}

              {/* Kanskaarten */}
              <div className="col-12">
                <header className="major">
                  <h4>Kanskaarten</h4>
                </header>
                <p />
              </div>

              {/* Helden */}
              <div className="col-12 grid-wrapper" id="helden">
                <div className="col-12">
                  <header className="major">
                    <h4>Helden</h4>
                  </header>
                  <p>
                    Elk district heeft een eigen held, en elke held heeft andere
                    eigenschappen. De eigenschappen en bouwkosten worden
                    hieronder aangegeven.
                  </p>
                </div>

                {/* Textiel */}
                <div className="col-3">
                  <h3>Goud</h3>
                  <p>Frits Goldschmeding</p>
                  <h5>Eigenschappen</h5>
                  <ul>
                    <li>
                      Als je op een portaal vak land, hoef je de actie niet uit
                      te voeren.
                    </li>
                    <li>
                      Als je op een belasting vak land, hoef je geen belasting
                      te betalen.
                    </li>
                  </ul>
                  <h5>Bouwkosten</h5>
                  <ol>
                    <li>Verdieping 1 = 1 goud</li>
                    <li>Verdieping 2 = 1 goud &amp; 1 voedsel</li>
                    <li>
                      Verdieping 3 = 1 klei &amp; 1 voedsel &amp; 1 textiel
                    </li>
                  </ol>
                </div>

                {/* Klei */}
                <div className="col-3">
                  <h3>Klei</h3>
                  <p>Meisje van Yde</p>
                  <h5>Eigenschappen</h5>
                  <ul>
                    <li>
                      Kan zowel op investeer vakken als op grondstof vakken
                      investeren.
                    </li>
                    <li>
                      Als je op het markthal vak land hoef je maar 1 grondstof
                      kaart in te leveren, je mag zelf kiezen welke.
                    </li>
                  </ul>
                  <h5>Bouwkosten</h5>
                  <ol>
                    <li>Verdieping 1 = 1 klei</li>
                    <li>Verdieping 2 = 1 klei &amp; 1 textiel</li>
                    <li>
                      Verdieping 3 = 1 goud &amp; 1 voedsel &amp; 1 textiel
                    </li>
                  </ol>
                </div>

                {/* Voedsel */}
                <div className="col-3">
                  <h3>Voedsel</h3>
                  <p>Michiel de Ruyter</p>
                  <h5>Eigenschappen</h5>
                  <ul>
                    <li>
                      Bij elke worp van de transport dobbelsteen <b>mag</b> je
                      het dubbele aantal ogen lopen
                    </li>
                    <li>
                      Als je op het markthal vak land hoef je maar 1 grondstof
                      kaart in te leveren, je mag zelf kiezen welke.
                    </li>
                  </ul>
                  <h5>Bouwkosten</h5>
                  <ol>
                    <li>Verdieping 1 = 1 voedsel</li>
                    <li>Verdieping 2 = 1 voedsel &amp; 1 goud</li>
                    <li>Verdieping 3 = 1 goud &amp; 1 klei &amp; 1 textiel</li>
                  </ol>
                </div>

                {/* Textiel */}
                <div className="col-3">
                  <h3>Textiel</h3>
                  <p>Oger Lusink</p>
                  <h5>Eigenschappen</h5>
                  <ul>
                    <li>
                      Kom je op een grondstof vak dan mag de grondstof
                      dobbelsteen twee maal geworpen worden i.p.v. één keer.
                    </li>
                  </ul>
                  <h5>Bouwkosten</h5>
                  <ol>
                    <li>Verdieping 1 = 1 textiel</li>
                    <li>Verdieping 2 = 1 textiel &amp; 1 klei</li>
                    <li>Verdieping 3 = 1 goud &amp; 1 klei &amp; 1 voedsel</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default bordspel
