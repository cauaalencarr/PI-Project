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

document.addEventListener("DOMContentLoaded", () => {
    const points = document.querySelectorAll(".status-point");

    setInterval(() => {
        points.forEach(point => {
            const isActive = point.dataset.status === "Ativo";
            point.dataset.status = isActive ? "Inativo" : "Ativo";
            point.style.backgroundColor = isActive ? "red" : "green";
        });
    }, 2000);
});

