function toggleDropdown(id) {
  const dropdown = document.getElementById(id).parentNode;
  const dropdownContent = document.getElementById(id);

  dropdownContent.classList.toggle("show");
  dropdown.classList.toggle("move-up");

  // Ensure only one dropdown is open and animated at a time
  const dropdowns = document.querySelectorAll(".dropdown-content");
  dropdowns.forEach(function (content) {
    if (content.id !== id) {
      content.classList.remove("show");
      content.parentNode.classList.remove("move-up");
    }
  });
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    const dropdowns = document.querySelectorAll(".dropdown-content");
    dropdowns.forEach(function (content) {
      content.classList.remove("show");
      content.parentNode.classList.remove("move-up");
    });
  }
};
