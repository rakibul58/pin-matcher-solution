function generatePin()
{
    const randomNumber = Math.round(Math.random()*9000+999);
    return randomNumber;
}

document.getElementById('generate-btn').addEventListener('click' , function(){
    const generatedPin = generatePin();
    const pinDisplayField = document.getElementById('pin-display-field');
    pinDisplayField.value = generatedPin;
})

function getInput(elementId)
{
    const InputFild = document.getElementById(elementId);
    return InputFild.value;
}

document.getElementById('calculator').addEventListener('click' , function(event){
    const typedNumber = event.target;
    const typedNumberString = typedNumber.innerText;
    const displayFild = document.getElementById('user-display');
    let displayFildString = displayFild.value;
    if(!isNaN(typedNumberString)){
        displayFildString = displayFild.value + typedNumberString;
        displayFild.value = displayFildString;
    }
    else if(typedNumberString == 'C')
    {
        displayFild.value = '';
    }
    else if(typedNumberString == '<')
    {
        const displayFieldArray = displayFildString.split('');
        displayFieldArray.pop();
        const displayFieldNewString = displayFieldArray.join('');
        displayFild.value = displayFieldNewString;
    }
    
})


document.getElementById('match-btn').addEventListener('click' , function(){

    const userInput = getInput('user-display');
    const pinNumber = getInput('pin-display-field');
    const posMsgElement = document.getElementById('positive-msg');
    const negMsgElement = document.getElementById('negative-msg');
    if(userInput === pinNumber)
    {
        negMsgElement.style.display = 'none';
        posMsgElement.style.display = 'block';
    }
    else
    {
        posMsgElement.style.display = 'none';
        negMsgElement.style.display = 'block';
    }

})