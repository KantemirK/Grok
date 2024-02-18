import { openModal } from "./modal";

const checkLogin = () => {
    const accountNameLocation = document.querySelector('.btn__outline'),
        containerProductCard = document.querySelector('.category__product-cards');

    containerProductCard.addEventListener('click', e => {
        if (e.target && e.target.closest(".btn__product") && accountNameLocation.textContent === 'Войти') {
            e.preventDefault();
            openModal('.modal', 'login');
        }
    });
};

export default checkLogin;