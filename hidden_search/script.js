const toggleNav = document.getElementById('toggle_nav')
const nav = document.getElementById('nav')
toggleNav.addEventListener('click', () => nav.classList.toggle('nav-active'))


const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')


btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})