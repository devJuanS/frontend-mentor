const asideCalcResult = `
  <aside class="calc-results">
    <img class="calc-results__initial-img" src="/src/assets/images/illustration-empty.svg" alt="Accountable sheet with a calculator and cash money." /> 
    <div class="calc-results__instructions">
      <h2 class="instructions__title">Results shown here</h2>
      <p class="instructions__text">
        Complete the form and click "calculate repayments" to see what your monthly repayments would be.
      </p>
    </div>
  </aside>
`;

export function renderMortgageCalcResults(htmlElement, resultValues) {
  const { monthlyPayment, totalRepayOverTerm } = resultValues;
  htmlElement.append(
    `Result\n - Monthly repayments: $ ${monthlyPayment}.\n - Total over the term: $ ${totalRepayOverTerm}`
  );
}
