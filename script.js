function scrollToSection() {
  document.getElementById("memories").scrollIntoView({ behavior: "smooth" });
}

const date = new Date();
document.getElementById("date").innerText =
  "Made with love on " + date.toDateString();
