(function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => nav.classList.remove("open"));
    });
  }

  const links = Array.from(document.querySelectorAll(".nav a[href^='#']"));
  const sections = links
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const setActive = () => {
    let current = sections[0];
    const y = window.scrollY + 80;
    for (const s of sections) {
      if (s.offsetTop <= y) current = s;
    }
    links.forEach((a) => {
      a.classList.toggle("active", a.getAttribute("href") === "#" + current.id);
    });
  };
  window.addEventListener("scroll", setActive, { passive: true });
  setActive();
})();
