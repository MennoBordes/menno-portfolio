import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import Artic_webshop from '../assets/images/portfolio/Artic_webshop/artic-home.png'
import rgbkubus from '../assets/images/portfolio/RGB_kubus/rgb-header.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title=" Portfolio - M.Bordes"
          meta={[
            { name: 'description', content: 'Portfolio' },
            { name: 'keywords', content: 'portfolio, Bordes' },
          ]}
        />

        <Banner />

        {/* Main */}
        <div id="main">
          {/* Portfolio */}
          <section id="portfolio" className="tiles">
            <article style={{ backgroundImage: `url(${Artic_webshop})` }}>
              <header className="major">
                <h3>Kunst webshop</h3>
                <p>
                  Een webshop gemaakt met behulp van React, Javascript, HTML en
                  SQL
                </p>
              </header>
              <Link to="/portfolio/artic_webshop" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>Voorraadbeheer</h3>
                <p>Een voorraadbeheer systeem gemaakt met C# en SQL</p>
              </header>
              <Link to="/landing" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${rgbkubus})` }}>
              <header className="major">
                <h3>RGB kubus</h3>
                <p>De eindopdracht van mijn MBO opleiding</p>
              </header>
              <Link to="/portfolio/rgb_kubus" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic05})` }}>
              <header className="major">
                <h3>Bordspel</h3>
                <p>Een bordspel gemaakt als schoolopdracht</p>
              </header>
              <Link to="/landing" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>over</h3>
                <p>About page</p>
              </header>
              <Link to="/over" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic06})` }}>
              <header className="major">
                <h3>Placeholder</h3>
                <p>Feugiat amet tempus</p>
              </header>
              <Link to="/landing" className="link primary" />
            </article>
          </section>
          {/* <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Massa libero</h2>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
                Pellentesque condimentum sem. In efficitur ligula tate urna.
                Maecenas laoreet massa vel lacinia pellentesque lorem ipsum
                dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et
                sagittis libero. Mauris aliquet magna magna sed nunc rhoncus
                amet pharetra et feugiat tempus.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/landing" className="button next">
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
          </section> */}
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
