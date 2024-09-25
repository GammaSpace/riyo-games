/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			maxWidth: {
				'8xl': '88rem',
				'9xl': '96rem',
				'10xl': '104rem'
			},
			fontFamily: {
				menu: ['Quadraat', 'Helvetica', 'Arial'],
				body: ['Volkhov', 'Helvetica', 'Arial']
			},
			fontSize: {
				tiny: ['12px', '16px'],
				sm: ['14px', '20px'],
				base: ['16px', '24px'],
				md: ['18px', '28px'],
				lg: ['20px', '30px'],
				xl: ['24px', '32px']
			},
			colors: {
				beige: '#e3d7bb',
				tan: '#ede6d7',
				whiteTan: '#fffdf8',
				darkBeige: '#b3a78b',
				midBeige: '#d3c7ab',
				charcoal: '#1f1e1d',
				lightCharcoal: '#5f5e5d',
				textGray: '#716c61',
				boxBlue: '#0b93e7'
			},
			backgroundImage: {
				welcomeBandBg: "url('/img/home/welcome_band_background_better.jpg')",
				missionBandBg: "url('/img/home/mission_band_background.jpg')",
				aboutBandMidBg: "url('/img/about/about_band_middle.jpg')",
				aboutBandBottomBg: "url('/img/about/about_band_bottom.jpg')",
				totBandBg: "url('/img/home/tot_band_background.jpg')",
				careersBandTopBg: "url('/img/careers/careers_band_top.jpg')",
				careersBandMidBg: "url('/img/careers/careers_band_middle.jpg')"
			}
		}
	},
	plugins: []
};
