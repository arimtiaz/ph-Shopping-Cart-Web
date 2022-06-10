
document.getElementById("add-case").addEventListener("click", function(){
    const caseInput = document.getElementById("case-count");
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) + 5;
})