//handle deposite button event
document.getElementById('deposit-btn').addEventListener('click', function(){
    
    // get the amount deposited 
const depositInput = document.getElementById('deposit-input');
const newDepositAmountText = depositInput.value;
const newDepositAmount = parseFloat(newDepositAmountText);
const depositTotal = document.getElementById('deposit-total');
const previousDepositText = depositTotal.innerText;
const previousDepositAmount = parseFloat(previousDepositText);
 const newDepositTotal = previousDepositAmount + newDepositAmount;
depositTotal.innerText = newDepositTotal;
//update account balance
const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
previousBalanceTotal = parseFloat(balanceTotalText);
const newBalanceTotal = previousBalanceTotal + newDepositAmount;
balanceTotal.innerText = newBalanceTotal;

// clear the deposit input field 
depositInput.value = '';



});


