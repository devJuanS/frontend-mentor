
/**
 * 
 * @param {HTMLFormElement} form with field to validate the email and where to show errors 
 */
export function validateEmail(form) {
  
  const input = form.querySelector('#email'),
        label = form.querySelector('#emailLabel'),
        email = input.value.trim();
  
  if ( isValidEmail(email) ) {
    label.classList.remove('no-valid-email');
    input.classList.remove('no-valid-email');

    const nsletter   = document.querySelector('.newsletter-signup'),
          successMsg = document.querySelector('.success-msg');
    
    nsletter.style.display   = 'none';
    successMsg.style.display = 'flex';
  } else {
    label.classList.add('no-valid-email');
    input.classList.add('no-valid-email');
  }
}

/**
 * 
 * @param {string} email 
 * @returns {boolean} true when the email is valid
 */
const isValidEmail = ( email ) => {
  if ( !email ) return false;
  // Thanks to https://www.w3resource.com/javascript/form/email-validation.php 
  // for the regular expression
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return regex.test(email);
}