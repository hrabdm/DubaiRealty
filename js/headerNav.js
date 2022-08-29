const link = document.querySelector(".link__item");

link.addEventListener("click", () => {
  const linkSubMenu = document.querySelector(".submenu");
  linkSubMenu.classList.toggle("closed");
  console.log("hi");
});

var b = document.getElementById('overlay');
function swa(){
	b.style.visibility = 'visible';
	b.style.opacity = '1';
	b.style.transition = 'all 0.7s ease-out 0s';
}
function swa2(){
	b.style.visibility = 'hidden';
	b.style.opacity = '0';
}