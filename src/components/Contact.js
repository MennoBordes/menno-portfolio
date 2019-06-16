import React from 'react'

const Contact = props => (
  <section id="contact">
    <div className="inner">
      <div />
      {/* <section>
        <form name="contact" method="POST" data-netlify="true" action="/">
          <div className="field half first">
            <label htmlFor="name">naam</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Bericht</label>
            <textarea name="message" id="message" rows="6" />
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
          </ul>
        </form>
      </section> */}
      <section>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <p className="hiddesn">
            <label>
              Don&#39;t' fill this out if you are human:{' '}
              <input name="bot-field" />
            </label>
          </p>
          <div className="field half first">
            <label htmlFor="name">naam</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Bericht</label>
            <textarea name="message" id="message" rows="6" />
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
          </ul>
        </form>
      </section>
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-envelope" />
            <h3>Email</h3>
            <span>
              Voor vragen of opmerkingen kunt u contact opnemen met:{' '}
              <strong>mennobordes@hetnet.nl</strong>
            </span>
          </div>
        </section>
      </section>
      {/* <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-phone" />
            <h3>Telefoon</h3>
            <span>+31 (0)6 58949191</span>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-home" />
            <h3>Address</h3>
            <span>
              1234 Somewhere Road #5432
              <br />
              Nashville, TN 00000
              <br />
              United States of America
            </span>
          </div>
        </section>
      </section> */}
    </div>
  </section>
)

export default Contact
