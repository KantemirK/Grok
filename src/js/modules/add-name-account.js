const addNameAccount = insertLocationSelector => {
    const checkStoredName = localStorage.getItem('name'),
        btn = document.querySelector(insertLocationSelector);

    // eslint-disable-next-line no-unused-expressions
    checkStoredName ? btn.textContent = checkStoredName : btn.textContent = 'Войти';
};

export default addNameAccount;