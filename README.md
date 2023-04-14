# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built with](#built-with)
  - [Takeaways](#Takeaways)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

<img width="1522" alt="Screen Shot interactive card" src="https://user-images.githubusercontent.com/42332056/232140973-127ab0b9-a178-4fb2-bcb8-a64538206c7d.png">

Above is a preview of the web page that allows users to input and display information about a credit card. The form contains several fields where users can enter their credit card details, such as the cardholder's name, card number, expiration date, and CVV.

### Links

- Solution URL: [Github](https://github.com/miabreu/Interactive-Card-Detail-Form)
- Live Site URL: [Link](https://stellar-pavlova-91e74d.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS 
- Mobile-first workflow
- Javascript


### Takeaways


```
const flipCard = document.querySelector(".flip-card");
flipCard.addEventListener("click", function() {
  flipCard.classList.toggle("is-flipped");
});
```
This code adds an event listener to a HTML element with the class name "flip-card". When this element is clicked, it triggers the toggle() method to switch between two different CSS classes, which triggers a card flip animation. I find this code interesting because it demonstrates the use of event listeners and CSS classes to create interactive animations on a webpage.

### Continued Development

To further develop this website, I can add validation to the credit card form by validating user input on the client-side and server-side to ensure that credit card information is entered correctly and to prevent security vulnerabilities. To do this I can use JavaScript functions that validate the user's input, such as checking if the credit card number is valid or if the expiration date is in the future, add event listeners to the input fields to trigger the validation functions when the user interacts with the form, provide feedback to the user when their input is not valid, and prevent the form from being submitted to the server if the user's input is not valid:

```
const creditCardNumberInput = document.getElementById("credit-card-number");
const expirationDateInput = document.getElementById("expiration-date");

creditCardNumberInput.addEventListener("blur", validateCreditCardNumber);
expirationDateInput.addEventListener("blur", validateExpirationDate);

function validateCreditCardNumber(event) {
  const creditCardNumber = event.target.value;
  if (!isValidCreditCardNumber(creditCardNumber)) {
    event.target.classList.add("is-invalid");
    event.preventDefault();
  } else {
    event.target.classList.remove("is-invalid");
  }
}

function validateExpirationDate(event) {
  const expirationDate = new Date(event.target.value);
  if (!isValidExpirationDate(expirationDate)) {
    event.target.classList.add("is-invalid");
    event.preventDefault();
  } else {
    event.target.classList.remove("is-invalid");
  }
}

function isValidCreditCardNumber(creditCardNumber) {
  // Add code to validate the credit card number here
}

function isValidExpirationDate(expirationDate) {
  // Add code to validate the expiration date here
}
```
In this code, the validateCreditCardNumber() and validateExpirationDate() functions validate the user's input for the credit card number and expiration date fields, respectively. The isValidCreditCardNumber() and isValidExpirationDate() functions contain the logic to validate the input.

When the user interacts with the form, the event listeners trigger the corresponding validation functions. If the user's input is not valid, the code adds the CSS class is-invalid to the input field and prevents the form from being submitted. If the input is valid, the CSS class is removed and the form can be submitted.
