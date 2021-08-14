const loginFormHandler = async (event) => {
  event.preventDefault();



  
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/userRoutes', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/homepage');
    } else {
      alert(response.statusText);
    }
  }
};

  //const jsonfile = require('jsonfile');

  const signupFormHandler = async (event) => {
  event.preventDefault();
  const first_name = document.querySelector('#first-name-signup').value.trim();
  const last_name = document.querySelector('#last-name-signup').value.trim();
  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  

  // // jsonfile.writeFile('/seeds/userData.json', {
  //   firstname: firstname,
  //   lastname: lastname,
  //   username: username,
  //   email: email,
  //   password: password
  // });

  if (first_name && last_name && username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, first_name, last_name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/homepage');
      console.log('success!!!');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);