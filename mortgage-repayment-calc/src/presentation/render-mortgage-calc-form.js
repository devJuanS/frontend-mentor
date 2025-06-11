import { validateCalcForm } from '../lib/helpers/validate-calc-form';
import { calculateRepayment } from '../lib/helpers/calculate-repayments';
import { renderMortgageCalcResults } from './render-mortgage-calc-results';

const formHTML = `
  <form id="mortgageCalcForm" novalidate>
    <div class="calc-form__header">
      <h2 class="calc-form__title">Mortgage Calculator</h2>
      <input type="reset" value="Clear All" />
    </div>
    <div class="calc-form__inputs">
      <label for="mortgageAmount">Mortgage Amount</label>
      <input id="mortgageAmount" type="number" name="mortgageAmount" class="input--numeric" min="0" required />
      <div class="inputs__mortgage-conditions numeric-group">
        <label for="mortgageTerm">Mortgage Term</label>
        <input id="mortgageTerm" type="number" name="mortgageTerm" class="input--numeric" min="0" required />
        <label for="interestRate">Interest Rate</label>
        <input id="interestRate" type="number" name="interestRate" class="input--numeric" min="0" required />
      </div>
    </div>
    <fieldset class="calc-form__mortgage-types">
      <legend>Mortgage Type</legend>
      <input id="mortgageTypeRepayment" type="radio" name="mortgageTypes" value="repayment" />
      <label for="mortgageTypeRepayment" title="Repay capital and interest together.">Repayment</label>
      <input id="mortgageTypeInterest" type="radio" name="mortgageTypes" value="interest" />
      <label for="mortgageTypeInterest" title="Repay the interest. Capital paid off at end of term.">Interest Only</label>
    </fieldset>
    <input type="submit" value="Calculate Repayments" />
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

    const formInputValues = validateCalcForm(formSection);

    if (formInputValues === null) return;

    const resultValues = calculateRepayment(formInputValues);
    renderMortgageCalcResults(htmlElement, resultValues);
  });

  htmlElement.innerHTML = '';
  htmlElement.append(formSection);
}
