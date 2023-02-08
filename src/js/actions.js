const dropdown = document.querySelector('.header__blog')
const wrapper = document.querySelector('.wrapper')
const button = document.querySelector('.dropdown')


if(wrapper.clientWidth <= 1280){
    dropdown.classList.add('hide')
}

window.addEventListener('resize', () => {
    if(wrapper.clientWidth <= 1280){
        dropdown.classList.add('hide')
    } else {
        dropdown.classList.remove('hide')
    }
})

button.addEventListener('click', () => {
    dropdown.classList.toggle('hide')
})

