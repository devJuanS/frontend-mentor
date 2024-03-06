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
 * Verify only if the date value is a valid date
 * @param {number | string} day 
 * @param {number | string} month 
 * @param {number | string} year 
 * @returns {boolean}
 */
const isDateValid = ( day, month, year ) => {
  
  if ( !day || !month || !year ) {
    console.error('All values are required.');
    return false;
  }
  if ( isNaN( new Date(`${ month }/${ day }/${ year }`)) ) {
    console.error('The given date is not valid.');
    return false;
  }

  return ( isDayValid(day, month, year) )
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

/**
 * 
 * @param {date} birthDate 
 * @returns {Object <number>} age in years, months and days
 */
const getAgeInYearsMonthsDays = ( birthDate ) => {
  const currentDate    = new Date();

  const diffInDays   =  ( currentDate.getDate() - birthDate.getDate() );
  const diffInMonths =  ( currentDate.getMonth() - birthDate.getMonth() )
                      - ( diffInDays < 0 ? 1 : 0 );

  const priorMonthDate    = new Date(substractMonths( currentDate, Math.abs(diffInMonths) ));
  const priorMonthMaxDays = getMaxDaysInMonth( priorMonthDate.getMonth() + 1 , priorMonthDate.getFullYear() );
  const ageInDays         = ( diffInDays < 0  ? priorMonthMaxDays : 0 ) + diffInDays;

  const ageInMonths  = diffInMonths + ( diffInMonths < 0 ? 12 : 0 ); 
        
  const ageInYears   =   ( currentDate.getFullYear() - birthDate.getFullYear() )
                       - ( diffInMonths < 0 ? 1 : 0 );
                      
  return {ageInYears, ageInMonths, ageInDays};
}

/**
 * 
 * @param {date} date 
 * @param {number | string} months 
 * @returns {date}
 */
const substractMonths = (date, months) => {
  return date.setMonth(date.getMonth() - months);
}

/**
 * 
 * @param {number | string} month 
 * @param {number | string} year 
 * @returns {number}
 */
const getMaxDaysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
}

/**
 * 
 * @param {Object <number>} ageInYearsMonthsDays 
 */
function renderAge({ageInYears, ageInMonths, ageInDays}) {
  const yearsSpan  = document.getElementById('years'),
        monthsSpan = document.getElementById('months'),
        daysSpan   = document.getElementById('days');

  yearsSpan.textContent  = ageInYears;
  monthsSpan.textContent = ageInMonths;
  daysSpan.textContent   = ageInDays;
}

// Listeners
btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  const inputs          = [inputDay, inputMonth, inputYear],
        noInputsEntered = !inputs.map( isValueEntered ).every(val => !!val);
  
  // 1. validate if some values is missed
  if (noInputsEntered) {
    e.preventDefault(); // prevent form reload from submitting
    throw new Error('At least one value for day, month or year is missing.');
  }
  // 2. validate if the date is not valid value
  if ( !isDateValid(inputDay.value, inputMonth.value, inputYear.value) ) {
    e.preventDefault(); // prevent form reload from submitting
    inputDay.parentElement.className += !isDayValid(inputDay.value, inputMonth.value, inputYear.value) ? 
                                        ' error-with-input no-valid-day' : '';
    throw new Error('The day values is not valid.');
  }
  // 3. validate if the date is in the future
  const userDate = new Date(`${ inputMonth.value }/${ inputDay.value }/${ inputYear.value }`);
  if ( userDate > new Date ) {
    e.preventDefault(); // prevent form reload from submitting
    inputs.forEach( input => {
      input.parentElement.classList.add('error-with-input','not-in-the-past');
    });
    throw new Error('The date must be in the past.');
  }
  
  const ageInYearsMonthsDays = getAgeInYearsMonthsDays(userDate);
  renderAge(ageInYearsMonthsDays);
  
});