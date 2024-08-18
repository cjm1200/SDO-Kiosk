document.addEventListener("DOMContentLoaded", () => {
  const savedBackgroundImage = localStorage.getItem("backgroundImage");
  const backgroundContainer = document.body;

  if (savedBackgroundImage) {
    backgroundContainer.style.backgroundImage = `url(${savedBackgroundImage})`;
  }

  const backgroundImageInput = document.getElementById("backgroundImageInput");
  const changeButton = document.getElementById("changeButton");
  const removeButton = document.getElementById("removeButton");

  if (changeButton) {
    changeButton.addEventListener("click", () => {
      backgroundImageInput.click();
    });

    backgroundImageInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const imageUrl = e.target.result;
          backgroundContainer.style.backgroundImage = `url(${imageUrl})`;
          localStorage.setItem("backgroundImage", imageUrl);
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (removeButton) {
    removeButton.addEventListener("click", () => {
      backgroundContainer.style.backgroundImage = "";
      localStorage.removeItem("backgroundImage");
    });
  }
});
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
  // Remove the background image and preview
  removeButton.addEventListener("click", function () {
    localStorage.removeItem("backgroundImage");
    imagePreview.src = "";
    imagePreview.style.display = "none";
    document.body.style.backgroundImage = "none";
  });
});

