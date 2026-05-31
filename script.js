const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if(menuToggle && nav){

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });

}
