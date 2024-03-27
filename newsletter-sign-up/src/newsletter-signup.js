import { isValidEmail } from "./use-cases/validate-email.js";

/**
 * 
 * @param {HTMLFormElement} form with field to validate the email and where to show errors 
 */
export function NewsletterSignup( form ) {
  
  console.log('App started 🫡');
  // console.log(formSignup);
  //TODO: get the value in input field from form
  test('js@email.com');
  test('');
  test('1@gm.co');
}

function test(input) {
  if ( !input ) {
    console.log('empty', isValidEmail(input));
    return;
  }

  console.log(input, isValidEmail(input));
}