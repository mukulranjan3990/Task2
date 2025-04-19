
// MENU ICONE AND NEVIGATION SLIDE

const menuIcon = document.getElementById("menuIcon");
const sidebar = document.getElementById("sidebar");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  sidebar.classList.toggle("active");
  registrationForm.addEventListener("click" ,()=>{
    sidebar.classList.remove("active");
    menuIcon.classList.remove("active");
  });
  todo.addEventListener("click" ,()=>{
    sidebar.classList.remove("active");
    menuIcon.classList.remove("active");
  });
});

//oksnk k

// Form Validation
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
  
    let valid = true;
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  
    if (name === '') {
      document.getElementById('nameError').textContent = 'Name is required.';
      valid = false;
    }
  
    if (email === '') {
      document.getElementById('emailError').textContent = 'Email is required.';
      valid = false;
    } else if (!emailPattern.test(email)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email.';
      valid = false;
    }
  
    if (valid) {
      alert('Form submitted successfully!');
        window.location.assign('todo/index.html');
    
    }
  });
  
  
  
