import {navbar} from './variables'

export default () => {
    if (window.scrollY >= 50 ) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active')
    }
}