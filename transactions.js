const loginButton = document.getElementById('btn-submit');
const loginSection = document.getElementById('login-section');
const moneySection = document.getElementById('money-section');
loginButton.addEventListener('click',function(event){
    loginSection.style.display='none';
    moneySection.style.display='block';
})
const depositButton = document.getElementById('deposit-btn');
const withdrawButton = document.getElementById('withdraw-btn');
const depositInput = document.getElementById('deposit-input');
const withdrawInput = document.getElementById('withdraw-input');
const depositValue = document.getElementById('deposit-value');
const withdrawValue = document.getElementById('withdraw-value');
const banalceValue = document.getElementById('balance-value')
depositButton.addEventListener('click',function(event){
    var depositAmount = parseFloat(document.getElementById('deposit-input').value);
    var newDeposit = parseFloat(depositValue.innerText) + depositAmount;
    depositValue.innerText = newDeposit;
    var newBalance = parseFloat(banalceValue.innerText) + depositAmount;
    banalceValue.innerText = newBalance;
    depositInput.value = "";
})
withdrawButton.addEventListener('click',function(event){
    var withdrawAmount = parseFloat(document.getElementById('withdraw-input').value);
    var newWithdraw = parseFloat(withdrawValue.innerText) + withdrawAmount;
    withdrawValue.innerText = newWithdraw;
    var newBalance = parseFloat(banalceValue.innerText) - withdrawAmount;
    banalceValue.innerText = newBalance;
    withdrawInput.value = "";   
})