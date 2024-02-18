const changeStatusNavMenu = () => {
    const menu = document.querySelector('.header');
    const promoCard = document.querySelector('main');

    const changeMenu = () => {
        if (window.scrollY >= promoCard.scrollTop + 1) {
            menu.classList.add('header__active');
        } else {
            menu.classList.remove('header__active');
        }
    };

    window.addEventListener('scroll', changeMenu);
};

export default changeStatusNavMenu;