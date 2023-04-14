// Grabs the Interactive Card details //

const headerNum = document.getElementById('cardnum');
const headerName = document.getElementById('cardname');
const headerMonth = document.getElementById('cardmonth');
const headerYear = document.getElementById('cardyear');
const headerSecure = document.getElementById('cardsecure');

// Grabs Elements from the Form //

const form = document.querySelector('form');
const cardNum = form['ccnum'];
const cardName = form['ccname'];
const cardMonth = form['ccmonth'];
const cardYear = form['ccyear'];
const cardSecure = form['ccvc'];
const errorMess = document.getElementsByClassName('error');

// Buttons //

const submit = document.getElementById('submit');
const cont = document.getElementById('continue');

// Thank You Screen //

const completeForm = document.getElementById('thankyou');

function format(e) {
    return e.toString().replace(/\d{4}(?=.)/g, '$& ');
}

format(cardNum.value);

function cardHeader(i) {
    headerNum.innerText = format(cardNum.value);
}

function addName(i) {
    headerName.innerText = cardName.value;
}

function addMonth(i) {
    headerMonth.innerText = cardMonth.value;
}

function addYear(i) {
    headerYear.innerText = cardYear.value;
}

function addCvc(i) {
    headerSecure.innerText = cardSecure.value;
}

cardNum.addEventListener('keyup', cardHeader);
cardName.addEventListener('keyup', addName);
cardMonth.addEventListener('keyup', addMonth);
cardYear.addEventListener('keyup', addYear);
cardSecure.addEventListener('keyup', addCvc);

submit.addEventListener('click', e => {
    e.preventDefault();

    inputError(cardName);
    numbersOnly(cardMonth);
    numbersOnly(cardNum);
    numbersOnly(cardYear);
    numbersOnly(cardSecure);

    if (cardName.value && cardNum.value && cardMonth.value && cardYear.value && cardSecure.value) {
        form.style.opacity = 0;
        form.style.zIndex = 0;
        completeForm.style.opacity = 1;
    }
});


function inputError(v) {
    if (!v.value) {
        v.parentNode.classList.add('err');
        return false;
    } else {
        v.parentNode.classList.remove('err');
        return true;
    }
}


function numbersOnly(v)
{
  var n = /^\d+$/;
  if(v.value.match(n))
        {
            v.parentNode.classList.remove('err');
            return true;
        }
      else
        {
            v.parentNode.classList.add('err');
            return false;
        }
}