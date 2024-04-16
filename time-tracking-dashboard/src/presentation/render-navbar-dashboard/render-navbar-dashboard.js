import navbarHtml from './render-navbar-dashboard.html?raw';
import './render-navbar-dashboard.css';

let navbar;

export const renderNavbarDashboard = ( element ) => {
  if ( navbar ) return;
  
  navbar = document.createElement('nav');
  navbar.innerHTML = navbarHtml;
  navbar.className = 'navbar';

  const periodViewOptions    = navbar.querySelector('.period-views-options'),
        periodViewOptionsLi  = navbar.querySelectorAll('.period-view-option');

  periodViewOptions.addEventListener('click', (elementList) => {
    // clean the class used to style the option selected to every list item
    periodViewOptionsLi.forEach( option => {
      option.classList.remove('period-view--selected')
    });
    
    const selectedOption = elementList.target.id;
    if ( selectedOption ) {
      const selectedOptionElement = navbar.querySelector(`#${ selectedOption }`);
      selectedOptionElement.classList.add('period-view--selected');
      //TODO: return the id of the period view option selected
      console.log(selectedOption);
    }
    
  });

  element.append( navbar );
}