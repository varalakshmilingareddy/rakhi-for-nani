const openGift = document.getElementById("openGift");
const surprise = document.getElementById("surprise");
const celebrate = document.getElementById("celebrate");

openGift.addEventListener("click", () => {
  surprise.classList.add("show");
  openGift.innerHTML = "<span>❤️</span> Surprise opened!";
  openGift.disabled = true;
  surprise.scrollIntoView({ behavior: "smooth", block: "center" });
  burst(35);
});

celebrate.addEventListener("click", () => {
  burst(90);
});

function burst(count) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.setProperty("--x", `${(Math.random() - 0.5) * 45}vw`);
    piece.style.animationDelay = `${Math.random() * .8}s`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    piece.textContent = Math.random() > .75 ? "❤" : "";
    fragment.appendChild(piece);
  }

  document.body.appendChild(fragment);
  setTimeout(() => document.querySelectorAll(".confetti").forEach(el => el.remove()), 4000);
}

// Small reveal animation without any external libraries.
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".section, .letter-paper").forEach(el => observer.observe(el));
