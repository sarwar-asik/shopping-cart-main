console.log('Hi!  phone.js');


// <!-- button --1 -->
// <!-- "btn-phone-plus"  -->
// <!-- "phone-number-field" -->
// <!-- "btn-phone-minus" -->
/* <h5>$ <span id="phone-total">1219 */
// "subTotal-id">
// "tax-ammount"
// "final-total"

function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById("phone-number-field");
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;

if(isIncrease === true){
    newPhoneNumber = previousPhoneNumber+1;
}
else{
    newPhoneNumber = previousPhoneNumber -1 ;
}
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}


// function for total price///
function updatePhoneTotalPrice(newPhoneNumberPara){
const phoneTotalPrice = newPhoneNumberPara*1200;
const phoneTotalElement= document.getElementById("phone-total");
phoneTotalElement.innerText = phoneTotalPrice;

}


// for plus button//
document.getElementById("btn-phone-plus").addEventListener('click',function(){
const newPhoneNumber = updatePhoneNumber(true);

updatePhoneTotalPrice(newPhoneNumber);

calculateSubTotal()

})

// for minus button ////
document.getElementById('btn-phone-minus').addEventListener('click',function(){
// console.log('yes............')
const  newPhoneNumber = updatePhoneNumber(false);
updatePhoneTotalPrice(newPhoneNumber);

calculateSubTotal();
})
