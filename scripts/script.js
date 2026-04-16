const btn = document.getElementById("toggle-btn");
const hidden = document.querySelectorAll(".pass.hidden");
let open = false;

btn.addEventListener("click", () => {
  open = !open;
  hidden.forEach((p) => (p.style.display = open ? "block" : "none"));
  btn.textContent = open ? "LAAT MINDER ZIEN" : "LAAT MEER ZIEN";
});
