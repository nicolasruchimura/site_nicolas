document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const introSection = document.getElementById("intro");
  const githubBtn = document.getElementById("github-btn");

  introSection.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
      document.querySelector("main").scrollIntoView({ behavior: "smooth" });
    }
  });

  githubBtn.addEventListener("mouseover", () => {
    githubBtn.querySelector(".tooltip").style.display = "block";
  });

  githubBtn.addEventListener("mouseleave", () => {
    githubBtn.querySelector(".tooltip").style.display = "none";
  });
});
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    const offset = 80; // Adjust based on header height
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});