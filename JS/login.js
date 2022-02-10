document.getElementById('login-submit').addEventListener('click', function(){
    //user email
   const emailField = document.getElementById('user-email');
   const userEmail = emailField.value;
  //user password
  const passwordField = document.getElementById('user-password');
 const userPassword = passwordField.value;
 //check email and password
if(userEmail=='afruzaakter@gmail.com' && userPassword=='afruza')
window.location.href = 'banking.html';
});


