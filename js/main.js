
document.getElementById("cashin-btn").addEventListener('click', function(even){
    even.preventDefault();

    const amount = document.getElementById("Amount").value; // amount
    const convertedAmount = parseInt(amount);
    const pinNumber = document.getElementById('pin-number').value;
    const convertedPinNumber = parseInt(pinNumber); // pin
    const accountNumber = document.getElementById('id-number').value;

    const mainAmount = document.getElementById('main-amount').innerText;
    const convertedMainAmount = parseFloat(mainAmount); // main amount
    const bank = document.getElementById("all-bank").value;


    if (convertedPinNumber === 1234) {
        const sum = convertedMainAmount + convertedAmount;
        document.getElementById('main-amount').innerText = sum;



        const transaction = document.getElementById("transaction-container");

            const div = document.createElement("div");
            div.innerHTML = `
            <h1>Added Money From ${accountNumber}</h1>
            <h3>Added Balance ${amount} tk</h3>
            <p>From ${bank} Mobile Banking</p>
            `

            transaction.appendChild(div);
    }else{
        alert('invalid pin number')
    }

    document.getElementById('Amount').value = '';
})


