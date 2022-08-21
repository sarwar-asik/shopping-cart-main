console.log('from pin.js');


function getPin(){
      const pin = generatePin();
      const pinString =pin +'';
      if(pinString.length === 4){
return pin;
      }
      else{
        return getPin();
      }
}

function generatePin(){
        const random = Math.round(Math.random()*10000);
        return random;
    }
    
    document.getElementById("generate-pin").addEventListener('click',function(){
const pin = getPin();
// display pin///
const displayPinField = document.getElementById('display-pin');
displayPinField.value = pin;

    })


// for calculartor /////
document.getElementById("calculator").addEventListener('click',function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById("typed-number");
    const previousTypeNumber =typedNumberField.value;

if(isNaN(number)){

    if(number === 'C'){
        typedNumberField.value = '';
    }
    else if(number === '<'){
        const digit =previousTypeNumber.split('');
        digit.pop();
        const remainingDigit = digit.join('');
        typedNumberField.value = remainingDigit;
    }
}
else{
const newTypedNumber = previousTypeNumber + number;

typedNumberField.value = newTypedNumber;

}
})

// for submit////
document.getElementById("veryfy-pin").addEventListener('click',function(){
const displayPinField =document.getElementById('display-pin');
const currentPin =displayPinField.value;


const typedNumberField =document.getElementById("typed-number");
const typedNumber =typedNumberField.value;

// for success///
const pinSuccessMessage =document.getElementById("pin-success");
// for failed///
const pinFailedMessage =document.getElementById("pin-failed");
if(typedNumber===currentPin){
    pinSuccessMessage.style.display = 'block';
    pinFailedMessage.style.display = 'none';
}
else{
pinFailedMessage.style.display = 'block';
pinSuccessMessage.style.display = 'none';
}
})