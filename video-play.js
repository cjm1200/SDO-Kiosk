document.addEventListener("DOMContentLoaded", () => {
  const savedVideoURL = localStorage.getItem("uploadedVideo");
  if (savedVideoURL) {
    document.getElementById("display-video").src = savedVideoURL;
  }
});
