document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");

  // Function to toggle the 'transparent' class based on scroll position
  // - the class 'transparent' should be defined in your CSS to set the desired transparency
  // - classList.add() only adds the class if it's not already present
  function toggleHeaderTransparency() {
    if (window.scrollY > 0) {
      header.classList.add("transparent");
    } else {
      header.classList.remove("transparent");
    }
  }

  window.addEventListener("scroll", toggleHeaderTransparency);
});
