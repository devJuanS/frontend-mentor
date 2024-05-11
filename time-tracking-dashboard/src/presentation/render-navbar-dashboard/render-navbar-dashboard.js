import navbarHtml from './render-navbar-dashboard.html?raw';
import { updateTimesInCards } from '../render-tasks-board/render-tasks-board';
import './render-navbar-dashboard.css';

let navbar;

export const renderNavbarDashboard = ( element ) => {
  if ( navbar ) return;
  
  navbar = document.createElement('nav');
  navbar.innerHTML = navbarHtml;
  navbar.className = 'navbar';

  const timeframeLi = navbar.querySelectorAll('.time-option');
  
  timeframeLi.forEach( item => {
    item.addEventListener('click', element => {
      // clean the class used to style the option selected to every list item
      const timeframeSelected = navbar.querySelector('li.timeframe--selected');
      timeframeSelected.classList.remove('timeframe--selected');

      item.classList.add('timeframe--selected');
      updateTimesInCards(element.target.id);
    });
  });

  element.append( navbar );
}