const fileInput = document.getElementById("video-upload");
const uploadButton = document.getElementById("upload-btn");
const changeButton = document.getElementById("change-btn");
const removeButton = document.getElementById("remove-btn");
const fileNameDisplay = document.getElementById("file-name");
const customAlert = document.getElementById("custom-alert");
const alertMessage = document.getElementById("alert-message");
const alertOkButton = document.getElementById("alert-ok-btn");

uploadButton.addEventListener("click", handleVideoUpload);
changeButton.addEventListener("click", () => fileInput.click());
removeButton.addEventListener("click", removeVideo);
alertOkButton.addEventListener("click", hideAlert);

function handleVideoUpload() {
  const file = fileInput.files[0];
  if (file) {
    const videoURL = URL.createObjectURL(file);
    localStorage.setItem("uploadedVideo", videoURL);
    localStorage.setItem("videoFileName", file.name);
    updateFileNameDisplay(file.name);
    showAlert(`Video uploaded successfully: ${file.name}`);
  }
}

function removeVideo() {
  localStorage.removeItem("uploadedVideo");
  localStorage.removeItem("videoFileName");
  updateFileNameDisplay("");
  showAlert("Video removed successfully.");
}

function updateFileNameDisplay(fileName) {
  fileNameDisplay.textContent = fileName
    ? `Uploaded File: ${fileName}`
    : "No video uploaded.";
}

function showAlert(message) {
  alertMessage.textContent = message;
  customAlert.style.display = "block";
}

function hideAlert() {
  customAlert.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  const savedVideoURL = localStorage.getItem("uploadedVideo");
  const savedFileName = localStorage.getItem("videoFileName");
  if (savedVideoURL) {
    updateFileNameDisplay(savedFileName);
  }
});
