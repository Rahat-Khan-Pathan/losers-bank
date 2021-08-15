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
    const ans = parseFloat(document.getElementById(id).value);
    clearInput(id);
    return ans;
}
function getValue(targetId)
{
    return  parseFloat(document.getElementById(targetId).innerText);
}
function setValue(val,targetId)
{
    let newValue = getValue(targetId) + val;
    document.getElementById(targetId).innerText = newValue.toFixed(2);
}
function check(val)
{
    if(val>0) return true;
    else
    {
        alert("Please give valid amount of money!");
        return false;
    }
}
function clearInput(id)
{
    document.getElementById(id).value = '';
}
depositButton.addEventListener('click',function(event)
{
    let deposit = getInputValue('deposit-input');
    if(check(deposit))
    {
        setValue(deposit,'deposit-value');
        setValue(deposit,'balance-value');
    }
})
withdrawButton.addEventListener('click',function(event)
{
    let withdraw = getInputValue('withdraw-input');
    const balance = getValue('balance-value');
    if(balance < withdraw)
    {
        alert("Not enough money!!")
    }
    if(check(withdraw) && balance >= withdraw)
    {
        setValue(withdraw,'withdraw-value');
        setValue(-withdraw,'balance-value');
    }
})