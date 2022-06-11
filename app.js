
function updateCaseNumber(isIncreasing){
    const caseInput = document.getElementById("case-count");
    const caseNumber = caseInput.value;
    if(isIncreasing == true){
        caseInput.value = parseInt(caseNumber)+1;
    } else {
        caseInput.value = parseInt(caseNumber)-1;
    }
}

document.getElementById("add-case").addEventListener("click", function(){
    updateCaseNumber(true);
    
})

document.getElementById("minus-case").addEventListener("click", function(){
    updateCaseNumber(false);
   
})