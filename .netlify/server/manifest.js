export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","img/about/about_band_bottom.jpg","img/about/about_band_middle.jpg","img/about/bio_portrait1.png","img/about/bio_portrait10.png","img/about/bio_portrait2.png","img/about/bio_portrait3.png","img/about/bio_portrait4.png","img/about/bio_portrait5.png","img/about/bio_portrait6.png","img/about/bio_portrait7.png","img/about/bio_portrait8.png","img/about/bio_portrait9.png","img/about/divider.png","img/about/portraits.aseprite","img/about/portraits.png","img/bios/profile_pic.png","img/careers/careers_band_middle.jpg","img/careers/careers_band_top.jpg","img/gif/dinos.gif","img/gif/sword.gif","img/home/about_band_mask.svg","img/home/about_band_mask_narrow.svg","img/home/footer-mask.ai","img/home/footer-mask.svg","img/home/mask_page_bottom.svg","img/home/mask_page_top.svg","img/home/mission_band_background.jpg","img/home/mission_band_mask.svg","img/home/mission_bg_circle.svg","img/home/page_mask_bottom.svg","img/home/page_mask_top.svg","img/home/tot_band_background.jpg","img/home/tot_band_portal.png","img/home/tot_band_title.png","img/home/welcome_band_background.jpg","img/home/welcome_band_background_better.jpg","img/home/welcome_band_hero.png","img/home/welcome_band_portal.png","img/logos/riyo_games_logo_586x288.png","img/logos/threads_of_time_logo.png","img/socials/social-discord.svg","img/socials/social-instagram.svg","img/socials/social-news.svg","img/socials/social-tiktok.svg","img/socials/social-twitter.svg","img/ui/nav_logo_tab.png","img/ui/nav_mickey_hand.png","img/ui/nav_selected_state.png","img/ui/rule_of_law.png","img/ui/tabard-body-rough (3).svg","img/ui/tabard-bottom-rough (4).svg","img/ui/time_rule.png","img/ui/time_rule_beige.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".gif":"image/gif",".svg":"image/svg+xml",".ai":"application/postscript"},
	_: {
		entry: {"file":"_app/immutable/start-a19eb186.js","imports":["_app/immutable/start-a19eb186.js","_app/immutable/chunks/index-7d1195c6.js","_app/immutable/chunks/singletons-8ca9b3ae.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/careers",
				pattern: /^\/careers\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/games",
				pattern: /^\/games\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/privacy",
				pattern: /^\/privacy\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
