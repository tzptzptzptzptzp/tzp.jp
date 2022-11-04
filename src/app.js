let app = new Vue({
    el: '#app',
    data: {
        //PCでのみ表示するコンテンツの条件式
        conditions: (window.innerHeight < window.innerWidth || 959 <= window.innerWidth),
        //スライダーのコンテンツ管理
        videos: [
            { title: 'グッバイ宣言', url: 'https://youtu.be/xvHhSN2su9c', jpg: './assets/images/thumbnail-0.jpg', webp: './assets/images/thumbnail-0.webp' },
            { title: 'なまけもの', url: 'https://youtu.be/5oIHn2_cbF0', jpg: './assets/images/thumbnail-1.jpg', webp: './assets/images/thumbnail-1.webp' },
            { title: 'ヴァンパイア', url: 'https://youtu.be/wtIkie23FA4', jpg: './assets/images/thumbnail-2.jpg', webp: './assets/images/thumbnail-2.webp' },
            { title: '小夜子', url: 'https://youtu.be/C78WYcLtRb4', jpg: './assets/images/thumbnail-3.jpg', webp: './assets/images/thumbnail-3.webp' },
            { title: 'シネマ', url: 'https://youtu.be/aJLu3ZFNcMs', jpg: './assets/images/thumbnail-4.jpg', webp: './assets/images/thumbnail-4.webp' },
            { title: 'サラマンダー', url: 'https://youtu.be/1UdEYVrrhs0', jpg: './assets/images/thumbnail-5.jpg', webp: './assets/images/thumbnail-5.webp' },
        ],
        //セリフのテキスト管理
        talks: [
            { text: 'ありがとう', },
            { text: '超見てね', },
            { text: 'Follow me', },
            { text: 'SNSもチェック', },
            { text: 'てづっぴで検索', },
        ],
    }
});