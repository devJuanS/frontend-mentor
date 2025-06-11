import { REQUIRED_CLASS_STATUS } from '../constants/constants';

/**
 * Validate if every input has a value otherwise it add the class to show error in the input element.
 * @param {NodeList} inputs HTML input elements.
 * @return {Boolean} true when all inputs have a value.
 */
const validateNumericInputs = (inputs) => {
  let hasEveryInputWithValue = true;

  for (const element of inputs) {
    if (!element.value) {
      element.classList.add(REQUIRED_CLASS_STATUS);
      hasEveryInputWithValue = false;
    }
  }
  return hasEveryInputWithValue;
};

/**
 * Validate if an option has been checked otherwise it add the class to show error in the input element.
 * @param {NodeList} group HTML input type radios.
 * @return {Boolean} true when an option is checked.
 */
const validateOptionsGroup = (group) => {
  const checkedAnOption = Array.from(group).some(
    (option) => option.checked === true
  );

  if (!checkedAnOption) {
    group[0]?.parentElement.classList.add(REQUIRED_CLASS_STATUS);
  }

  return checkedAnOption;
};

/**
 *
 * @param {String} elementId
 * @returns {Number} input value.
 */
const getInputValue = (elementId) => {
  const input = document.getElementById(elementId);
  return Number(input.value);
};

/**
 *
 * @param {NodeListOf<Element>} optionsList List of options.
 * @returns {String} Mortgage type selected.
 */
const getMortgageType = (optionsList) => {
  let mortgageType = '';

  for (const option of optionsList) {
    if (option.checked) {
      mortgageType = option.value;
    }
  }
  return mortgageType;
};

/**
 * Validate the input data in form and add the class to notify the error in the form.
 * @param {HTMLFormElement} form
 * @returns
 */
export function validateCalcForm(form) {
  const numericGroup = form.querySelectorAll('.input--numeric');
  const mortgageTypeOptions = form.querySelectorAll(
    'input[name="mortgageTypes"]'
  );

  const validNumericIntpus = validateNumericInputs(numericGroup);
  const checkedAnOption = validateOptionsGroup(mortgageTypeOptions);

  const formData = {
    mortgageAmount: getInputValue('mortgageAmount'),
    mortgageTerm: getInputValue('mortgageTerm'),
    interestRate: getInputValue('interestRate'),
    mortgageType: getMortgageType(mortgageTypeOptions),
  };

  return validNumericIntpus && checkedAnOption ? formData : null;
}
