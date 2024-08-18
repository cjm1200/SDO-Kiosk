document.addEventListener("DOMContentLoaded", function () {
  const backgroundImageInput = document.getElementById("backgroundImageInput");
  const changeButton = document.getElementById("changeButton");
  const removeButton = document.getElementById("removeButton");
  const imagePreview = document.getElementById("imagePreview");

  // Load image from localStorage if available and set it as preview
  const backgroundImage = localStorage.getItem("backgroundImage");
  if (backgroundImage) {
    imagePreview.src = backgroundImage;
    imagePreview.style.display = "block";
  }

  backgroundImageInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const dataURL = e.target.result;
        imagePreview.src = dataURL;
        imagePreview.style.display = "block";

        // Save the image in localStorage
        localStorage.setItem("backgroundImage", dataURL);
      };
      reader.readAsDataURL(file);
    }
  });
});
