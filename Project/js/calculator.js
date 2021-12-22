
//finding element values and calculating (for calculator page)
function calculate() {
    let isNameCorrect = isCorrect(getElem("name"));
    let isFirstCorrect = isCorrect(getElem("first-num"));
    let isOperCorrect = isCorrect(getElem("operation"));
    let isLastCorrect = isCorrect(getElem("last-num"));
    
    if(isNameCorrect && isFirstCorrect && isOperCorrect && isLastCorrect) {
        let resultNum = getOperationResult(getValue("first-num"), getValue("last-num"), getValue("operation"));
        displayResult(getValue("name"), resultNum);
    }
}

function getOperationResult(firstNum, lastNum, operation) {

    if(operation == "+") {
        return Number(firstNum) + Number(lastNum);
    }
    else if(operation == "-") {
        return firstNum - lastNum;
    }
    else if(operation == "*") {
        return firstNum * lastNum;
    }
    else if(operation == "/") {
        return firstNum / lastNum;
    }
    else if(operation == "^") {
        let result = 1;

        for(let i = 0; i<lastNum; i++) {
            result = result * firstNum;
        }

        return result;
    }
}

