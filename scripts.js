function logar() {
  var login = document.getElementById("user").value;
  var senha = document.getElementById("password").value;

  if (login == "admin" && senha == "admin") {
    location.href = "home.html";
  } else {
    alert("Usuario ou senha incorretos");
  }
}

document.addEventListener("DOMContentLoaded",() => {
  const links = document.querySelectorAll(".nav-links li a"); 
  const currentUrl = window.location.href; 

  links.forEach(link => {
      if (link.href === currentUrl) { 
          link.classList.add("active");
      }
  });
});


