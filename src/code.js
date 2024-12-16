const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("accessibleModal");

openModalBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  modal.setAttribute("aria-hidden", "false");
  closeModalBtn.focus();
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  openModalBtn.focus();
});

modal.addEventListener("keydown", (e) => {
  if (!modal.classList.contains("hidden") && e.key === "Escape") {
    modal.classList.add("hidden");
    openModalBtn.focus();
  }
});

const openDialogBtn = document.getElementById("openDialogBtn");
const closeDialogBtn = document.getElementById("closeDialogBtn");
const dialog = document.getElementById("accessibleDialog");

openDialogBtn.addEventListener("click", () => {
  dialog.showModal();
  dialog.classList.add("flex");
});

closeDialogBtn.addEventListener("click", () => {
  dialog.close();
});

dialog.addEventListener("close", () => {
  dialog.classList.remove("flex");
});

const menuButton = document.getElementById("menuButton");
const menuContent = document.getElementById("menuContent");

menuButton.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";

  if (isExpanded) {
    menuContent.hidden = true;

    menuButton.setAttribute("aria-expanded", "false");
    menuButton.focus();
  } else {
    menuContent.hidden = false;

    menuButton.setAttribute("aria-expanded", "true");
    menuContent.querySelector("[role='menuitem']").focus();
  }
});

menuContent.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !menuContent.hidden) {
    menuContent.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.focus();
  }
});
