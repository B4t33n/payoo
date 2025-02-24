document.getElementById("login-btn").addEventListener('click', function(even){
    even.preventDefault();
    const idNumber = document.getElementById('id-number').value;
    // const convertedIdNumber = parseInt(idNumber);
    const pinNumber = document.getElementById('pin-number').value;
    const convertedPinNumber = parseInt(pinNumber);
    

    // check number and pin

    if (idNumber.length === 11) {
        if(convertedPinNumber === 1234){
            window.location.href="./main.html";
        }else{
            alert('Invalid pin NUmber');
        }
    }else{
        alert('Invalid id number');
    }
})