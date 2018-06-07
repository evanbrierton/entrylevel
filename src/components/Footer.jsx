import React from 'react';

import SocialLinks from './SocialLinks';

import socialLinks from './data/Footer';

import '../stylesheets/Footer.css';

const Footer = () => (
  <footer className="Footer">
    <SocialLinks links={socialLinks} />
  </footer>
);

export default Footer;
