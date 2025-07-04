# Frontend Mentor - Mortgage Repayments Calculator solution

This is a solution to the [Mortgage repayments calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73) using Vanilla JavaScript to improve my skills in the web development fundamentals.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Tasks on development process](#tasks-on-development-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Input mortgage information and see monthly repayment and total repayment amounts after submitting the form.
- See form validation messages if any field is incomplete.
- Complete the form only using their keyboard.
- View the optimal layout for the interface depending on their device's screen size.
- See hover and focus states for all interactive elements on the page.

### Screenshot

- Desktop screenshot

  <img src="./screenshot/screenshot-1440px.png" width="80%">

- Mobile screenshot

  <img src="./screenshot/screenshot-375px.png" width="30%">

### Links

- Solution URL: [https://github.com/devJuanS/frontend-mentor/tree/main/mortgage-repayment-calc](https://github.com/devJuanS/frontend-mentor/tree/main/mortgage-repayment-calc)
- Live Site URL: [https://mortgage-calc-fm.netlify.app/](https://mortgage-calc-fm.netlify.app/)

[👆🏼Table of contents](#table-of-contents)

## My process

### Tasks on development process

- [x] Render the form to enter information for calculation.
- [x] Validate the form inputs.
- [x] Calculate the monthly repayment and total repayment amounts with valid values.
- [x] Show errors messages for incomplete fields.
- [x] Render the results of calculation.
- [x] Add styles.
- [x] Show values in mortgage amount input with comma thousands format (ie: 300,000).

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- Vanilla JavaScript
- JavaScript modules + Vite.js

### What I learned

- How to apply opacity only to `background-color` in an element when the color value is defined with variables:
  ```css
  background-color: hsl(from var(--color-primary) h s l / 0.3);
  ```
  An opacity of `0.3` was applied there.
- How to validate input values in the `keyup` event based on the entered key. This, together with the use of Regular Expressions, was possible to validate the user input values to perform the calculations properly.
- How easy is to fit the styles to designs using relative measurements like `em` for spaces, font sizes and dimensions.

[👆🏼Table of contents](#table-of-contents)

## Author

- GitHub - [devJuanS](https://github.com/devJuanS)
- Frontend Mentor - [@devJuanS](https://www.frontendmentor.io/profile/devJuanS)

## Acknowledgments

Thanks to [Alan Hartstein](https://www.nerdwallet.com/au/author/alan-hartstein) and [Georgia Rose](https://www.nerdwallet.com/au/author/georgia-rose) by their article [How to Calculate Mortgage Repayments](https://www.nerdwallet.com/au/home-loans/how-mortgage-repayments-work) because it helped me to clarify the mathematics to calculate the repayment fees. Furthermore, the application [Mortgage calculator](https://tools.moneyhelper.org.uk/en/mortgage-calculator) by [MoneyHelper](https://moneyhelper.org.uk/) was useful to understand better the meaning of the mortgage type and to compare the calculator results.

Some solutions where achived thanks to the documentation on [MDN](https://developer.mozilla.org/en-US/), among them are the function `removeLastDot` and how to add opacity to a color when its value is defined in a variable.

[👆🏼Table of contents](#table-of-contents)
