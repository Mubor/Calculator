//getting radio-buttons data and creting objects
function getRadioObj(){
    return {
        "radian":getElem("radian-to-angle"),
        "angle":getElem("angle-to-radian")
    };
}
//translation values
function convert() {
    if(getElem("name").className != "error" && getElem("number").className != "error"){
        getElem("result").innerHTML = createResultString(getResult(getValue("number"), getRadioObj()));
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