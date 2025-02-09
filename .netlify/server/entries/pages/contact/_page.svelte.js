import { c as create_ssr_component, d as add_attribute } from '../../../chunks/index.js';
import { render } from 'datocms-structured-text-to-html-string';
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let article = '';
	let img = {
		divider: '/img/about/divider.png',
		logo: '/img/logos/riyo_games_logo_586x288.png'
	};
	return `

${
	article.title != void 0
		? `<div class="${'bg-careersBandTopBg bg-cover bg-center bg-no-repeat p-8 pb-12 flex flex-wrap pt-12 justify-center'}"><div class="${'mt-8 mb-12 w-full md:w-5/6 justify-center items-center flex flex-wrap'}"><div class="${'w-full md:w-1/3 xl:w-1/4'}"><img class="${'mx-auto'}"${add_attribute(
				'src',
				img.logo,
				0
		  )}></div>
      <div class="${'w-full md:w-2/3 xl:w-3/4 pl-0 md:px-16'}"><h1>Contact Us</h1>
        <img class="${'pb-4'}"${add_attribute('src', img.divider, 0)}>
        <div class="${'text-textGray style-dato-header'}"><!-- HTML_TAG_START -->${render(
				article.description
		  )}<!-- HTML_TAG_END --></div></div></div></div>
  <div class="${'w-full relative flex flex-wrap justify-center items-center'}"><div class="${'z-10 w-full top-[-80px] absolute h-[80px] footer-gradient'}"></div>
    <div class="${'z-20 w-full mission-mask relative flex flex-wrap p-8 justify-center items-center -mt-4'}"><div class="${'bg-careersBandMidBg bg-cover bg-no-repeat absolute w-full h-full'}"></div>
      <div class="${'z-10 w-full md:w-5/6 md:px-0 mt-8 pb-48 mb-4 flex flex-wrap justify-center'}"><div class="${'w-full md:w-1/2 pr-8'}"><h1>Contact Form</h1>
          <form name="${'contact-form'}" netlify-honeypot="${'bot-field'}" method="${'POST'}" id="${'contact'}" data-netlify="${'true'}"><input type="${'hidden'}" name="${'form-name'}" value="${'contact-form'}">
            <div class="${'font-display text-3xl mb-6'}"><label class="${'mt-4 block text-sm font-body text-textGray'}">Name
                <input type="${'text'}" name="${'name'}" id="${'name'}" autocomplete="${'name'}" class="${'mt-1 mb-2 p-1 text-charcoal focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm text-sm border-gray-300 rounded-md'}"></label>
                <label class="${'mt-4 block text-sm font-body text-textGray'}">Email address
                <input type="${'text'}" name="${'email'}" id="${'email'}" autocomplete="${'email-address'}" class="${'mt-1 mb-2 p-1 text-charcoal focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm text-sm border-gray-300 rounded-md'}"></label>
              <label class="${'mt-4 block text-sm font-body text-textGray'}">Reason for contacting
                <select name="${'reason'}" id="${'reason'}" class="${'mt-1 mb-2 p-1 bg-white focus:ring-purple-500 focus:border-purple-500 font- block w-full text-sm shadow-sm text-charcoal border-gray-300 rounded-md'}"><option value="${'general'}" selected>General Info</option><option value="${'media-inq'}">Media Inquiry</option><option value="${'streamer-inq'}">Streamer/Influencer Inquiry</option></select></label>
              <label class="${'mt-4 block text-sm font-body text-textGray'}">Message
                <textarea class="${'mt-1 w-full text-sm p-1 text-charcoal rounded-md'}" name="${'message'}" form="${'contact'}" placeholder="${'Enter text here...'}"></textarea></label></div>
            <button type="${'submit'}" class="${'mt-2 btn-std w-[160px] p-2 border-2 text-charcoal border-textGray bg-beige hover:bg-midBeige uppercase'}">Submit
            </button></form></div>
        <div class="${'w-full md:w-1/2 mt-8 md:mt-0'}"><h1>Newsletter Signup</h1>
        <img alt="Vertical Divider" class="w-[100px] h-[2px]" src={img.divider}/>
          <form id="${'signup'}" method="${'post'}" action="${'https://www.aweber.com/scripts/addlead.pl'}"><input type="${'hidden'}" name="${'listname'}" value="${'awlist6157223'}">
            <input type="${'hidden'}" name="${'redirect'}" value="${'http://www.example.com/thankyou.htm'}">
            <input type="${'hidden'}" name="${'meta_redirect_onlist'}" value="${'http://www.example.com/thankyou.htm'}">
            <input type="${'hidden'}" name="${'meta_adtracking'}" value="${'custom form'}">
            <input type="${'hidden'}" name="${'meta_message'}" value="${'1'}"> 
            <input type="${'hidden'}" name="${'meta_required'}" value="${'email'}"> 
            <input type="${'hidden'}" name="${'meta_forward_vars'}" value="${'1'}"> 
            <label class="${'mt-4 block text-sm font-body text-textGray'}">Name
              <input type="${'text'}" class="${'mt-1 w-full text-sm p-2 text-charcoal rounded-md'}" name="${'name'}" value="${''}"></label>
            <label class="${'mt-4 block text-sm font-body text-textGray'}">Email
              <input type="${'text'}" class="${'mt-1 w-full text-sm p-2 text-charcoal rounded-md'}" name="${'email'}" value="${''}"></label>
            <input type="${'submit'}" class="${'mt-8 btn-std w-[160px] p-2 border-2 text-charcoal border-textGray bg-beige hover:bg-midBeige hover:cursor-pointer uppercase'}" name="${'submit'}" value="${'Subscribe'}"></form></div></div></div></div>`
		: ``
}`;
});
export { Page as default };
