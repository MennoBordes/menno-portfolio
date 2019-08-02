import React from 'react'
import Helmet from 'react-helmet'

// Components
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

const over = props => (
  <Layout>
    <Helmet
      title="CV - M.Bordes"
      meta={[
        {
          name: 'descritpion',
          content: 'CV',
        },
      ]}
    />

    <BannerLanding />
    <div id="main" className="alt">
      <div className="inner">
        <header className="major">
          <h1>CV</h1>
        </header>
        {/* WhoAmI */}
        <section>
          <table>
            <tbody>
              <tr>
                <td>Naam</td>
                <td>Menno Bordes</td>
              </tr>
              <tr>
                <td>E-mail</td>
                <td>mennobordes@hetnet.nl</td>
              </tr>
              <tr>
                <td>Geboortedatum</td>
                <td>04-09-1997</td>
              </tr>
            </tbody>
          </table>
        </section>
        {/* Opleidingen */}
        <section>
          <h2>Opleidingen</h2>
          <table>
            <tbody>
              {/* Hogeschool Rotterdam */}
              <tr>
                <td>Software engineer informatica</td>
                <td>Huidige opleiding</td>
                <td>Hogeschool Rotterdam</td>
              </tr>
              <ul className="alt">
                <li>C&#35;</li>
                <li>Javascript</li>
                <li>Python</li>
                <li>Visual Basic</li>
                <li>MS SQL &#38; MY SQL</li>
              </ul>
            </tbody>
            {/* ID college */}
            <tbody>
              <tr>
                <td>Middenkader Engineering Elektrotechniek</td>
                <td>Huidige opleiding</td>
                <td>Hogeschool Rotterdam</td>
              </tr>
              <ul className="alt">
                <li>
                  Certificate CCNA part 1 Introduction (introduction to
                  networks)
                </li>
                <li>Programmeren van Microcontrollers / Arduino</li>
                <li>Kennis van Autocad</li>
                <li>VCA diploma (Behaald december 2013)</li>
              </ul>
            </tbody>
            {/* Erasmus college */}
            <tbody>
              <tr>
                <td>Mavo</td>
                <td>Juli 2013</td>
                <td>Erasmus College</td>
              </tr>
            </tbody>
          </table>
        </section>
        {/* Werkervaring */}
        <section>
          <h2>Werkervaring</h2>
          {/* Intratuin */}
          <div id="Intratuin-werk">
            <p>
              <strong>
                Verkoop medewerker |{' '}
                <a
                  href="https://www.intratuin.nl/winkels/intratuin-zevenhuizen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Intratuin
                </a>{' '}
                Zevenhuizen | september 2017 - mei 2019
              </strong>
            </p>
            <p>Medewerker in verkoop van goederen</p>
          </div>
          {/* Unica stage */}
          <div id="Unica-stage">
            <p>
              <strong>
                Eindstage MBO |{' '}
                <a
                  href="https://www.unica.nl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Unica BV
                </a>{' '}
                Bodegraven | februari 2017 - juli 2017
              </strong>
            </p>
            <p>
              Een applicatie gemaakt in Visual Basic met Windows forms, welke
              gegevens van verlichting uitleest en hiervan de data weergeeft.
            </p>
          </div>
          {/* Trescal werk */}
          <div id="Trescal-werk">
            <p>
              <strong>
                Technisch medewerker |{' '}
                <a
                  href="http://www.trescal.com/nl_BE/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Trescal BV
                </a>{' '}
                Zoetermeer | 2016 - januari 2017
              </strong>
            </p>
            <p>Kalibreren en repareren van meetapparatuur</p>
          </div>
          {/* Trescal stage */}
          <div id="Trescal-stage">
            <p>
              <strong>
                Technisch stagiair |{' '}
                <a
                  href="http://www.trescal.com/nl_BE/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Trescal BV
                </a>{' '}
                Zoetermeer | 2015 - 2016
              </strong>
            </p>
            <p>Kalibreren van meetapparatuur</p>
          </div>
          {/* DME stage */}
          <div id="DME-stage">
            <p>
              <strong>
                Technisch stagiair |{' '}
                <a
                  href="http://www.dme.nl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DME Installatiegroep
                </a>{' '}
                Moerkapelle | 2014 - 2015
              </strong>
            </p>
            <p>Installatie van elektrische systemen in woningen en bedrijven</p>
          </div>
          {/* Tas tomaten */}
          <div id="Tas-tomaten-werk">
            <p>
              <strong>
                Tuinbouw medewerker |{' '}
                <a
                  href="https://www.tastomaten.nl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tas tomaten
                </a>{' '}
                Zevenhuizen | 2010 - 2015
              </strong>
            </p>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)

export default over
