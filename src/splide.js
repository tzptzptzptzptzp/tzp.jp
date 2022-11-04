import { Splide } from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

//SplideSlider
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