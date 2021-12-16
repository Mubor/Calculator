
//finding element values and calculating (for calculator page)
function setVariablesCalc() {
    
    //getting vars
    let name = document.getElementById("name").value;
    let firstNumber = document.getElementById("first-num").value;
    let operation = document.getElementById("operation").value;
    let lastNumber = document.getElementById("last-num").value;

    if (name != "" && firstNumber != "" && operation != "" && lastNumber != "")
    {
        //calculating result
        let result = getOperationResult(firstNumber, lastNumber, operation);

        //making string for message
        let text = `${name}, результат заданой тобой операции : ${result}`;

        document.getElementById("result").innerHTML = text;
    }
}


//getting radio-buttons data and creting objects
function getRadioObj() {
    let radio = {
        "radian":document.getElementById("radian-to-angle"),
        "angle":document.getElementById("angle-to-radian")
    }
    return radio;
}

//change placeholder string, when the mode(radio-button) have changed
function changePlaceholder () {
    let mode = getRadioObj();
    let inputString = document.getElementById("number");

    if(mode.radian.checked) {
        inputString.setAttribute("placeholder", "Введите радианы");
    }
    else {
        document.getElementById("number").setAttribute("placeholder", "Введите угол");
    }
}

//translation values
function translateValue() {
    let mode = getRadioObj();
    let number = document.getElementById("number").value;
    let name = document.getElementById("name").value;
    let result;
    let text;

    if(mode.radian.checked) {
        result = getToAngleTranslation(number);
        text = `${name}, ${number} радиан - это ${result} градусов.`
    }
    else {
        result = getToRadianTranslation(number);
        text = `${name}, ${number} градусов - это ${result} радиан.`
    }

    document.getElementById("result").innerHTML = text;
}

