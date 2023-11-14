function validateLogin() {
  // Simple validation logic
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === 'user' && password === 'pass') {
      alert('Login successful!');
      // Redirects to home page 
      window.location.href = 'index.html';
  } else {
      alert('Invalid username or password. Please try again.');
  }
}
function subscribe() {
  var emailInput = document.getElementsByName('email')[0].value;
  console.log('Subscribed with email: ' + emailInput);
  alert('Subscription successful!');
}