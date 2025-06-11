export function calculateRepayment({
  mortgageAmount,
  mortgageTerm,
  interestRate,
  mortgageType,
}) {
  const monthlyPayment =
    mortgageType === 'repayment'
      ? getMonthlyRepayment(mortgageAmount, mortgageTerm, interestRate)
      : getMonthlyInterestOnly(mortgageAmount, interestRate);

  const totalRepayOverTerm =
    monthlyPayment * 12 * mortgageTerm +
    (mortgageType === 'interest' && mortgageAmount);

  // console.log(
  //   `Month repayment: $ ${monthlyPayment}\nTotal: $ ${totalRepayOverTerm} for a mortgage ${mortgageType}.`
  // );
  return { monthlyPayment, totalRepayOverTerm };
}

const getMonthlyInterestOnly = (mortgageAmount, interestRate) => {
  const monthlyRate = interestRate / 100 / 12;
  /*
    Interest only: repay the interest. Capital paid off at end of term.
    M = P * r
  
    M: Mortgage payment (monthly) 
    P: Principal (loan amount)
    r: Monthly interest rate (annual rate divided by 12) 
  */
  return mortgageAmount * monthlyRate;
};

const getMonthlyRepayment = (mortgageAmount, mortgageTerm, interestRate) => {
  // becuase of an zero interest rate cause an erro of division by zero.
  if (!interestRate) {
    throw new Error('The interest rate must be a value greater than 0.');
  }

  const monthlyRate = interestRate / 100 / 12;
  const termInMonths = mortgageTerm * 12;
  /*
    Repayment: repay capital and interest together.
    M = P [r(1+r)^n] / [(1+r)^n – 1]
  
    M: Mortgage payment (monthly) 
    P: Principal (loan amount)
    r: Monthly interest rate (annual rate divided by 12) 
    n: Total number of monthly payments (loan term length multiplied by 12)
    */
  return (
    (mortgageAmount * (monthlyRate * Math.pow(1 + monthlyRate, termInMonths))) /
    (Math.pow(1 + monthlyRate, termInMonths) - 1)
  );
};
