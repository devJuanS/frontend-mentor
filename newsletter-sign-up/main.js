import { NewsletterSignup } from './src/newsletter-signup.js';

const app = document.getElementById('app');

app.innerHTML = `
  <div class="newsletter-signup">
  </div>
`;

const element = document.querySelector('.newsletter-signup');

NewsletterSignup( element );