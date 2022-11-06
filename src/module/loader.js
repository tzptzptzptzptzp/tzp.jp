const start = () => {
    document.getElementById("js-loading-svg").classList.add("start")
};

const loaded = () => {
    let target = document.getElementById('js-loading');
    target.classList.add('loaded');
    let fadeInItems = document.getElementsByClassName('js-fadeIn');
    for (let i=0; i < fadeInItems.length; i++) {
        fadeInItems[i].style.opacity = 1;
    };
    setTimeout(function() {
        target.style.display = ('none');
    },2550);
};
export { start, loaded };