// Small enhancements for the portfolio navigation.
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector("#nav-toggle");
  const links = document.querySelectorAll(".nav-links a");

  // Close the mobile menu after a visitor chooses a page.
  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (toggle) toggle.checked = false;
    });
  });
});
