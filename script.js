const loginForm = document.querySelector(".login-form");
const emailForm = document.querySelector(".email-form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const passInput = document.querySelector("#password");
const passInput2 = document.querySelector("#new-password");
const inputs = document.querySelectorAll(".form-group input");
const mensagem = document.querySelector(".msg");

// Efeitos de foco nos inputs (funciona nas 2 telas)
inputs.forEach((input) => {
  input.addEventListener("focus", () => input.classList.add("ativo"));
  input.addEventListener("blur", () => input.classList.remove("ativo"));
});

// Toggle de senha na tela de login
if (passInput) {
  passInput.addEventListener("dblclick", () => {
    passInput.type = passInput.type === "password" ? "text" : "password";
  });
}

// Toggle de senha na tela de "forgot password"
if (passInput2) {
  passInput2.addEventListener("dblclick", () => {
    passInput2.type = passInput2.type === "password" ? "text" : "password";
  });
}

// Submit da tela de "forgot password"
if (emailForm && mensagem) {
  emailForm.addEventListener("submit", (event) => {
    event.preventDefault();
    mensagem.style.display = "block";
  });
}

// Submit da tela de login
if (loginForm && username && password) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); //nao deixa o envio real

    if (username.value.trim() === "" || password.value.trim() === "") {
      alert("Please fill in all fields!");
      return;
    }

    alert(`Welcome, ${username.value}!`);
  });
}
