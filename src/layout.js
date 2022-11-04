//画面レイアウトに関する処理
const conditions = window.innerHeight < window.innerWidth || 959 <= window.innerWidth;
const documentLayout = () => {
    document.getElementById("js-loading-svg").classList.add("start");
    if (conditions) {
        //iPhoneレイアウト - 上下メニューバーの高さを除外
        let mainHeight = parseInt(window.getComputedStyle(document.getElementById("js-main")).height);
        let menubarHeight = document.getElementById("js-menubar").clientHeight;
        let mainInnerHeight = mainHeight - (menubarHeight * 2);
        document.getElementById("js-main__inner").style.height = (mainInnerHeight + "px");    
        //ロゴ位置の修正
        document.getElementById("js-logo").style.top = (menubarHeight + "px");
    };
};
export { conditions, documentLayout };