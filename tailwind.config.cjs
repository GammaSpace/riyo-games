/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        menu: [ "Quadraat", "Helvetica", "Arial" ],
        body: [ "Volkhov", "Helvetica", "Arial" ],
      },
      colors: {
        beige: "#e3d7bb",
        tan: "#ede6d7",
        darkBeige: "#b3a78b",
        midBeige: "#d3c7ab",
        charcoal: "#1f1e1d",
        lightCharcoal: "#5f5e5d",
        textGray: "#716c61",
      },
      backgroundImage: {
        welcomeBandBg: "url('/img/home/welcome_band_background_better.jpg')",
        missionBandBg: "url('/img/home/mission_band_background.jpg')",
        aboutBandMidBg: "url('/img/about/about_band_middle.jpg')",
        aboutBandBottomBg: "url('/img/about/about_band_bottom.jpg')",
        totBandBg: "url('/img/home/tot_band_background.jpg')",
        careersBandTopBg: "url('/img/careers/careers_band_top.jpg')",
        careersBandMidBg: "url('/img/careers/careers_band_middle.jpg')",
      }
    }
  },
  plugins: []
};