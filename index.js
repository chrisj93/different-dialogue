const toggleButton = document.getElementById("toggle-contact-form");
const contactForm = document.getElementById("contact-form");

// Toggle form visibility on button click
toggleButton.addEventListener("click", () => {
  const isFormVisible = contactForm.style.display === "block";
  contactForm.style.display = isFormVisible ? "none" : "block";

  // Add/remove the active class for smooth transitions
  if (isFormVisible) {
    contactForm.classList.remove("active");
  } else {
    setTimeout(() => contactForm.classList.add("active"), 10); // Delay for transition
  }
});
