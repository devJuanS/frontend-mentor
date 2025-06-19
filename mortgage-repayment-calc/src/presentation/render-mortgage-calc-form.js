import { validateCalcForm } from '../lib/helpers/validate-calc-form';
import { calculateRepayment } from '../lib/helpers/calculate-repayments';
import { renderMortgageCalcResults } from './render-mortgage-calc-results';
import { cleanValidationErrors } from './clean-validation-errors';
import { REQUIRED_CLASS_STATUS } from '../lib/constants/constants';
import './render-mortgage-calc-form.css';

const formHTML = `
  <form id="mortgageCalcForm" novalidate class="stack--space-l">
    <div class="calc-form__header">
      <h2 class="calc-form__title">Mortgage Calculator</h2>
      <input type="reset" class="calc-form__reset" value="Clear All" />
    </div>
    <div class="calc-form__inputs stack--space-l">
      <div class="user-input stack--space-s">
        <label for="mortgageAmount">Mortgage Amount</label>
        <div class="input-field">
          <span class="input__unit">£</span>
          <input id="mortgageAmount" type="number" name="mortgageAmount" class="input--numeric" min="0" required />
        </div>
      </div>
      <div class="inputs__mortgage-conditions stack--space-l">
        <div class="user-input stack--space-s">
          <label for="mortgageTerm">Mortgage Term</label>
          <div class="input-field">
            <input id="mortgageTerm" type="number" name="mortgageTerm" class="input--numeric" min="0" required />
            <span class="input__unit">years</span>
          </div>
        </div>
        <div class="user-input stack--space-s">
          <label for="interestRate">Interest Rate</label>
          <div class="input-field">
            <input id="interestRate" type="number" name="interestRate" class="input--numeric" min="0" required />
            <span class="input__unit">%</span>
          </div>
        </div>
      </div>
    </div>
    <div class="user-input">
      <fieldset class="calc-form__mortgage-types stack--space-s">
        <legend>Mortgage Type</legend>
        <div class="mortgage-type-option input-field">
          <input id="mortgageTypeRepayment" type="radio" name="mortgageTypes" value="repayment" />
          <label for="mortgageTypeRepayment" title="Repay capital and interest together.">Repayment</label>
        </div>
        <div class="mortgage-type-option input-field">
          <input id="mortgageTypeInterest" type="radio" name="mortgageTypes" value="interest" />
          <label for="mortgageTypeInterest" title="Repay the interest. Capital paid off at end of term.">Interest Only</label>
        </div>
      </fieldset>
    </div>
    <button type="submit" class="button-submit">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#133041" d="M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z"/></svg>
      <span>Calculate Repayments</span>
    </button>
  </form>
`;

/**
 *
 * @param {HTMLElement} htmlElement
 */
export function renderMortgageCalcForm(htmlElement) {
  htmlElement.innerHTML = 'Loading Mortgage Calculator App...';

  const formSection = document.createElement('section');
  formSection.innerHTML = formHTML;
  formSection.classList.add('calc-form-container');

  const mortgageCalcForm = formSection.querySelector('#mortgageCalcForm');

  mortgageCalcForm.addEventListener('submit', (event) => {
    event.preventDefault();
    cleanValidationErrors(REQUIRED_CLASS_STATUS);

    const formInputValues = validateCalcForm(formSection);

    if (formInputValues === null) {
      renderMortgageCalcResults(htmlElement);
      return;
    }

    const resultValues = calculateRepayment(formInputValues);
    renderMortgageCalcResults(htmlElement, resultValues);
  });

  mortgageCalcForm.addEventListener('reset', () => {
    cleanValidationErrors(REQUIRED_CLASS_STATUS);
    renderMortgageCalcResults(htmlElement);
  });

  htmlElement.innerHTML = '';
  htmlElement.append(formSection);
}
