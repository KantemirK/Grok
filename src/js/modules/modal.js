const calcScroll = () => {
    const div = document.createElement('div');

    div.style.cssText = `
        width: 50px;
        height: 50px;
        overflow-y: scroll;
        visibility: hidden;
    `;

    document.body.append(div);
    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
};

const openModal = (modalSelector, modalId) => {
    const modals = document.querySelectorAll(modalSelector),
        modal = document.getElementById(modalId),
        scroll = calcScroll(),
        animation = '--animation';
    document.body.style.overflow = 'hidden';
    modals.forEach(modal => {
        modal.classList.remove("open");
        modal.classList.add("close");
    });
    document.documentElement.style.setProperty(animation, 'fadeIn');
    modal.classList.remove("close");
    modal.classList.add("open");
    document.body.style.marginRight = `${scroll}px`;
};

const closeModal = (modalId) => {
    const modal = document.getElementById(modalId),
        animation = '--animation';
    document.body.style.overflow = '';

    document.documentElement.style.setProperty(animation, 'fadeOut');
    modal.addEventListener("animationend", () => {
        modal.classList.remove("open");
        modal.classList.add("close");
        document.body.style.marginRight = `0px`;
    }, { once: true });
};

/* let timerId = 0;

const showModalByTime = (modalSelector, modalId, time) => {
    timerId = setTimeout(() => {
        const modal = document.getElementById(modalId);

        if (getComputedStyle(modal).display === "none") openModal(modalSelector, modalId);
    }, time);

    return timerId;
}; */

const modal = (modalSelector, modalId, triggerSelector) => {
    const modal = document.getElementById(modalId);

    document.addEventListener('click', e => {
        if (e.target && e.target.closest(triggerSelector)) {
            e.preventDefault();

            openModal(modalSelector, modalId);
            /* clearTimeout(timerId); */
        }
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('cross') === '') {
            closeModal(modalId);
        }
    });
};

export { /* showModalByTime, */ modal, closeModal, openModal };

