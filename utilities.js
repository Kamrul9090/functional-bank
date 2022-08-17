//step-1: call a fiunction for input value
function getInputFieldValueById(inputId) {
    const inputFiled = document.getElementById(inputId);
    const inputFieldValueString = inputFiled.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputFiled.value = '';
    if (inputFieldValue < 0) {
        alert("please give valid number")
        return getElementValueById();

    } else if (isNaN(inputFieldValue)) {
        alert("please give your amount");
        return getElementValueById();
    }
    else {
        return inputFieldValue;
    }

}

function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementTextValue = element.innerText;
    const elementTextNumber = parseFloat(elementTextValue);
    return elementTextNumber;
}

function setElementValueById(elementId, newValue) {
    const TextElement = document.getElementById(elementId);
    TextElement.innerText = newValue;
}