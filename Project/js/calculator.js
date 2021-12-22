
//finding element values and calculating (for calculator page)
function calculate() {
    if(getElem("name").className != "error" && getElem("first-num").className != "error" && getElem("last-num").className != "error" && getElem("operation").className != "error") {
        document.getElementById("result").innerHTML = createResultString(getOperationResult(getValue("first-num"), getValue("last-num"), getValue("operation")));
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

