import { renderSignupSuccessMsg } from "../presentation/render-signup-success-msg/render-signup-success-msg.js";

/**
 * 
 * @param {HTMLDivElement}  parentElement from form element
 * @param {HTMLFormElement} form with field to validate the email and where to show errors 
 */
export function validateEmail(parentElement, form) {
  
  const input = form.querySelector('#email'),
        label = form.querySelector('#emailLabel'),
        email = input.value.trim();
  
  if ( !isValidEmail(email) ) {
    label.classList.add('no-valid-email');
    input.classList.add('no-valid-email');
    return;
  }
  renderSignupSuccessMsg(parentElement, email);
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