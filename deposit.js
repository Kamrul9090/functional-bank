document.getElementById("btn-deposit").addEventListener("click", function () {

    // get deposit value by id
    const newDepositAmount = getInputFieldValueById("user-deposit");
    // get deposit amount by id
    const currentDepositAmount = getElementValueById("deposit-total");
    // calculate total deposit

    const newDepositTotal = currentDepositAmount + newDepositAmount;
    // set deposit total value
    setElementValueById("deposit-total", newDepositTotal);
    //get blance amount by id
    const currentBlance = getElementValueById("blance-total");
    const totalBlance = currentBlance + newDepositAmount;
    setElementValueById("blance-total", totalBlance);
})