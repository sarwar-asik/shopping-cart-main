// id="case-number-field"       <button id="btn-case-plus"    id="btn-case-minus"  
// id="case-total" 
console.log('Hi! from shoping.js')





function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById("case-number-field");
    const caseNumberString = caseNumberField.value;
    const  previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;

if(isIncrease === true){
    newCaseNumber = previousCaseNumber+1;
}
else{
    newCaseNumber = previousCaseNumber-1;
}

    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}
//   close  function  ////

// for price function/////
function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice =newCaseNumber*50;

    const caseTotalElement =document.getElementById("case-total");
    caseTotalElement.innerText = caseTotalPrice;

}

document.getElementById("btn-case-plus").addEventListener('click',function(){
const newCaseNumber = updateCaseNumber(true);
updateCaseTotalPrice(newCaseNumber);
calculateSubTotal()
})
// for minus button ....../////
document.getElementById("btn-case-minus").addEventListener('click',function(){
 const newCaseNumber = updateCaseNumber(false);
updateCaseTotalPrice(newCaseNumber);
calculateSubTotal()

})