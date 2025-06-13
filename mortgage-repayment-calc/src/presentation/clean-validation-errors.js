/**
 * Remove the class in elements showing validation error status.
 * @param {string} errorClass Name of class selector for inputs with validation error status.
 */
export function cleanValidationErrors(errorClass) {
  const elementsInError = document.querySelectorAll('.' + errorClass);

  for (const element of elementsInError) {
    element.classList.remove(errorClass);
  }
}
