function getOperationResult(firstNum, lastNum, operation) {

    let result = 1;

    if(operation == "+") {
        return firstNum + lastNum;
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
        for(let i = 0; i<lastNum; i++) {
            result = result * firstNum;
        }
        return result;
    }
    else {
        alert("Что-то пошло не так! Проверьте значения.")
    }
}

function getToAngleTranslation(num) {
    return num * (180/3.1416);
}

function getToRadianTranslation(num) {
    return num * (3.1416/180);
}
