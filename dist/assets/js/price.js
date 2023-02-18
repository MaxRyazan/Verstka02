const basic = document.querySelector('.--tarif-item-basic')
const premium = document.querySelector('.--tarif-item-premium')

basic.addEventListener('click', () => {
    basic.classList.add('active')
    premium.classList.remove('active')
})
premium.addEventListener('click', () => {
    basic.classList.remove('active')
    premium.classList.add('active')
})