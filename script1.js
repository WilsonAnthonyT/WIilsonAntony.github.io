// Get the form element
const form = document.getElementById('signin-form');

// Get the input fields
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const businessNameInput = document.getElementById('business-name');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

// Get the error message elements
const usernameError = document.getElementById('username-error');
const emailError = document.getElementById('email-error');
const businessNameError = document.getElementById('business-name-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');

const submitButton = document.getElementById('submit-btn');

// Add an event listener to the form
form.addEventListener('submit', (event) => {
  // Prevent the form from submitting
  event.preventDefault();


  // Reset the error messages
  usernameError.textContent = '';
  emailError.textContent = '';
  businessNameError.textContent = '';
  passwordError.textContent = '';
  confirmPasswordError.textContent = '';

  // Get the values of the input fields
  const usernameValue = usernameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const businessNameValue = businessNameInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  const confirmPasswordValue = confirmPasswordInput.value.trim();

  // Validate the input fields
  if (usernameValue === '') {
    usernameError.textContent = 'Please enter a username';
    usernameInput.focus();
    return;
  }

  if (emailValue === '') {
    emailError.textContent = 'Please enter an email address';
    emailInput.focus();
    return;
  }

  if (!validateEmail(emailValue)) {
    emailError.textContent = 'Please enter a valid email address';
    emailInput.focus();
    return;
  }

  if (businessNameValue === '') {
    businessNameError.textContent = 'Please enter a business name';
    businessNameInput.focus();
    return;
  }

  if (passwordValue === '') {
    passwordError.textContent = 'Please enter a password';
    passwordInput.focus();
    return;
  }

  if (passwordValue.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters';
    passwordInput.focus();
    return;
  }

  if (confirmPasswordValue === '') {
    confirmPasswordError.textContent = 'Please confirm your password';
    confirmPasswordInput.focus();
    return;
  }

  if (passwordValue !== confirmPasswordValue) {
    confirmPasswordError.textContent = 'Passwords do not match';
    confirmPasswordInput.focus();
    return;
  }
  else{
    window.location.href = 'index.html';
  }
  // If all input fields are valid, submit the form
  const submitbtn = document.getElementById('submit-btn');
    submitbtn.addEventListener("click", function(){
    window.location.href = "index.html";
});
});

// Add event listeners to the password toggle buttons
const passwordToggleButtons = document.querySelectorAll('.password-toggle');
passwordToggleButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    const passwordInput = button.previousElementSibling;
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      button.textContent = 'Hide';
    } else {
      passwordInput.type = 'password';
      button.textContent = 'Show';
    }
  });
});

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleButton = document.querySelector('.password-toggle');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleButton.innerHTML = '<i class="fas fa-eye"></i>';
    } else {
      passwordInput.type = 'password';
      toggleButton.innerHTML = '<i class="fas fa-eye-slash"></i>';
    }
  }
  function togglePasswordVisibility1() {
    const confirmPasswordInput = document.getElementById('confirm-password');
    const ctoggleButton = document.querySelector('.cpassword-toggle');

    if (confirmPasswordInput.type === 'password') {
      confirmPasswordInput.type = 'text';
      ctoggleButton.innerHTML = '<i class="fas fa-eye"></i>';
    } else {
      confirmPasswordInput.type = 'password';
      ctoggleButton.innerHTML = '<i class="fas fa-eye-slash"></i>';
    }
  }
// Validate email address using regular expression
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

