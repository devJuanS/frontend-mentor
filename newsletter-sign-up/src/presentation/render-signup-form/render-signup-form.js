import { validateEmail } from "../../use-cases/validate-email.js";

const formHTML = `
  <div class="hero-img"></div>
  <div class="form-container">
    <h2 class="title">Stay updated!</h2>
    <p class="form-description">
      Join 60,000+ product managers receiving monthly updates on:
    </p>
    <ul class="form-features">
      <li>Product discovery and building what matters</li>
      <li>Measuring to ensure updates are a success</li>
      <li>And much more!</li>
    </ul>
    <form id="signupForm" novalidate>
      <label for="email" id="emailLabel">Email address</label>
      <input type="text" name="email" id="email" autocomplete="email" placeholder="email@company.com">
      <button class="btn" id="btnSubmit">Subscribe to monthly newsletter</button>
    </form>
  </div>
`;
let form;

/**
 * 
 * @param {HTMLDivElement} element 
 */
export function renderSignupForm(element) {
  element.innerHTML = 'Loading Newsletter Signup Form...';
  
  form = document.createElement('article');
  form.innerHTML = formHTML;
  form.classList.add('newsletter-signup-form');

  const signupForm = form.querySelector('#signupForm');
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    validateEmail( element, signupForm );
  });

  element.innerHTML = '';
  element.append(form);
}