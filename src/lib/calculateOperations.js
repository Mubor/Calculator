export default function getOperationResult(firstNum, lastNum, operation) {
  let res = 1;

  if (operation === '+') {
    res = Number(firstNum) + Number(lastNum);
  }
  if (operation === '-') {
    res = firstNum - lastNum;
  }
  if (operation === '*') {
    res = firstNum * lastNum;
  }
  if (operation === '/') {
    res = firstNum / lastNum;
  }
  if (operation === '^') {
    for (let i = 0; i < lastNum; i += 1) {
      res *= firstNum;
    }
  }

  return res;
}
