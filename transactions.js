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
function clearInput(id)
{
    document.getElementById(id).value = '';
}
depositButton.addEventListener('click',function(event)
{
    let deposit = getInputValue('deposit-input');
    setValue(deposit,'deposit-value');
    setValue(deposit,'balance-value');
})
withdrawButton.addEventListener('click',function(event)
{
    let withdraw = getInputValue('withdraw-input');
    setValue(withdraw,'withdraw-value');
    setValue(-withdraw,'balance-value');
})