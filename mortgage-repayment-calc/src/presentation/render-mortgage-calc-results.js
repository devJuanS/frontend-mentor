import {
  COMPLETED_INSTRUCTIONS,
  EMPTY_INSTRUCTIONS,
  INSTRUCTIONS_IMAGE_INFO,
} from '../lib/constants/constants';
import { formatNumber } from '../lib/helpers/format-number';

let resultsAside;

/**
 * Create an aside element where to show instructions and results.
 * @returns {HTMLElement}
 */
const createResultsAside = () => {
  const resultsAside = document.createElement('aside');
  resultsAside.classList.add('calc-results');

  return resultsAside;
};

/**
 * Create a div element containing the instructions text based on if there are values to show.
 * @param {Boolean} haveValuesToShow Truty when there are values to show.
 * @returns {HTMLDivElement}
 */
const createInstructionsElement = (haveValuesToShow) => {
  const instructions = document.createElement('div');
  const { title, text } = haveValuesToShow
    ? COMPLETED_INSTRUCTIONS
    : EMPTY_INSTRUCTIONS;

  instructions.classList.add('calc-results__instructions');
  instructions.innerHTML = `
    <h2 class="instructions__title">${title}</h2>
    <p class="instructions__text">${text}</p>
  `;

  return instructions;
};

/**
 * Create an article element where to render the result values from calculation.
 * @param {Number} resultValues
 * @returns {HTMLElement}
 */
const createResultCard = ({ monthlyPayment, totalRepayOverTerm }) => {
  const resultCard = document.createElement('article');
  resultCard.classList.add('calc_results__values-wrap');
  resultCard.innerHTML = `
    <h3>Your monthly repayments</h3>
    <p><strong>${formatNumber(monthlyPayment, 2, 'GBP')}</strong></p>
    <h3>Total you'll repay over term</h3>
    <p><strong>${formatNumber(totalRepayOverTerm, 2, 'GBP')}</strong></p>
  `;

  return resultCard;
};

/**
 * Create an image element
 * @returns {HTMLImageElement}
 */
const createInitialImage = (src, alt) => {
  const initialImage = document.createElement('img');
  initialImage.classList.add('calc-results__initial-image');
  initialImage.setAttribute('src', src);
  initialImage.setAttribute('alt', alt);

  return initialImage;
};

/**
 * Render the aside element with the initial instructions or calculation results.
 * @param {HTMLElement} htmlElement Parent element where render the result container element.
 * @param {Object<Number>} resultValues Numeric values to show.
 */
export function renderMortgageCalcResults(htmlElement, resultValues) {
  const haveValuesToShow = resultValues !== undefined;

  resultsAside ||= createResultsAside(); // to remember: evaluate the right operando and assigns to the left if left is falsy.
  resultsAside.innerHTML = '';
  const instructions = createInstructionsElement(haveValuesToShow);

  if (haveValuesToShow) {
    const resultCard = createResultCard({ ...resultValues });
    resultsAside.append(instructions, resultCard);
  } else {
    const initialImage = createInitialImage(
      INSTRUCTIONS_IMAGE_INFO.src,
      INSTRUCTIONS_IMAGE_INFO.alt
    );
    resultsAside.append(initialImage, instructions);
  }

  htmlElement.append(resultsAside);
}
