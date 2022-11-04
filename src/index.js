import * as loader from './module/loader';
addEventListener('load', loader.loaded);
import * as layout from './layout';
addEventListener('DOMContentLoaded', layout.documentLayout);
addEventListener('resize', layout.documentLayout);
import { Splide } from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
const splide = new Splide( '#Splide', {
	perPage: 1,
	type: 'loop',
	arrows: false,
	pagination: false,
	direction: 'rtl',
	autoScroll: {
		speed: 1.5,
		pauseOnHover: false,
		pauseOnFocus: false,
	},
} );
splide.mount( { AutoScroll} );
if ( !layout.conditions ) {
    //スマホでの処理
    function disableScroll(e) {
        e.preventDefault();
    }
    document.addEventListener('touchmove', disableScroll, { passive: false });
};
