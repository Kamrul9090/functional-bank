/*

1. add withdraw button event handler
2.get withdraw amount
3.get withdraw total amount
4.calculate withsraw amount
5.add total withdraw amount with the blance 

*/


document.getElementById("btn-withdraw").addEventListener("click", function () {
    const withdrawAmount = getInputFieldValueById("user-withdraw");

    const currentWithdrawAmount = getElementValueById("withdraw-total");


    const blance = getElementValueById("blance-total");

    if (withdrawAmount > blance) {
        alert("You have enought money");
    } else {
        const totalWithdraw = currentWithdrawAmount + withdrawAmount;
        setElementValueById("withdraw-total", totalWithdraw);
        const currentTotalBlance = blance - withdrawAmount;
        setElementValueById("blance-total", currentTotalBlance);
    }

})