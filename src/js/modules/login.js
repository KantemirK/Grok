import addNameAccount from "./add-name-account";
import { closeModal } from "./modal";

const login = () => {
    const form = document.querySelector('#login .modal__form'),
        name = document.querySelector('#login input[name="name"]'),
        pw = document.querySelector('#login input[name="password"]');

    form.addEventListener('submit', e => {
        e.preventDefault();

        const checkStoredName = localStorage.getItem('name'),
            checkStoredPw = localStorage.getItem('pw');

        if (name.value === checkStoredName && pw.value === checkStoredPw) {
            addNameAccount('.btn__outline');
            closeModal('login');
        } else {
            alert('Такого логина или пароля не существует!');
        }
    });
};

export default login;