import { c as create_ssr_component, d as add_attribute, f as each, e as escape } from "../../chunks/index.js";
import { render } from "datocms-structured-text-to-html-string";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const homeLinks = [
    ["about", "/about"],
    ["careers", "/careers"],
    ["games", "https://www.threadsoftimegame.com"],
    ["contact", "contact"]
  ];
  let handActive = Array(homeLinks.length);
  let article = "";
  let img = {
    logo: "/img/logos/riyo_games_logo_586x288.png",
    hero: "/img/home/welcome_band_hero.png",
    portal: "/img/home/welcome_band_portal.png",
    circle: "/img/home/mission_bg_circle.svg",
    tot: "/img/home/tot_band_title.png",
    castle: "img/home/tot_band_portal.png",
    mickey: "/img/ui/nav_mickey_hand.png",
    ruleOfLaw: "/img/ui/rule_of_law.png"
  };
  let yPos = 0;
  return `

${article.title != void 0 ? `<div class="${"bg-welcomeBandBg bg-cover bg-center p-8 pb-12 pt-16 flex flex-wrap pt-12 pb-24 md:pl-[10%]"}"><div class="${"w-full mt-16 md:w-1/2"}"><img class="${"mb-8"}"${add_attribute("src", img.logo, 0)}>
    
    <img class="${"-mt-12 h-[2px] object-left"}"${add_attribute("src", img.ruleOfLaw, 0)}>
    <div class="${"pt-8 pb-4 text-textGray style-dato-header"}"><!-- HTML_TAG_START -->${render(article.studioDescription)}<!-- HTML_TAG_END --></div>
    <img class="${"mb-2 h-[2px] object-left"}"${add_attribute("src", img.ruleOfLaw, 0)}>
    <div class="${"flex flex-wrap justify-center relative"}"><div class="${"w-1/2 md:w-full"}">${each(homeLinks, (link, i) => {
    return `<div class="${""}"><a${add_attribute("href", link[1], 0)}${add_attribute("this", handActive[i][0], 0)}>${handActive[i][1] ? `<div class="${"pt-2 absolute mickey-bounce inline-block w-[40px]"}"><img class="${"inline-block"}"${add_attribute("src", img.mickey, 0)}></div>
              <span class="${"h-[40px] pl-12 pt-2 inline-block uppercase text-lg"}">${escape(link[0])}</span>` : `<span class="${"homepage-menu h-[40px] pt-2 inline-block uppercase text-lg"}">${escape(link[0])}</span>`}</a>
          <img class="${"w-full md:w-1/3 my-1 h-[2px] object-left"}"${add_attribute("src", img.ruleOfLaw, 0)}>
        </div>`;
  })}</div></div></div>
  <div class="${"relative w-full md:w-1/2 flex justify-center items-center"}"><div class="${""}"><img class="${"-mr-8 max-w-[140%] mt-8 md:mt-0 float-right"}"${add_attribute("src", img.portal, 0)}></div>
    <div class="${"absolute z-1 w-1/2 ml-48 md:ml-64 mt-48 md:mt-16 mr-48"}"><img style="${"transform: translate(0," + escape(-yPos * 0.1, true) + "px)"}" class="${"max-w-[140%] overflow-x-hidden"}"${add_attribute("src", img.hero, 0)}></div></div></div>
<div class="${"mission-mask relative flex flex-wrap justify-center -mt-4 items-center"}"><div class="${"bg-missionBandBg bg-center md:bg-cover bg-no-repeat absolute w-full h-full"}"></div>
  <div class="${"circle-mask absolute w-full h-full flex flex-wrap justify-center items-center overflow-hidden"}"><div class="${"absolute w-[130%] sm:w-[110%] md:w-[100%] lg:w-[90%] xl:w-[80%]"}"><img style="${"transform: translate(0," + escape(-yPos * 0.1, true) + "px)"}" class="${"mt-64 sm:mt-48 mx-auto"}"${add_attribute("src", img.circle, 0)}></div></div>
  <div class="${"z-10 px-8 text-center w-full py-16 md:py-[16vw] 2xl:py-[15vw] md:w-2/3 xl:w-1/2"}"><div class="${"text-tan"}"><div class="${"text-2xl uppercase"}"><!-- HTML_TAG_START -->${render(article.missionHeadline)}<!-- HTML_TAG_END --></div></div>
    <div class="${"py-4 text-textGray"}"><!-- HTML_TAG_START -->${render(article.additionalDescription)}<!-- HTML_TAG_END --></div>
    <div class="${""}"><form class="${"inline-block p-4"}" action="${"/about"}"><a href="${"/about"}"><button class="${"btn-std hover:bg-darkBeige w-[160px] p-2 bg-beige uppercase"}">Learn More</button></a></form>
      <form class="${"inline-block"}" action="${"/careers"}"><a href="${"/careers"}"><button class="${"btn-std hover:bg-darkBeige w-[160px] p-2 bg-beige uppercase"}">Work With Us</button></a></form></div></div></div>
<div class="${"bg-totBandBg bg-center bg-cover bg-no-repeat p-8 pb-16 flex flex-wrap pt-16 md:pt-24 -mt-4 overflow-y-hidden overflow-x-hidden"}"><div class="${"relative w-full md:w-1/2 flex items-center pr-0 md:pr-20 xl:pr-24 "}"><div class="${""}"><img class="${"max-w-[130%] -ml-8"}"${add_attribute("src", img.castle, 0)}></div>
    <div class="${"absolute w-3/4 z-1 -ml-12 pt-[15rem] md:pt-[20rem] 2xl:pt-[30rem]"}"><img style="${"transform: translate(0," + escape(-yPos * 0.1, true) + "px)"}" class="${"max-w-[140%]"}"${add_attribute("src", img.tot, 0)}></div></div>
  <div class="${"z-10 w-full md:w-1/2 flex flex-wrap"}"><div class="${"w-full"}"><h2 class="${"pb-2"}">OUR GAMES</h2>
      <h2 class="${"pb-2 text-4xl"}">Threads of Time</h2>
      <hr>
      <div class="${"pt-2 pb-4 text-textGray style-dato-st"}"><!-- HTML_TAG_START -->${render(article.threadsOfTimeIntro)}<!-- HTML_TAG_END --></div>
      <form class="${"inline-block pb-4"}" action="${"/games"}"><a href="${"https://www.threadsoftimegame.com"}"><button class="${"btn-std hover:bg-beige border-2 border-textGray py-2 px-6 bg-tan text-charcoal uppercase"}">Learn More</button></a></form></div></div></div>` : ``}`;
});
export {
  Page as default
};
