// UI controls 
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
// Form elements
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');

// Input fields - login
const loginEmail = document.querySelector('.form-box.login input[type="email"]');
const loginPassword = document.querySelector('.form-box.login input[type="password"]');

// Input fields - register
const registerUsername = document.querySelector('.form-box.register input[type="text"]');
const registerEmail = document.querySelector('.form-box.register input[type="email"]');
const registerPassword = document.querySelector('.form-box.register input[type="password"]');

// In-memory "database"
let registeredUser = {
  username: '',
  email: '',
  password: ''
};

// Show Register Form
registerLink.addEventListener('click', () => {
  wrapper.classList.add('active');
});

// Show Login Form
loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active');
});

// Show Popup
btnPopup.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
});

// Close Popup
iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
});

// Handle Registration
registerBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const username = registerUsername.value.trim();
  const email = registerEmail.value.trim();
  const password = registerPassword.value;

  if (!username) {
    alert('Please enter your username.');
    return;
  }

  if (!email) {
    alert('Please enter your email.');
    return;
  }

  if (!password) {
    alert('Please enter your password.');
    return;
  }

  if (password.length < 6) {
    alert('Password must be at least 6 characters.');
    return;
  }

  // Save user
  registeredUser.username = username;
  registeredUser.email = email;
  registeredUser.password = password;

  alert('Registered successfully!');
  wrapper.classList.remove('active'); // Switch to login form
});

// Handle Login
loginBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const email = loginEmail.value.trim();
  const password = loginPassword.value;

  // Separate checks for empty email and password
  if (!email) {
    alert('Please enter your email.');
    return;
  }

  if (!password) {
    alert('Please enter your password.');
    return;
  }

  // Check if entered credentials match the registered user
  if (email === registeredUser.email && password === registeredUser.password) {
    alert(`Welcome back, ${registeredUser.username}!`);
    window.location.href = "home.html"; 
    wrapper.classList.remove('active-popup'); // Close popup
  } else {
    alert('Invalid email or password.');
  }
});


    function loadTutorials() {
      const tutorials = Object.keys(videoLinks);
      const contentDiv = document.getElementById("content");
      contentDiv.innerHTML = "";

      tutorials.forEach(topic => {
        const div = document.createElement("div");
        div.className = "tutorial";

        const title = document.createElement("div");
        title.className = "tutorial-title";
        title.textContent = topic;

        const startButton = document.createElement("button");
        startButton.className = "tutorial-button";
        startButton.textContent = "Start";

        startButton.addEventListener("click", () => {
          if (!div.querySelector(".video-container")) {
            const videoDiv = document.createElement("div");
            videoDiv.className = "video-container";

            const iframe = document.createElement("iframe");
            iframe.src = videoLinks[topic];
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowFullscreen = true;

            const exitButton = document.createElement("button");
            exitButton.className = "exit-button";
            exitButton.textContent = "Exit";

            exitButton.addEventListener("click", () => {
              div.removeChild(videoDiv);
              div.removeChild(exitButton);
            });

            videoDiv.appendChild(iframe);
            div.appendChild(videoDiv);
            div.appendChild(exitButton);
          }
        });

        div.appendChild(title);
        div.appendChild(startButton);
        contentDiv.appendChild(div);
      });
    }

    document.getElementById("startBtn").addEventListener("click", loadTutorials);
 

 