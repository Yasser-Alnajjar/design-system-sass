const toggle = document.querySelector(".toggle_mode");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.innerText = document.body.classList.contains("dark") ? "🌕" : "🌑";
});
