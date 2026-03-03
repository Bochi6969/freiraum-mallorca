// Mobile nav
const burger = document.querySelector(".burger");
const mobileNav = document.querySelector(".mobile-nav");

if (burger && mobileNav) {
  burger.addEventListener("click", () => {
    const expanded = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!expanded));
    mobileNav.hidden = expanded;
  });

  mobileNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      burger.setAttribute("aria-expanded", "false");
      mobileNav.hidden = true;
    });
  });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (!id || id === "#") return;
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Form status
const form = document.querySelector('form[name="ersteinschaetzung"]');
const statusEl = document.getElementById("formStatus");
if (form && statusEl) {
  form.addEventListener("submit", () => {
    statusEl.textContent = "Sende…";
  });
}
