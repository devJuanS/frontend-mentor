import navbarHtml from './render-navbar-dashboard.html?raw';
import './render-navbar-dashboard.css';

let navbar;

export const renderNavbarDashboard = ( element ) => {
  if ( navbar ) return;
  
  navbar = document.createElement('nav');
  navbar.innerHTML = navbarHtml;
  navbar.className = 'navbar';

  //TODO: add event listeners

  element.append( navbar );
}