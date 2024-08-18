document.addEventListener("DOMContentLoaded", function () {
  // Load image from localStorage if available and set it as background
  const savedImage = localStorage.getItem("savedImage");
  if (savedImage) {
    document.body.style.backgroundImage = `url(${savedImage})`;
  }
});
