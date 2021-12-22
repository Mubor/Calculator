
function getValue(id) {
    return document.getElementById(id).value;
}

function getElem(id) {
    return document.getElementById(id);
}

function createResultString(result) {
    debugger;
    return `${getValue("name")}, результат заданой тобой операции : ${result}`;
}