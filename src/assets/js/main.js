const dropdown = document.querySelector('.header__blog')
const wrapper = document.querySelector('.wrapper')
const button = document.querySelector('.dropdown')

function hideNav(){
    if(wrapper.clientWidth <= 1280){
        dropdown.classList.add('hide')
    }
}
function hideServiceLink(){
    const service = document.querySelector('.header__service-link')
    const moveHere  = document.querySelector('.header__blog-links')
    const link = document.querySelector('.header__blog-child')
    if(wrapper.clientWidth <= 620){
        moveHere.appendChild(link)
    }
    if(wrapper.clientWidth > 620){
        service.appendChild(link)
    }
}
function toggleDropdown(){
    if(wrapper.clientWidth <= 1280){
        dropdown.classList.add('hide')
    } else {
        dropdown.classList.remove('hide')
    }
}

window.addEventListener('resize', toggleDropdown)

window.addEventListener('resize', hideServiceLink)

button.addEventListener('click', () => dropdown.classList.toggle('hide'))

hideServiceLink()
hideNav()
