window.addEventListener("load", () => {
    const burgerMenu = document.querySelector('.burger-menu')
    const enlacesBurger = document.querySelector('.burger-menu span a')

    const body = document.querySelector('.main-wrapper')
    body.addEventListener('touchstart', function() {
        burgerMenu.classList.remove('open')

    })

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('open')
        enlacesBurger.classList.toggle('open')
    })
})