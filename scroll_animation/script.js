const toggleNav = document.getElementById('toggle_nav')
const nav = document.getElementById('nav')
toggleNav.addEventListener('click', () => nav.classList.toggle('nav-active'))

const boxes = document.querySelectorAll('.box')

window, addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top

    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}
