const service = document.querySelector('.footer_service')
const hosting = document.querySelector('.footer_hosting')
const company = document.querySelector('.footer_company')
const help = document.querySelector('.footer_help')

const serviceMenu = document.querySelector('.footer_service_mark')
const hostingMenu = document.querySelector('.footer_hosting_mark')
const companyMenu = document.querySelector('.footer_company_mark')
const helpMenu = document.querySelector('.footer_help_mark')



checkViewport()
addEvents()

window.addEventListener('resize', () => {
    checkViewport()
})

function addEvents(){
    const array = [hostingMenu, serviceMenu, helpMenu, companyMenu]
    for(let a = 0; a < array.length; a ++){
        array[a].addEventListener('click', () => {
            rotateImage(array[a])
            hideOtherMenu(array[a])
            showLinks(array[a])
            relocate(array[a])
        })
    }
}

function relocate(param){
    if(param === serviceMenu){
        serviceMenu.classList.toggle('relocate50')
    }
    if(param === companyMenu){
        companyMenu.classList.toggle('relocate120')
    }
    if(param === helpMenu){
        helpMenu.classList.toggle('relocate190')
    }
}

function showLinks(param){
    if(param === hostingMenu){
        hosting.classList.toggle('hide')
    }
    if(param === serviceMenu){
        service.classList.toggle('hide')
    }
    if(param === helpMenu){
        help.classList.toggle('hide')
    }
    if(param === companyMenu){
        company.classList.toggle('hide')
    }
}

function hideOtherMenu(param) {
    const array = [hostingMenu, serviceMenu, helpMenu, companyMenu]

    for (let i = 0; i < array.length; i++) {
        if (param !== array[i]) {
            array[i].classList.toggle('hide')
        }
    }
}

function checkViewport(){
    if(document.querySelector('.footer').clientWidth <= 480){
        service.classList.add('hide')
        hosting.classList.add('hide')
        company.classList.add('hide')
        help.classList.add('hide')
    } else {
        service.classList.remove('hide')
        hosting.classList.remove('hide')
        company.classList.remove('hide')
        help.classList.remove('hide')
    }
}

function rotateImage(imageParentNode){
    const img = imageParentNode.children[1]
    if(img.style.transform === 'rotate(180deg)'){
        img.style.transition = '.5s'
        img.style.transform = 'rotate(360deg)'
    } else {
        img.style.transition = '.5s'
        img.style.transform = 'rotate(180deg)'
    }
}

