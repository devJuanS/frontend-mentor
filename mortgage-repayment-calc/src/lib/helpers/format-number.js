import { CURRENCY_LOCALES } from '../constants/currency-locales';

/**
 * Format a number based on the options entered by user.
 * @param {Number} number value to format.
 * @param {Number} digits maximum number of decimals.
 * @param {string} currency the ISO currency code.
 * @returns {string}
 */
export function formatNumber(number, digits = 0, currency = 'default') {
  const locale = JSON.parse(JSON.stringify(CURRENCY_LOCALES[currency]));
  locale.options.maximumFractionDigits = digits;

  return Intl.NumberFormat(locale.zone, locale.options).format(number);
}
