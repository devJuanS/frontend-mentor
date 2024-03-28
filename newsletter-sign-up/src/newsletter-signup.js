import { validateEmail } from "./use-cases/validate-email.js";

export function NewsletterSignup() {
  const formSignup = document.getElementById('formSignup');

  formSignup.addEventListener('submit', (e) => {
    e.preventDefault();

    validateEmail( formSignup );
  });
}