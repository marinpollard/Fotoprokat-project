const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.navigation__lists')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})

document.querySelectorAll('.navigation__link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
}))