// Simple script to show alert when form submitted
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you! Your message has been submitted.");
      form.reset();
    });
  }
});
