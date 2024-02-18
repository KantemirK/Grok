const blockAnimation = (delay) => {
    setTimeout(() => {
        document.body.className = "";
    }, delay);
};

export default blockAnimation;