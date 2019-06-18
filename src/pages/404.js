import React from 'react'

// Components
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <h1>Pagina niet gevonden</h1>
          <p>Helaas, deze pagina bestaat niet.</p>
          <a href="/" className="button special">
            Klik hier om terug te gaan naar het beginscherm.
          </a>
        </div>
      </section>
    </div>
  </Layout>
)

export default NotFoundPage
