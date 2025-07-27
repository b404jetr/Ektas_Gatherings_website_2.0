// Admin login logic EktaOG / EktaOG@123
document.addEventListener('DOMContentLoaded', function () {
  const loginSection = document.getElementById('admin-login-section');
  const panelSection = document.getElementById('admin-panel-section');
  const adminForm = document.getElementById('admin-login-form');
  const msgDiv = document.getElementById('admin-login-msg');
  if(adminForm) {
    adminForm.onsubmit = function(e){
      e.preventDefault();
      const user = document.getElementById("admin-username").value;
      const pass = document.getElementById("admin-password").value;
      if(user === 'EktaOG' && pass === 'EktaOG@123'){
        loginSection.style.display = "none";
        panelSection.style.display = "";
        msgDiv.textContent = "";
        window.localStorage.setItem("eg_admin", "true");
      }
      else{
        msgDiv.textContent = "Invalid username or password!";
        msgDiv.style.color = "#FFD700";
      }
    };
  }
  // Persist session
  if(window.localStorage.getItem("eg_admin") === "true"){
    loginSection.style.display = "none";
    panelSection.style.display = "";
  }
  window.handleLogout = function(){
    window.localStorage.removeItem("eg_admin");
    loginSection.style.display = "";
    panelSection.style.display = "none";
  };
});
