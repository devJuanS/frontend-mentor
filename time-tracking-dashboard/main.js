import { TimeTrackApp } from './src/time-track-app';
import './style.css';

document.querySelector('#app').innerHTML = `
  <div>
    <div class="dashboard">

    </div>
  </div>
`;

const element = document.querySelector('.dashboard');

TimeTrackApp(element);