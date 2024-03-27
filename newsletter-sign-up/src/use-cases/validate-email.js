

/**
 * 
 * @param {string} email 
 * @returns {boolean} true when the email is valid
 */
export const isValidEmail = ( email ) => {
  if ( !email ) return false;
  // Thanks to https://www.w3resource.com/javascript/form/email-validation.php 
  // for the regular expression
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return regex.test(email);
}