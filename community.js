
// CONTACT FORM
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const contactData = {
    name: this.name.value.trim(),
    email: this.email.value.trim(),
    message: this.message.value.trim()
};

  localStorage.setItem('contactFormData', JSON.stringify(contactData));
  alert('Thank you for contacting us! Your message has been saved locally.');
  this.reset();
});

// SUBSCRIPTION FORM
document.getElementById('subscribeForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = this.subscribeEmail.value.trim();

  if (email) {
    localStorage.setItem('subscribedEmail', email);
    alert('You have successfully subscribed!');
    this.reset();
} else {
    alert('Please enter a valid email address.');
}
});

// LOGIN FORM
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const loginEmail = this.loginEmail.value.trim();
  const password = this.password.value;

  if (loginEmail && password) {
    const loginData = {
      email: loginEmail,
      password: password
};

    localStorage.setItem('loginCredentials', JSON.stringify(loginData));
    alert(`Welcome back, ${loginEmail}! Your login info is saved locally.`);
    this.reset();
} else {
    alert('Please fill in both email and password.');
}
});
