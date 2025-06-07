import './style.css';

document.querySelector('#app').innerHTML = `
  <main class="main">
    <section class="calc-form-container">
      <form class="calc-form">
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
    </section>
    <aside class="calc-results">
      <img class="calc-results__initial-img" src="/src/assets/images/illustration-empty.svg" alt="Accountable sheet with a calculator and cash money." /> 
      <div class="calc-results__instructions">
        <h2 class="instructions__title">Results shown here</h2>
        <p class="instructions__text">
          Complete the form and click "calculate repayments" to see what your monthly repayments would be.
        </p>
      </div>
    </aside>
  </main>
  <footer class="footer">
    <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/devJuanS">devJuanS</a>.
    </div>
  </footer>
`;
