//change placeholder string, when the mode(radio-button) have changed
function changePlaceholder () {
    let inputString = getElem("number");

    if(getRadioObj().radian.checked) {
        inputString.setAttribute("placeholder", "Введите радианы");
    }
    else {
        inputString.setAttribute("placeholder", "Введите угол");
    }
}

// checking string input
function checkString(field) {
    if (field.value == "" || !isNaN(field.value)) {
        changeFieldWithMistake(field)
    }
    else {
        changeFieldWithoutMistake(field);
    }
}

//checking number input
function checkNumber(field) {
    if (field.value == "" || isNaN(field.value)) {
       changeFieldWithMistake(field)
    }
    else {
        changeFieldWithoutMistake(field);
    }
}

//check operation input
function checkOperation(field) {
    if(field.value != "+" && field.value != "-" && field.value != "*" && field.value != "/" && field.value != "^") {
        changeFieldWithMistake(field);
    }
    else {
        changeFieldWithoutMistake(field);
    }
}

// change style of wrong input
function changeFieldWithMistake(field) {
    field.className = "error";
    field.setAttribute("title", "Не правильное значение!");
}

//change style of correct input
function changeFieldWithoutMistake(field) {
    field.className = "";
    field.setAttribute("title", "");
}