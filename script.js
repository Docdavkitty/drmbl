/* =============================================
   DrMBL — Artist Page Scripts
   ============================================= */

// ---------- Mobile menu ----------
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuToggle.textContent = navLinks.classList.contains("open") ? "✕" : "☰";
});

// Close menu on link click
document.querySelectorAll("#nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});

// ---------- Scroll to top button ----------
const scrollBtn = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
  scrollBtn.classList.toggle("visible", window.scrollY > 400);
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ---------- Discoveries filter ----------
const filterBtns = document.querySelectorAll(".filter-btn");
const discoveryCards = document.querySelectorAll(".discovery-card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Toggle active class
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    discoveryCards.forEach((card) => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// ---------- Newsletter: auto-reset placeholder ----------
const emailInput = document.getElementById("bd-email");

if (emailInput) {
  emailInput.addEventListener("focus", () => {
    emailInput.placeholder = "";
  });

  emailInput.addEventListener("blur", () => {
    if (!emailInput.value) {
      emailInput.placeholder = "ton@email.com";
    }
  });
}

// ---------- Smooth scroll for all anchor links ----------
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const href = anchor.getAttribute("href");
    if (href === "#") return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ---------- Intersection Observer for fade-in ----------
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".discovery-card").forEach((card) => {
  card.style.animationPlayState = "paused";
  observer.observe(card);
});

console.log("🎵 DrMBL — Fait avec passion 🧠");
