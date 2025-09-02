document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
  });
});

const btnDark = document.getElementById("darkmode");
btnDark.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
