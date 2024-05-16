document.getElementById('tradingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;

  
    document.querySelectorAll('.error-message').forEach(function(el) {
        el.textContent = '';
    });

   
    const tradingPair = document.getElementById('tradingPair');
    if (tradingPair.value === '') {
        valid = false;
        document.getElementById('tradingPairError').textContent = 'Please select a trading pair.';
    }

   
    const accountNumber = document.getElementById('accountNumber');
    if (accountNumber.value.trim() === '') {
        valid = false;
        document.getElementById('accountNumberError').textContent = 'Please enter your account number.';
    }
    else  if (accountNumber.value.trim().length !== 12) {
        valid = false;
        document.getElementById('accountNumberError').textContent = 'Account number must be 12 characters.';
    }

    const password = document.getElementById('password');
    if (password.value.trim() === '') {
        valid = false;
        document.getElementById('passwordError').textContent = 'Please enter your password.';
    }
    else if (!/[a-zA-Z]/.test(password.value.trim())) {
        valid = false;
        document.getElementById('passwordError').textContent = 'Password must contain at least one letter.';
    }

    
    const brokerServer = document.getElementById('brokerServer');
    if (brokerServer.value.trim() === '') {
        valid = false;
        document.getElementById('brokerServerError').textContent = 'Please enter your broker server.';
    }

    
    const serialKey = document.getElementById('serialKey');
    if (serialKey.value.trim() === '') {
        valid = false;
        document.getElementById('serialKeyError').textContent = 'Please enter your serial key token.';
    }
   

 
    const betAmount = document.getElementById('betAmount');
    if (betAmount.value.trim() === '' || isNaN(betAmount.value) || betAmount.value <= 0) {
        valid = false;
        document.getElementById('betAmountError').textContent = 'Please enter a valid bet amount.';
    }

    if (valid) {
        alert('Form submitted successfully!');
        
        this.submit();
    }
});