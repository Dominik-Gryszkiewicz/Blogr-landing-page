import {offerSection, infoSection, advantagesSection, logo} from './variables'

export default () => {
    let offerTop = offerSection.offsetTop
    if (window.scrollY > (offerTop + 50) - window.innerHeight) {
        offerSection.classList.add('animate__animated', 'animate__fadeInLeft')
    } else {
        offerSection.classList.remove('animate__animated', 'animate__fadeInLeft')
    }

    let infoTop = infoSection.offsetTop
    if (window.innerWidth < 1200) {
        if (window.scrollY > (infoTop - 250) - window.innerHeight) {
            infoSection.classList.add('animate__animated', 'animate__fadeInUp')
        } else {
            infoSection.classList.remove('animate__animated', 'animate__fadeInUp')
        }
    } else if (window.innerWidth < 1440) {
        if (window.scrollY > (infoTop + 1600) - window.innerHeight) {
            infoSection.classList.add('animate__animated', 'animate__fadeInUp')
        } else {
            infoSection.classList.remove('animate__animated', 'animate__fadeInUp')
        }
    } else if (window.innerWidth < 1920) {
        if (window.scrollY > (infoTop + 1800) - window.innerHeight) {
            infoSection.classList.add('animate__animated', 'animate__fadeInUp')
        } else {
            infoSection.classList.remove('animate__animated', 'animate__fadeInUp')
        }
    } else {
        if (window.scrollY > (infoTop + 2200) - window.innerHeight) {
            infoSection.classList.add('animate__animated', 'animate__fadeInUp')
        } else {
            infoSection.classList.remove('animate__animated', 'animate__fadeInUp')
        }
    }
    

    let advantagesTop = advantagesSection.offsetTop
    if (window.scrollY > (advantagesTop + 100) - window.innerHeight) {
        advantagesSection.classList.add('animate__animated', 'animate__fadeInRight')
    } else {
        advantagesSection.classList.remove('animate__animated', 'animate__fadeInRight')
    }

    let logoTop = logo.offsetTop
    if (window.scrollY > (logoTop) - window.innerHeight) {
        logo.classList.add('animate__animated', 'animate__bounceInLeft')
    } else {
        logo.classList.remove('animate__animated', 'animate__bounceInLeft')
    }
}