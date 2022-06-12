
function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + "-count");
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber)+1;
    } else if(productNumber > 0) {
        productNumber= parseInt(productNumber)-1;
    }
    productInput.value = productNumber;
    // updating price with quantity
    const productQuantity = document.getElementById(product + "-quantity");
    productQuantity.innerText= productNumber * price;
    // calculate total


}
function getInputValue(){
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    return productCount;
}

function calculateTotal(){
    const phoneTotal = getInputValue("phone") * 1219;
    const caseTotal = getInputValue("case") * 59;
    const subTotal = phoneTotal + caseTotal;
    // update subtotal balance
    document.getElementById("sub-total").innerText = subTotal;
}

// handle phone events
document.getElementById('plus-phone').addEventListener('click', function(){
    updateProductNumber('phone', 1219, true);
})
document.getElementById('minus-phone').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false);
})
// handle case events
document.getElementById("add-case").addEventListener("click", function(){
    updateProductNumber("case", 59, true);
     
})

document.getElementById("minus-case").addEventListener("click", function(){
    updateProductNumber("case", 59, false);
   
})