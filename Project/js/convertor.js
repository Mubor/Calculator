//getting radio-buttons data and creting objects
function getRadioObj(){
    return {
        "radian":getElem("radian-to-angle"),
        "angle":getElem("angle-to-radian")
    };
}
//translation values
function convert() {
    let isNameCorrect = isCorrect(getElem("name"));
    let isNumCorrect = isCorrect(getElem("number"));

    if(isNameCorrect && isNumCorrect){
        let resultNum = getResult(getValue("number"), getRadioObj());
        displayResult(getValue("name"), resultNum);
    }
}

//depending on the selected option returns result of convertion
function getResult (num, mode) {
    if(mode.radian.checked) {
        return getToAngleTranslation(num);
    }
    else {
        return getToRadianTranslation(num);
    }
}

function getToAngleTranslation(num) {
    return num * (180/3.1416);
}

function getToRadianTranslation(num) {
    return num * (3.1416/180);
}