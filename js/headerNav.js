const link = document.querySelector(".link");

link.addEventListener("click", () => {
  const linkSubMenu = document.querySelector(".link__submenu");
  linkSubMenu.classList.toggle("closed");
})