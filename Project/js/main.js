
function getValue(id) {
    return document.getElementById(id).value;
}

function getElem(id) {
    return document.getElementById(id);
}

function isCorrect(elem) {
    if (elem.className != "error"){
        return true;
    }
    else {
        return false;
    }
}

function displayResult(name, number) {
    let textHTML = `${name}, результат заданой тобой операции : ${number}`;
    getElem("result").innerHTML = textHTML;
}