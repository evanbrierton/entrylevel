import React from 'react';

import '../../stylesheets/home/HeroCard.css';
import hackaccess from '../../stylesheets/img/hackaccess.png';
import bankofireland from '../../stylesheets/img/bankofireland.png';
import smartdublin from '../../stylesheets/img/smartdublin.png';

const HeroCard = () => (
  <section className="HeroCard">
    <h2>{'What\'s New?'}</h2>
    <ul>
      <li>
        <a href="http://www.hackaccessdublin.ie/" target="_blank" rel="noopener noreferrer">
          <img src={hackaccess} alt="Hack Access" />
        </a>
        <p>Check out Hack Access Dublin.</p>
      </li>
      <li>
        <a href="https://businessbanking.bankofireland.com/campaigns/bank-of-ireland-workbench/" target="_blank" rel="noopener noreferrer">
          <img src={bankofireland} alt="Bank Of Ireland" />
        </a>
        <p>Look out for Entry Level in Bank of Ireland branches around the country.</p>
      </li>
      <li>
        <a href="http://smartdublin.ie/" target="_blank" rel="noopener noreferrer">
          <img src={smartdublin} alt="Smart Dublin" />
        </a>
        <p>Entry Level in partnership with Smart Dublin.</p>
      </li>
    </ul>
  </section>
);

export default HeroCard;
