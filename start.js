function createAccount() {
    var name = document.getElementById('name').value;
    var date = document.getElementById('date').value;
    var sex = document.getElementById('sex').value;
    var telephone = document.getElementById('telephone').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var successMessage = document.getElementById('success-message');
  
    if (password === confirmPassword) {
      successMessage.textContent = `Account created for ${name} with Email ${email}.`;
  
     
      setTimeout(function () {
        window.location.href = 'project1.html';
      }, 1000);
    } else {
      successMessage.textContent = "Passwords do not match. Please try again.";
    }
  }
  