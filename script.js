const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i * 35, 280)}ms`;
  observer.observe(el);
});

document.getElementById("year").textContent = new Date().getFullYear();

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menu?.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") === "true";
  menu.setAttribute("aria-expanded", String(!open));
  nav.style.display = open ? "" : "flex";
  nav.style.position = "absolute";
  nav.style.top = "78px";
  nav.style.left = "0";
  nav.style.right = "0";
  nav.style.padding = "20px";
  nav.style.background = "rgba(9,10,12,.96)";
  nav.style.flexDirection = "column";
  nav.style.borderBottom = "1px solid rgba(255,255,255,.11)";
});
nav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  if (window.innerWidth <= 850) {
    nav.style.display = "none";
    menu.setAttribute("aria-expanded", "false");
  }
}));

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", e => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});
