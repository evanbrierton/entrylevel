import React from 'react';

import '../stylesheets/Hero.css';

const Hero = () => (
  <section className="Hero">
    <section className="content">
      <h1>Entry Level</h1>
      <p>
        Entry level helps people find accessible establishments and encourages positive
        improvements to those establishments.
      </p>
      <p>Click one of the badges to find out more.</p>
      <div className="Badges">
        <button className="yellow badge">
          <i className="material-icons">accessible_forward</i>
        </button>
        <button className="red badge">
          <i className="material-icons">visibility_off</i>
        </button>
        <button className="blue badge">
          <i className="material-icons">hearing</i>
        </button>
      </div>
    </section>
  </section>
);

export default Hero;
