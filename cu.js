function login() {
    // Replace these values with your actual username and password
    var validEmail = 'eliakimasare1@outlook.com';
    var validPassword = 'nanadarko1';

    var enteredEmail = document.getElementById('loginEmail').value;
    var enteredPassword = document.getElementById('loginPassword').value;

    if (enteredEmail === validEmail && enteredPassword === validPassword) {
      alert('Login successful!');

      setTimeout(function () {
        window.location.href = 'project1.html';
      }, 1000); 

    } else {
      alert('Invalid email or password. Please try again.');
    }
  }