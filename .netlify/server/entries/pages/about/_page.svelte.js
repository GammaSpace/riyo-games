import {
	c as create_ssr_component,
	d as add_attribute,
	e as escape,
	f as each
} from '../../../chunks/index.js';
import { render } from 'datocms-structured-text-to-html-string';
let bioPage = 0;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let article = '';
	let bios = '';
	let img = {
		divider: '/img/about/divider.png',
		timeRule: '/img/ui/time_rule.png',
		timeRuleBeige: '/img/ui/time_rule_beige.png',
		ruleOfLaw: '/img/ui/rule_of_law.png',
		logo: '/img/logos/riyo_games_logo_586x288.png',
		mickey: '/img/ui/nav_mickey_hand.png',
		bio: { placeholder: '/img/bios/profile_pic.png' }
	};
	let pageDiv = 1;
	pageDiv = 1;
	return `

${
	article.title != void 0
		? `<div class="${'bg-welcomeBandBg bg-cover bg-center bg-beige p-8 pb-12 flex flex-wrap pt-12 justify-center'}"><div class="${'mb-12 w-full justify-center flex flex-wrap'}"><div class="${'flex flex-wrap max-w-[580px]'}"><div class="${'w-full flex flex-wrap justify-center items-center'}"><img class="${'w-[35%] h-[1.5px] md:h-auto'}"${add_attribute(
				'src',
				img.ruleOfLaw,
				0
		  )}>
          <h1 class="${'w-[30%] text-center mb-2'}">About</h1>
          <img class="${'w-[35%] h-[1.5px] md:h-auto'}"${add_attribute(
				'src',
				img.ruleOfLaw,
				0
		  )}></div>
        <img class="${'mx-auto'}"${add_attribute('src', img.logo, 0)}>
        <img class="${'-mt-7 h-[2px] object-left'}"${add_attribute('src', img.ruleOfLaw, 0)}>
        <div class="${'mt-8 text-textGray text-center style-dato-header'}"><!-- HTML_TAG_START -->${render(
				article.description
		  )}<!-- HTML_TAG_END --></div></div></div></div>
  <div class="${'w-full relative flex flex-wrap justify-center items-center'}"><div class="${'z-20 w-full -top-[80px] absolute h-[80px] footer-gradient'}"></div>
    <div class="${'z-30 mission-mask relative flex flex-wrap p-8 pt-4 justify-center items-center -mt-4'}"><div class="${'bg-aboutBandMidBg bg-center bg-cover bg-no-repeat absolute w-full h-full'}"></div>
      <div class="${'z-10 w-full md:px-0 my-16 md:w-5/6 flex flex-wrap justify-center'}"><div class="${'w-full'}"><h1>${escape(
				article.storyHeader
		  )}</h1>
          <img class="${'mb-4 h-[18px] md:h-[22px] object-cover object-left'}"${add_attribute(
				'src',
				img.timeRuleBeige,
				0
		  )}>
          <div class="${'py-4 text-textGray style-dato-st'}"><!-- HTML_TAG_START -->${render(
				article.story
		  )}<!-- HTML_TAG_END --></div></div>
        <div class="${'w-full lg:w-1/2 md:pr-[7%] pb-4'}"><h1>Our Vision</h1>
          <img${add_attribute('src', img.divider, 0)}>
          <div class="${'py-4 text-textGray style-dato-st'}"><!-- HTML_TAG_START -->${render(
				article.vision
		  )}<!-- HTML_TAG_END --></div></div>
        <div class="${'w-full lg:w-1/2 md:pr-[7%] pb-4'}"><h1>Our Values</h1>
          <img${add_attribute('src', img.divider, 0)}>
          <div class="${'py-4 text-textGray style-dato-st'}"><!-- HTML_TAG_START -->${render(
				article.values
		  )}<!-- HTML_TAG_END --></div></div>
        <div class="${'w-full'}"><h1>Careers At Riyo</h1>
          <img class="${'mb-4 h-[18px] md:h-[22px] object-cover object-left'}"${add_attribute(
				'src',
				img.timeRuleBeige,
				0
		  )}>
          <div class="${'py-4 flex text-textGray flex-wrap style-dato-st'}"><div class="${'w-full'}"><!-- HTML_TAG_START -->${render(
				article.workWithUs
		  )}<!-- HTML_TAG_END --></div>
            <form class="${'inline-block'}" action="${'/careers'}"><a href="${'/careers'}"><button class="${'mt-2 btn-std w-[160px] p-2 border-2 text-charcoal border-textGray bg-beige hover:bg-midBeige uppercase'}">Work With Us</button></a></form></div></div></div></div></div>
  <div class="${'bg-aboutBandBottomBg bg-charcoal g-top bg-no-repeat p-8 pb-16 flex flex-wrap pt-20 justify-center -mt-12'}"><div class="${'w-full md:w-5/6 flex flex-wrap'}"><div class="${'w-full relative text-tan text-left flex flex-wrap'}"><h1 class="${'w-full'}">Our Team</h1>
        ${``}
        ${bioPage + 1 < Math.ceil(bios.length / pageDiv) ? `` : ``}
        <img class="${'mb-4 h-[22px] object-cover object-left'}"${add_attribute(
				'src',
				img.timeRule,
				0
		  )}>
        ${each(bios, (bio) => {
					return `<div class="${'w-full md:w-1/2 lg:w-1/3 flex flex-wrap mb-4 pr-4'}"><div class="${'w-1/3 md:w-1/2'}">
                
              <div class="${'mr-4 bg-boxBlue border-[4px] md:border-[5px] border-gray-700'}"><img class="${''}"${add_attribute(
						'src',
						bio.portrait?.url,
						0
					)}></div> 
              </div>
            <div class="${'w-2/3 md:w-1/2 font-menu'}"><h2 class="${'text-xl'}">${escape(
						bio.name
					)}</h2>
              <h2 class="${'text-blue-400 pb-1'}">${escape(bio.role)}</h2>
              </div>
            </div>
          `;
				})}</div></div></div>`
		: ``
}`;
});
export { Page as default };
