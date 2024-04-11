import { TimeTrackApp } from './src/time-track-app';
import './style.css';

document.querySelector('#app').innerHTML = `
  <div class="dashboard"></div>
`;

const element = document.querySelector('.dashboard');

TimeTrackApp(element);