import getOperationResult from './lib/calculateOperations';
import dom from './lib/domHandlers';
import UIdata from './lib/UI';
import isCorrect from './lib/isCorrect';

const { getElem, getValue, displayResult } = dom;
const { checkString, checkNumber, checkOperation } = UIdata;

function calculate() {
  const isNameCorrect = isCorrect(getElem('name'));
  const isFirstCorrect = isCorrect(getElem('first-num'));
  const isOperCorrect = isCorrect(getElem('operation'));
  const isLastCorrect = isCorrect(getElem('last-num'));

  if (isNameCorrect && isFirstCorrect && isOperCorrect && isLastCorrect) {
    const resultNum = getOperationResult({ firstNum: getValue('first-num'), lastNum: getValue('last-num'), operation: getValue('operation') });

    displayResult({ name: getValue('name'), number: resultNum });
  }
}

// Event handlers
const name = getElem('name');
const first = getElem('first-num');
const last = getElem('last-num');
const operation = getElem('operation');
const button = getElem('button');

name.addEventListener('keyup', checkString.bind(this, name));
first.addEventListener('keyup', checkNumber.bind(this, first));
last.addEventListener('keyup', checkNumber.bind(this, last));
operation.addEventListener('keyup', checkOperation.bind(this, operation));
button.addEventListener('click', calculate);
