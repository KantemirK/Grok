import addNameAccount from "./add-name-account";
import { closeModal } from "./modal";

const signup = () => {
    const form = document.querySelector('#signup .modal__form'),
        name = document.querySelector('#signup input[name="name"]'),
        pw = document.querySelector('#signup input[name="password"]');

    form.addEventListener('submit', e => {
        e.preventDefault();

        const checkStoredName = localStorage.getItem('name'),
            checkStoredPw = localStorage.getItem('pw');

        if (name.value === checkStoredName && pw.value === checkStoredPw) {
            alert('Вы уже зарегестрированы!');

            console.log(`Имя: ${checkStoredName}`);
            console.log(`Пароль: ${checkStoredPw}`);
        } else {
            localStorage.setItem('name', name.value);
            localStorage.setItem('pw', pw.value);

            addNameAccount('.btn__outline');
            closeModal('signup');
        }
    });
};

export default signup;