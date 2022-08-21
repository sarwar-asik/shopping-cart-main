console.log('from  Common.js')


// for total phone////

function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
const currentPhoneTotalString =phoneTotalElement.innerText;
const currentPhoneTotal =parseInt(currentPhoneTotalString);

return currentPhoneTotal;
}

// for get id and set the value or text the id....
function setTextElementValueById(elementId,value){
    const subTotalElement =document.getElementById(elementId);

    subTotalElement.innerText= value;

}

// for Subtotal of phone and case .........
function calculateSubTotal(){
const currentPhoneTotal = getTextElementValueById("phone-total");
const currentCaseTotal = getTextElementValueById("case-total");
const currentSubTotal = currentPhoneTotal+currentCaseTotal;
setTextElementValueById("subTotal-id",currentSubTotal)

// calcualate tax.....

const taxAmmountString = (currentSubTotal *0.25).toFixed(2);
const taxAmmount =parseFloat(taxAmmountString);
setTextElementValueById("tax-ammount",taxAmmount);

const finalCost =currentSubTotal+ taxAmmount;
setTextElementValueById("final-total",finalCost);
}
