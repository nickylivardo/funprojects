const toggleNav = document.getElementById('toggle_nav')
const nav = document.getElementById('nav')
toggleNav.addEventListener('click', () => nav.classList.toggle('nav-active'))

const panels = document.querySelectorAll(".panel");

console.log(panels[3]);

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
