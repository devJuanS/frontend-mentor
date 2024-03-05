const btnSubmit  = document.querySelector('.btn-submit'),
      inputDay   = document.getElementById('birthDay'),
      inputMonth = document.getElementById('birthMonth'),
      inputYear  = document.getElementById('birthYear'),
      numYears   = document.getElementById('years'),
      numMonths  = document.getElementById('months'),
      numDays    = document.getElementById('days'),
      form       = document.getElementById('form');

/**
 * Find if a given year is a leap year in the Gregorian calendar.
 * @param   {Number}  year
 * @returns {Boolean} return true when a year is a leap year
 */
const isLeap = ( year ) => {
  if ( !year ) {
    throw new Error('A value is required');
  }

  return ( year %   4 )                   ? false 
      : !( year % 100 ) && ( year % 400 ) ? false 
      : true
}

/**
 * Verify if the entered day is valid for the month and year given
 * @param {number | string} day 
 * @param {number | string} month 
 * @param {number | string} year 
 * @returns {boolean} 
 */
const isDayValid = (day, month, year) => {
  let regexMonthDay = /^(0?[1-9]|[12][0-9]|3[01])$/i;
  let maxDayinMonth;

  if ( !regexMonthDay.test(day) ) return false;

  if ( +month === 2 ) {
    maxDayinMonth = isLeap(+year) ? 29 : 28;  
  } else {
    maxDayinMonth = ((+month % 7) % 2) === 0 ? 30 : 31;
  }

  return (+day > 0 && +day <= maxDayinMonth);
}

/**
 * Verify only if the date value is a valid date
 * @param {number | string} day 
 * @param {number | string} month 
 * @param {number | string} year 
 * @returns {boolean}
 */
const isDateValid = ( day, month, year ) => {
  
  if ( !day || !month || !year ) {
    throw new Error('All values are required');
  }
  // FIXME: validate every value is into its valid range because the constructor Date carries over when it overflows (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date > Individual date and time component values)
  return !isNaN( new Date(`${ month }/${ day }/${ year }`));
}

/**
 * Validate if a value is entered for each input element
 * @param {HTMLInputElement} inputEL 
 * @returns {boolean} 
 */
const isValueEntered = ( inputEL) => {  
  
  if ( !inputEL.value ) {
    inputEL.parentElement.classList.add('required-value','error-with-input');
    return false;
  }
  inputEL.parentElement.classList.remove('required-value','error-with-input');
  return true;
}


btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  const inputs          = [inputDay, inputMonth, inputYear],
        userDate        = Date.UTC(`${ inputMonth.value }/${ inputDay.value }/${ inputYear.value }`),
        noInputsEntered = !inputs.map( isValueEntered ).every(val => !!val);
  
  
  if (noInputsEntered) {
    e.preventDefault(); // prevent form reload from submitting
    throw new Error('At least one value for day, month or year is missing.');
  } 
  if ( !isDateValid(inputDay.value, inputMonth.value, inputYear.value) ) {
    e.preventDefault(); // prevent form reload from submitting
    inputDay.parentElement.className += !isDayValid(inputDay.value, inputMonth.value, inputYear.value) ? 
                                        ' error-with-input no-valid-day' : '';
    throw new Error('The day values is not valid.');
  }
  if ( userDate > new Date ) {
    e.preventDefault(); // prevent form reload from submitting
    inputs.forEach( input => {
      input.parentElement.classList.add('error-with-input','not-in-the-past');
    });
    throw new Error('The date must be in the past.');
  }
});