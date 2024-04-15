const toggleNav = document.getElementById('toggle_nav')
const nav = document.getElementById('nav')
toggleNav.addEventListener('click', () => nav.classList.toggle('nav-active'))


const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 80}ms">${letter}</span>`)
    .join('')
})