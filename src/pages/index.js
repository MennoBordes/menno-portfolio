import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

// Components
import Layout from '../components/layout'
import Banner from '../components/Banner'

// Images
import Artic_Banner from '../assets/images/portfolio/Artic_webshop/artic-home.png'
import RgbKubus_Banner from '../assets/images/portfolio/RGB_kubus/rgb-header.jpg'
import Slooijer_Banner from '../assets/images/portfolio/Slooijer_voorraad/Slooijer_Banner.jpg'
import Bordspel_Banner from '../assets/images/portfolio/Bordspel/Bordspel.jpg'
import RtE_Banner from '../assets/images/portfolio/Return_to_Eden/Game_Home.png'
import About_Banner from '../assets/images/About/about_me.png'
import CV_Banner from '../assets/images/CV/cv.jpg'

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
          {/* Kunst webshop */}
          <section id="portfolio" className="tiles">
            <article style={{ backgroundImage: `url(${Artic_Banner})` }}>
              <header className="major">
                <h3>Kunst webshop</h3>
                <p>
                  Een webshop gemaakt met behulp van React, Javascript, HTML en
                  SQL
                </p>
              </header>
              <Link to="/portfolio/artic_webshop" className="link primary" />
            </article>
            {/* Slooijer voorraadbeheer systeem */}
            <article style={{ backgroundImage: `url(${Slooijer_Banner})` }}>
              <header className="major">
                <h3>Slooijer voorraadbeheer</h3>
                <p>Een voorraadbeheer systeem gemaakt met C# en SQL</p>
              </header>
              <Link
                to="/portfolio/slooijer_voorraad"
                className="link primary"
              />
            </article>
            {/* Python game */}
            <article style={{ backgroundImage: `url(${RtE_Banner})` }}>
              <header className="major">
                <h3>Return to Eden</h3>
                <p>
                  Een spel gemaakt in Python en pygame, bestaande uit
                  verschillende minigames
                </p>
              </header>
              <Link to="/portfolio/return_to_eden" className="link primary" />
            </article>
            {/* Bordspel */}
            <article style={{ backgroundImage: `url(${Bordspel_Banner})` }}>
              <header className="major">
                <h3>Bordspel</h3>
                <p>Een bordspel gemaakt als schoolopdracht</p>
              </header>
              <Link to="/portfolio/bordspel" className="link primary" />
            </article>
            {/* RGB kubus */}
            <article style={{ backgroundImage: `url(${RgbKubus_Banner})` }}>
              <header className="major">
                <h3>RGB kubus</h3>
                <p>De eindopdracht van mijn MBO opleiding</p>
              </header>
              <Link to="/portfolio/rgb_kubus" className="link primary" />
            </article>
            {/* About */}
            <article style={{ backgroundImage: `url(${About_Banner})` }}>
              <header className="major">
                <h3>Over</h3>
                {/* <p>About page</p> */}
              </header>
              <Link to="/over" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${CV_Banner})` }}>
              <header className="major">
                <h3>CV</h3>
              </header>
              <Link to="/cv" className="link primary" />
            </article>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
