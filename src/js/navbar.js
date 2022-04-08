const navbar = document.querySelector('.navbar')
const icon = document.querySelector('.navbar-toggler-icon')
const navLinks = document.querySelectorAll('.nav-first .nav-link')
const navLinksImg = document.querySelectorAll('.nav-first .nav-link img')

window.addEventListener('scroll', ()=> {
    if (window.scrollY >= 50 ) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active')
    }
})

icon.addEventListener('click', ()=> {
    icon.classList.toggle('open')
})

const rotateImg = function () {

}

navLinks.forEach(function(link){
    link.addEventListener('click', function(){
        for (link of navLinks) {
            link.querySelector('img').classList.toggle('rotate')
            if (!link.classList.contains('show')) {
                link.querySelector('img').classList.remove('rotate')
            }
        }
    })
})