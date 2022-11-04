function initLayout() {
    let wrapper = document.getElementById("js-wrapper");
    wrapper.style.height = (window.innerHeight + "px");
}
window.addEventListener('DOMContentLoaded', initLayout);
window.addEventListener('resize', initLayout);
