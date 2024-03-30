import { renderSignupForm } from "../render-signup-form/render-signup-form.js";

const messageHTML = `
  <div class="success-icon"></div>
  <h2 class="title">Thanks for subscribing!</h2>
  <p class="success-text">
    A confirmation email has been sent to <strong id="signedupEmail"></strong>. 
    Please open it and click the button inside to confirm your subscritption
  </p>
  <button class="btn" id="btnDismiss">Dismiss message</button>
`;
let message;

/**
 * 
 * @param {HTMLDivElement} element 
 * @param {string} email entered by the user 
 */
export function renderSignupSuccessMsg(element, email) {
  element.innerHTML = '...';
  
  message = document.createElement('article');
  message.innerHTML = messageHTML;
  message.classList.add('success-msg');

  const signedupEmail       = message.querySelector('#signedupEmail');
  signedupEmail.textContent = email;

  const button = message.querySelector('#btnDismiss');
  button.addEventListener('click', () => {
    renderSignupForm(element);
    removeBodySuccessDisplay();
  });

  element.innerHTML = '';
  element.append(message);
  addBodySuccessDisplay();
}

const body = document.querySelector('body');

function addBodySuccessDisplay() {
  body.classList.add('success--display');
}

function removeBodySuccessDisplay() {
  body.classList.remove('success--display');
}