
document.getElementById("cashin-btn").addEventListener('click', function(even){
    even.preventDefault();

    const amount = document.getElementById("Amount").value; // amount
    const convertedAmount = parseInt(amount);
    const pinNumber = document.getElementById('pin-number').value;
    const convertedPinNumber = parseInt(pinNumber); // pin
    

    const mainAmount = document.getElementById('main-amount').innerText;
    const convertedMainAmount = parseFloat(mainAmount); // main amount


    if (convertedPinNumber === 1234) {
        const sum = convertedMainAmount + convertedAmount;
        document.getElementById('main-amount').innerText = sum;
    }else{
        alert('invalid pin number')
    }

    document.getElementById('Amount').value = '';
})


