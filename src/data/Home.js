import { backgroundImage, logoPlaceholder } from '../images';

export const card = {

  header: 'What\'s New?',

  items: [{
    href: 'http://www.hackaccessdublin.ie/',
    src: logoPlaceholder,
    alt: 'Lorem Ipsum',
    caption: 'Lorem ipsum dolor sit amet.',
    key: 0,
  },
  {
    href: 'https://businessbanking.bankofireland.com/campaigns/bank-of-ireland-workbench/',
    src: logoPlaceholder,
    alt: 'Lorem Ipsum',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat, ipsum in tempor.',
    key: 1,
  },
  {
    href: 'http://smartdublin.ie/',
    src: logoPlaceholder,
    alt: 'Lorem Ipsum',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    key: 2,
  }],
};

export const hero = {
  header: 'Entry Level',
  p1: 'Entry level helps people find accessible establishments and encourages positive improvements to those establishments.',
  p2: 'Click one of the badges to find out more.',
  badges: true,
};

export const background = { backgroundImage: `url(${backgroundImage})` };
