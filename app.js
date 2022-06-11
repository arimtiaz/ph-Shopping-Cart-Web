
function updateCaseNumber(isIncreasing){
    const caseInput = document.getElementById("case-count");
    let caseNumber = caseInput.value;
    if(isIncreasing == true){
        caseNumber = parseInt(caseNumber)+1;
    } else if(caseNumber > 0) {
        caseNumber= parseInt(caseNumber)-1;
    }
    caseInput.value = caseNumber;
    // updating price with quantity
    const caseQuantity = document.getElementById("case-quantity");
    caseQuantity.innerText= caseNumber * 59;

}



document.getElementById("add-case").addEventListener("click", function(){
    updateCaseNumber(true);
    
})

document.getElementById("minus-case").addEventListener("click", function(){
    updateCaseNumber(false);
   
})