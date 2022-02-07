function getElem(id) {
  return document.getElementById(id);
}

function getValue(id) {
  return document.getElementById(id).value;
}

function displayResult({ name, number }) {
  const textHTML = `${name}, результат заданой тобой операции : ${number}`;
  getElem('result').innerHTML = textHTML;
}

export default {
  getElem,
  getValue,
  displayResult,
};
