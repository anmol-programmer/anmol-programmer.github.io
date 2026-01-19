// --- Mobile menu ---
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn?.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});

// Close menu on link click (mobile)
menu?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    menu.classList.remove("open");
    menuBtn?.setAttribute("aria-expanded", "false");
  });
});

// --- Theme toggle (saved in localStorage) ---
const themeBtn = document.getElementById("themeBtn");

function applyTheme(mode) {
  const root = document.documentElement;
  if (mode === "light") {
    root.classList.add("light");
    themeBtn.textContent = "☀️";
  } else {
    root.classList.remove("light");
    themeBtn.textContent = "🌙";
  }
}

const saved = localStorage.getItem("bb_theme");
applyTheme(saved || "dark");

themeBtn?.addEventListener("click", () => {
  const isLight = document.documentElement.classList.contains("light");
  const next = isLight ? "dark" : "light";
  localStorage.setItem("bb_theme", next);
  applyTheme(next);
});

// --- Footer year ---
document.getElementById("year").textContent = String(new Date().getFullYear());

// --- Back to top button ---
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) toTop.style.display = "block";
  else toTop.style.display = "none";
});
toTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// --- Contact form (front-end only) ---
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

function setMsg(text) {
  if (formMsg) formMsg.textContent = text;
}

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const message = String(data.get("message") || "").trim();

  if (name.length < 2) return setMsg("Please enter a valid name.");
  if (!email.includes("@") || email.length < 6) return setMsg("Please enter a valid email.");
  if (message.length < 10) return setMsg("Message should be at least 10 characters.");

  // No backend here — just a nice confirmation
  setMsg("✅ Message prepared. (Add backend later to actually send it.)");
  form.reset();
});
