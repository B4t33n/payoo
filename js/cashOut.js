
document.getElementById("cashout-btn").addEventListener('click', function(even){
    even.preventDefault();

    const amount = document.getElementById("cash-out-amount").value; // amount
    const convertedAmount = parseFloat(amount);
    const pinNumber = document.getElementById('pin-number').value;
    const convertedPinNumber = parseInt(pinNumber); // pin
    const accountNumber = document.getElementById('id-number').value;
    

    const mainAmount = document.getElementById('main-amount').innerText;
    const convertedMainAmount = parseFloat(mainAmount); // main amount


    if(accountNumber.length === 11){
        if (convertedPinNumber === 1234) {
            const sum = convertedMainAmount - convertedAmount;
            document.getElementById('main-amount').innerText = sum;

            const transaction = document.getElementById("transaction-container");

            const div = document.createElement("div");
            div.innerHTML = `
            <h1>Cash Out Money From ${accountNumber}</h1>
            <h3>Cash Out Balance ${amount} tk</h3>
            `

            transaction.appendChild(div);
        }else{
            alert('invalid pin number');
        }
    }else{
        alert('invalid account number');
    }

    document.getElementById('cash-out-amount').value = '';
})
