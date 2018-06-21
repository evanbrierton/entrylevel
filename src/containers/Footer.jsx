import React from 'react';

import { SocialLinks } from '../components';

import { socialLinks } from '../data';

import '../styles/Footer.css';

const Footer = () => (
  <footer className="Footer">
    <SocialLinks links={socialLinks} />
  </footer>
);

export default Footer;
