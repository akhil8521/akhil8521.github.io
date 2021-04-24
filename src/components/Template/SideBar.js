import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Akhil Jahagirdar</h2>
        <p><a href="mailto:aj8521@gmail.com">aj8521@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Akhil. I like Building and Automating things.
        I am a Passionate Technologist with a drive to
        solve large scale and complex problems.
        I have had the oppurtunity to work for <a href="https://www.agilecrm.com">Agile CRM</a>
        , <a href="https://www.cloudthing.com">CloudThing</a>
        , <a href="https://www.presidio.com">Presidio Inc</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Akhil Jahagirdar <Link to="/">akhil.cloud</Link>.</p>
    </section>
  </section>
);

export default SideBar;
