const loginButton = document.getElementById('btn-submit');
const loginSection = document.getElementById('login-section');
const moneySection = document.getElementById('money-section');
loginButton.addEventListener('click',function(event){
    loginSection.style.display='none';
    moneySection.style.display='block';
})

const depositButton = document.getElementById('deposit-btn');
const withdrawButton = document.getElementById('withdraw-btn');
function getInputValue(id)
{
    return parseFloat(document.getElementById(id).value);
}
function getValue(targetId)
{
    return parseFloat(document.getElementById(targetId).innerText);
}
function setValue(val,targetId)
{
    document.getElementById(targetId).innerText = val.toFixed(2);
}
function clearInput(id)
{
    document.getElementById(id).value = '';
}
depositButton.addEventListener('click',function(event)
{
    let deposit = getInputValue('deposit-input');
    let newDeposit = getValue('deposit-value') + deposit;
    setValue(newDeposit,'deposit-value');
    let newBalance = getValue('balance-value') + deposit;
    setValue(newBalance,'balance-value');
    clearInput('deposit-input');
})
withdrawButton.addEventListener('click',function(event)
{
    let withdraw = getInputValue('withdraw-input');
    let newWithdraw = getValue('withdraw-value') + withdraw;
    setValue(newWithdraw,'withdraw-value');
    let newBalance = getValue('balance-value') - withdraw;
    setValue(newBalance,'balance-value');
    clearInput('withdraw-input');
})