// step-2: call a function for input value 
function getInputValue(inputFiledId) {
    const input = document.getElementById(inputFiledId);
    const value = input.value;
    return value;
}


// step-1:add handler in the submit button
document.getElementById("btn-submit").addEventListener("click", function () {

    const email = getInputValue("user-email");
    const password = getInputValue("user-password");

    if (email.includes("@gmail.com") && password.length > 6) {
        window.location.href = 'http://127.0.0.1:5500/index.html';
    } else {
        alert("Please give valid info");
    }
})






