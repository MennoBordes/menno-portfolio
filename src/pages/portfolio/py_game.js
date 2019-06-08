import React from 'react'
import Helmet from 'react-helmet'

// Components
import Layout from '../../components/layout'

// Images

const py_game = props => (
  <Layout>
    <Helmet>
      <title>Python game - M.Bordes</title>
      <meta name="description" content="Python game" />
    </Helmet>

    {/* Main */}
    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          {/* Header */}
          <header className="major">
            <h1>Python game</h1>
            <p>8 juni 2019</p>
          </header>

          {/* Content */}
          <div className="grid-wrapper">
            <div className="col-12">
              <p>blablabla</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default py_game
