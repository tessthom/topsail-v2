// export function initOverlay() {
//   const overlay = document.createElement("div");
//   overlay.classList.add("overlay");
//   document.body.appendChild(overlay);

//   const navbarToggler = document.querySelector(".navbar-toggler");

//   navbarToggler.addEventListener("click", function () {
//     const isExpanded = this.getAttribute("aria-expanded") === "true";
//     toggleOverlay(isExpanded);
//   });

//   overlay.addEventListener("click", function () {
//     const isExpanded = navbarToggler.getAttribute("aria-expanded") === "true";
//     toggleOverlay(isExpanded);
//   })

//   function toggleOverlay(isExpanded) {
//     if (isExpanded) {
//       overlay.classList.add("active");
//     } else {
//       overlay.classList.remove("active");
//     }
//   }
// }
