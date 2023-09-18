// navbar
const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () => hamburgerBtn.click());
// toggle
const body = document.querySelector("body"),
  toggle = document.querySelector(".toggle");
let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
  body.classList.add("dark");
  toggle.classList.add("active");
}
toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (!body.classList.contains("dark")) {
    return localStorage.setItem("mode", "light");
  }
  localStorage.setItem("mode", "dark");
});
toggle.addEventListener("click", () => toggle.classList.toggle("active"));





// Event listener for the "EDIT PROFILE" button
document.getElementById("edit-button").addEventListener("click", toggleEdit);

// Event listener for the "SAVE CHANGES" button
document.getElementById("save-button").addEventListener("click", function () {
  // Handle saving changes, including the image, to the server or update the profile as needed
  // You can add the logic here to send the updated data to the server
  // For now, we'll just exit edit mode
  toggleEdit();
});

// Event listener for the image upload input
document.getElementById("image-upload").addEventListener("change", changeImage);
function toggleEdit() {
  var nameInput = document.getElementById("name");
  var usernameInput = document.getElementById("username");
  var editButton = document.getElementById("edit-button");
  var saveButton = document.getElementById("save-button");
  var imageUpload = document.querySelector(".upload")

  if (nameInput.disabled) {
    // Enable editing
      saveButton.style.display = "block";
      imageUpload.style.display = "block";
      nameInput.removeAttribute("disabled");
      usernameInput.removeAttribute("disabled");
      editButton.style.display = "none";

  } else {
      // Save changes and disable editing
      nameInput.setAttribute("disabled", "true");
      usernameInput.setAttribute("disabled", "true");
      editButton.style.display = "block";
      saveButton.style.display = "none";
      imageUpload.style.display = "none";
      imageUpload.classList.add("label");
  }
}

// Function to change the profile image
function changeImage(event) {
  var image = document.getElementById("profile-image");
  var file = event.target.files[0];

  if (file) {
      var reader = new FileReader();

      reader.onload = function (e) {
          image.src = e.target.result;
      };

      reader.readAsDataURL(file);
  }
}