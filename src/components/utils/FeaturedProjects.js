import shoppingCart from '../../assets/images/shopping-cart.png';
import battleship from '../../assets/images/battleship.png';
import weatherApp from '../../assets/images/weather-app.png';

const featured = [
  {
    name: 'Shopping Cart',
    image: shoppingCart,
    description:
      'An <span>E-commerce </span>website built with <span>React JS </span>and <span>FakeStore API </span> together with <span>Redux </span>and <span>React Router</span> libraries. Design is <span>responsive </span>built with vanilla <span>CSS</span>',
    stack:
      '<li>React</li><li>Redux</li><li>React-Router</li><li>FakeStore-API</li><li>CSS3</li>',
  },
  {
    name: 'Battleship',
    image: battleship,
    description:
      '<span>Battleship</span> game made with <span>Vanilla JavaScript</span> against a computer developed through <span>Test Driven Development</span>. Design is <span>responsive</span> built with <span>CSS</span>',
    stack:
      '<li>Jest</li><li>Webpacks</li><li>JavaScript</li><li>CSS</li><li>HTML</li>',
  },
  {
    name: 'Weather App',
    image: weatherApp,
    description:
      '<span>Weather App</span> made with <span>Vanilla JavaScript</span> and <span>Webpacks</span>. <span>OpenWeatherMap API</span> was used to show <span>daily forecast</span> for the next <span>7-days</span>',
    stack:
      '<li>OpenWeatherMap API</li><li>Webpacks</li><li>JavaScript</li><li>CSS</li>',
  },
];

export default featured;
