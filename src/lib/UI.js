// change style of wrong input
function changeFieldWithMistake(field) {
  field.className = 'error';
  field.setAttribute('title', 'Не правильное значение!');
}

// change style of correct input
function changeFieldWithoutMistake(field) {
  field.className = '';
  field.setAttribute('title', '');
}

// checking string input
function checkString(field) {
  if (field.value === '' || !isNaN(field.value)) {
    changeFieldWithMistake(field);
  } else {
    changeFieldWithoutMistake(field);
  }
}

// checking number input
function checkNumber(field) {
  if (field.value === '' || isNaN(field.value)) {
    changeFieldWithMistake(field);
  } else {
    changeFieldWithoutMistake(field);
  }
}

// check operation input
function checkOperation(field) {
  if (field.value !== '+' && field.value !== '-' && field.value !== '*' && field.value !== '/' && field.value !== '^') {
    changeFieldWithMistake(field);
  } else {
    changeFieldWithoutMistake(field);
  }
}

export default {
  checkString,
  checkNumber,
  checkOperation,
};
