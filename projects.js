(() => {
  "use strict";
  const modal = document.querySelector("#beyond-project-details");
  const link = modal?.querySelector("[data-project-dnca]");
  const dnca = document.querySelector("#cv-dnca-trigger");
  const scene = document.querySelector("#scene");
  if (!link || !dnca || !scene) return;

  link.addEventListener("click", (event) => {
    event.preventDefault();
    // Use the existing close/open handlers so focus and modal locks stay in sync.
    modal.querySelector(".beyond-modal__close").click();
    scene.scrollIntoView({ behavior: "instant", block: "start" });
    dnca.click();
  });
})();
