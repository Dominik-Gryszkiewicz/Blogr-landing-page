import {navLinks} from './variables'

export default (link) => {
    link.addEventListener('click', () => {
        for (link of navLinks) {
            link.querySelector('img').classList.toggle('rotate')
            if (!link.classList.contains('show')) {
                link.querySelector('img').classList.remove('rotate')
            }
        }
    })
}