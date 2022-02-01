function getValue(id) {
  return document.getElementById(id).value;
}

function getElem(id) {
  return document.getElementById(id);
}

function isCorrect(elem) {
  if (elem.className != 'error') {
    return true;
  }

  return false;
}

function displayResult(name, number) {
  const textHTML = `${name}, результат заданой тобой операции : ${number}`;
  getElem('result').innerHTML = textHTML;
}
