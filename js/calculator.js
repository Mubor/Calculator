// finding element values and calculating (for calculator page)
function calculate() {
  const isNameCorrect = isCorrect(getElem('name'));
  const isFirstCorrect = isCorrect(getElem('first-num'));
  const isOperCorrect = isCorrect(getElem('operation'));
  const isLastCorrect = isCorrect(getElem('last-num'));

  if (isNameCorrect && isFirstCorrect && isOperCorrect && isLastCorrect) {
    const resultNum = getOperationResult(getValue('first-num'), getValue('last-num'), getValue('operation'));
    displayResult(getValue('name'), resultNum);
  }
}

function getOperationResult(firstNum, lastNum, operation) {
  if (operation === '+') {
    return Number(firstNum) + Number(lastNum);
  }
  if (operation === '-') {
    return firstNum - lastNum;
  }
  if (operation === '*') {
    return firstNum * lastNum;
  }
  if (operation === '/') {
    return firstNum / lastNum;
  }
  if (operation === '^') {
    let result = 1;

    for (let i = 0; i < lastNum; i++) {
      result *= firstNum;
    }

    return result;
  }
}
