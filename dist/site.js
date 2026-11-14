document.documentElement.classList.add("js");

const siteMenu = document.querySelector(".site-menu");
const menuButton = siteMenu.querySelector("summary");

siteMenu.querySelector('a[href="#home"]').addEventListener("click", () => {
  siteMenu.open = false;
});

document.addEventListener("click", (event) => {
  if (siteMenu.open && !siteMenu.contains(event.target)) {
    siteMenu.open = false;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && siteMenu.open) {
    siteMenu.open = false;
    menuButton.focus();
  }
});

document.querySelectorAll("[data-dialog]").forEach((trigger) => {
  const dialog = document.getElementById(trigger.dataset.dialog);
  trigger.addEventListener("click", () => {
    if (siteMenu.contains(trigger)) {
      siteMenu.open = false;
      menuButton.focus();
    }
    if (!('commandForElement' in trigger)) dialog.showModal();
  });
});

const workServices = document.getElementById("work-services");
const aboutButton = document.querySelector('[aria-controls="work-services"]');
const workPhoto = workServices.closest(".photo");

aboutButton.setAttribute("aria-expanded", "false");
workServices.inert = true;
workPhoto.removeAttribute("data-expanded");

aboutButton.addEventListener("click", () => {
  const expanded = aboutButton.getAttribute("aria-expanded") === "false";
  aboutButton.setAttribute("aria-expanded", String(expanded));
  workServices.inert = !expanded;
  workPhoto.toggleAttribute("data-expanded", expanded);
});
