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

            console.log(`Имя: ${checkStoredName}`);
            console.log(`Пароль: ${checkStoredPw}`);
        } else {
            alert('Такого логина или пароля не существует!');
            console.log(`Имя: ${checkStoredName}`);
            console.log(`Пароль: ${checkStoredPw}`);
        }
    });
};

export default login;