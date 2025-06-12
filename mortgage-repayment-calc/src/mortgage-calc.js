import { renderMortgageCalcForm } from './presentation/render-mortgage-calc-form';
import { renderMortgageCalcResults } from './presentation/render-mortgage-calc-results';

/**
 *
 * @param {HTMLElement} htmlElement Element where render the mortgage calculator app.
 */
export function MortgageCalc(htmlElement) {
  renderMortgageCalcForm(htmlElement);
  renderMortgageCalcResults(htmlElement);
}
