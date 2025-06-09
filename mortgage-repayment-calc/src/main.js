import { MortgageCalc } from './mortgage-calc';
import './components/FooterFrontendMentor';
import './style.css';

document.querySelector('#app').innerHTML = `
  <main class="mortgage-calc-app"></main>
  <footer-frontend-mentor></footer-frontend-mentor>
`;

const element = document.querySelector('.mortgage-calc-app');

MortgageCalc(element);
