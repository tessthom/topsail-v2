// this function overlays the page with a div when the navbar is expanded
export function initOverlay() {
  const toggle = document.querySelector(".navbar-toggler");

  // event listener for when the navbar is expanded
  toggle.addEventListener("click", function () { 
    const isExpanded = this.getAttribute("aria-expanded") === "true";

    // if navbar expanded...
    if (isExpanded) { 
      // make a div 
      const overlay = document.createElement("div"); 
      // give the div a class to target
      overlay.classList.add("overlay"); 
      // append div to body of doc 
      document.body.appendChild(overlay);

      // overlay click event listener
      overlay.addEventListener("click", function () { 
        // click the toggle button to close navbar
        toggle.click();
        // remove overlay on navbar close
        overlay.remove();
      });
    } else { // if navbar collapsed...
      // make new ref var in this scope for overlay div
      const overlay = document.querySelector(".overlay");
      // remove overlay on navbar collapse
      overlay.remove();
    }
  });
}
