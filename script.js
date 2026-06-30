// Get the toggle button
const themeToggle = document.getElementById("themeToggle");

// Load preference on page load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀️";
} else {
  themeToggle.textContent = "🌙";
}

// Save preference when toggled
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
});


// Contact form handler
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for reaching out! I'll get back to you soon.");
});

// Modal functionality
function openModal(title, desc) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalDesc").textContent = desc;
  document.getElementById("modal").style.display = "flex";
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}
