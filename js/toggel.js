
document.getElementById('cash-out').style.display = 'none';

document.getElementById('add-money-div').addEventListener('click', function(event){
    event.preventDefault();

    document.getElementById('add-money').style.display = 'block';
    document.getElementById('cash-out').style.display = 'none';
})

document.getElementById('cash-out-div').addEventListener('click', function(event){
    event.preventDefault();

    document.getElementById('add-money').style.display = 'none';
    document.getElementById('cash-out').style.display = 'block';
})