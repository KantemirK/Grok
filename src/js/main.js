import { /* showModalByTime, */ modal } from "./modules/modal";
import blockAnimation from "./modules/block-animation";
import changeStatusNavMenu from "./modules/change-status-nav-menu";
import signup from "./modules/signup";
import login from "./modules/login";
import addNameAccount from "./modules/add-name-account";
import checkLogin from "./modules/check-login";

window.addEventListener('DOMContentLoaded', () => {
    addNameAccount('.btn__outline');
    blockAnimation(1000);
    changeStatusNavMenu();
    modal('.modal', 'login', '[data-modal-trigger="login"]');
    modal('.modal', 'signup', '[data-modal-trigger="signup"]');
    modal('.modal', 'defects', '[data-modal-trigger="defects"]');
    /* showModalByTime('.modal', 'login', 15000); */
    signup();
    login();
    checkLogin();
});



























































































const data = () => {
    const year = document.querySelector('.footer__copyright span');
    year.textContent = '1977';
};
data();