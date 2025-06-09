const formHTML = `
  <form id="mortgageCalcForm">
    <div class="calc-form__header">
      <h2 class="calc-form__title">Mortgage Calculator</h2>
      <input type="reset" value="Clear All" />
    </div>
    <div class="calc-form__inputs">
      <label for="mortgageAmount">Mortgage Amount</label>
      <input id="mortgageAmount" type="number" name="mortgageAmount" min="0" required />
      <div class="inputs__mortgage-conditions">
        <label for="mortgageTerm">Mortgage Term</label>
        <input id="mortgageTerm" type="number" name="mortgageTerm" min="0" required />
        <label for="interestRate">Interest Rate</label>
        <input id="interestRate" type="number" name="interestRate" min="0" required />
      </div>
    </div>
    <fieldset class="calc-form__mortgage-types">
      <legend>Mortgage Type</legend>
      <input id="mortgageTypeRepayment" type="radio" name="mortgageTypes" value="repayment" />
      <label for="mortgageTypeRepayment">Repayment</label>
      <input id="mortgageTypeInterestOnly" type="radio" name="mortgageTypes" value="interestOnly" />
      <label for="mortgageTypeInterestOnly">Interest Only</label>
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

    // TODO: add here the function to validate inputs and to make calcs.
    console.log('loaded form');
  });

  htmlElement.innerHTML = '';
  htmlElement.append(formSection);
}
