import React from 'react'
import Helmet from 'react-helmet'
import moment from 'moment'

// Components
import Layout from '../components/layout'

// Images
import pers_color from '../assets/images/personal/pers-color.jpg'
import BannerLanding from '../components/BannerLanding'

// The date of today
var currentDate = moment.now()
// My birthday
const birthDate = moment([1997, 9, 4])

const over = props => (
  <Layout>
    <Helmet>
      <title>About - M.Bordes</title>
      <meta name="descritpion" content="About" />
    </Helmet>

    <BannerLanding />
    <div id="main">
      <section id="one" className="spotlights">
        <section>
          <span className="image fit">
            <img src={pers_color} alt="Smoelenfoto" />
          </span>
          <div className="content">
            <div className="inner">
              <p>
                Mijn naam is Menno, ik ben{' '}
                {-birthDate.diff(currentDate, 'years')} jaar oud en volg de
                opleiding Informatica aan de Hogeschool in Rotterdam.
                <br />
                <br />
                Voordat ik aan deze opleiding was begonnen heb ik eerst de
                opleiding Middenkader Engineering Elektrotechniek gevolgd en
                afgerond. Gedurende deze opleiding werd een introductie gegeven
                van Arduino, wat ik erg gemakkelijk oppikte. Tevens heb ik
                tijdens mijn afstudeerstage volledig met Visual Basic gewerkt.
                <br />
                Mede dankzij deze ervaringen heb ik besloten om als
                vervolgopleiding voor Informatica te kiezen.
                <br />
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default over
