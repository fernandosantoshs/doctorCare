function onScroll() {

    // const navMenu = document.getElementById('navigation')
    // scrollY > 0 ? navMenu.classList.add('scroll') : navMenu.classList.remove('scroll')
    
    // Escrevendo o id da tag diretamente também é possível acessar as propriedades como classList
    scrollY > 0 ? navigation.classList.add('scroll') : navigation.classList.remove('scroll')

}

