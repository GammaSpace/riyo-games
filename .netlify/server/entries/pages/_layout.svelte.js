import { c as create_ssr_component, b as subscribe, e as escape, d as add_attribute, f as each } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
import { w as writable } from "../../chunks/index2.js";
const app = "";
const loaded = writable(false);
let logoImg = "/img/logos/riyo_games_logo_586x288.png";
let navTabImg = "/img/ui/nav_logo_tab.png";
let navSelectedImg = "/img/ui/nav_selected_state.png";
let ruleOfLaw = "/img/ui/rule_of_law.png";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let navSelected;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const pages = [
    ["home", "/"],
    ["about", "/about"],
    ["careers", "/careers"],
    ["games", "https://www.threadsoftimegame.com"],
    ["contact", "/contact"]
  ];
  let socials = [
    ["https://discord.com/invite/FBdgdbAVbf", "/img/socials/social-discord.svg"],
    ["https://twitter.com/riyogames", "/img/socials/social-twitter.svg"],
    ["", "/img/socials/social-instagram.svg"],
    ["", "/img/socials/social-tiktok.svg"],
    ["/contact", "/img/socials/social-news.svg"]
  ];
  let fullyLoaded = false;
  loaded.subscribe((val) => {
    fullyLoaded = val;
  });
  navSelected = $page.url.pathname;
  $$unsubscribe_page();
  return `

<div class="${"bg-transparent " + escape(fullyLoaded == false ? "hidden" : "flex flex-wrap", true)}"><div class="${"z-[100] block md:hidden header-fade fixed " + escape(
    "bg-transparent",
    true
  ) + " w-full h-[60px]"}"><div class="${"z-[100] block md:hidden absolute left-8 top-0"}"><img class="${"w-[50px] h-auto"}"${add_attribute("src", navTabImg, 0)}></div>
    <div class="${"z-[90] block md:hidden text-charcoal h-[48px] w-[48px] -right-1 fixed hover:cursor-pointer"}"><div class="${"border-2 w-[32px] border-charcoal rounded mt-2"}"></div>
      <div class="${"border-2 w-[32px] border-charcoal rounded mt-2"}"></div>
      <div class="${"border-2 w-[32px] border-charcoal rounded mt-2"}"></div></div></div>
  <div${add_attribute("class", `smooth-menu z-[90] block md:hidden text-center w-full fixed overflow-hidden bg-whiteTan text-white ${"max-h-0"}`, 0)}><div class="${"pt-16 pb-4"}">${each(pages, (page2) => {
    return `<div class="${"text-center"}"><a class="${"py-4 text-textGray font-menu uppercase text-lg"}"${add_attribute("href", page2[1], 0)}>${escape(page2[0])}</a>
            <img class="${"my-2 h-[1.5px] object-left mx-auto w-[40%]"}"${add_attribute("src", ruleOfLaw, 0)}>
        </div>`;
  })}
      <div class="${"py-4 text-center"}"><div class="${"inline-block"}">${each(socials, (social) => {
    return `<a class="${"mx-3"}"${add_attribute("href", social[0], 0)}><img class="${"inline-block w-[45px] h-auto"}"${add_attribute("src", social[1], 0)}></a>`;
  })}</div></div></div></div>
  <div class="${"hidden md:block header-fade z-40 fixed p-4 " + escape("bg-transparent", true) + " w-full h-[80px]"}"><div class="${"absolute left-8 top-0"}"><img class="${"w-[50px] h-auto"}"${add_attribute("src", navTabImg, 0)}></div>
    <div class="${"absolute right-8"}">${each(pages, (page2) => {
    return `<span class="${"relative pl-4"}"><h4 class="${"inline-block uppercase " + escape(navSelected == page2[1] ? "text-boxBlue" : "", true) + " hover:text-boxBlue"}"><a${add_attribute("href", page2[1], 0)}>${escape(page2[0])}</a></h4>
          ${navSelected == page2[1] ? `<div class="${"absolute -top-[19px] left-1/2"}"><img class="${"mx auto w-[70%]"}"${add_attribute("src", navSelectedImg, 0)}></div>` : ``}
        </span>`;
  })}
      <div class="${"pl-4 inline-block"}">${each(socials, (social) => {
    return `<a${add_attribute("href", social[0], 0)}><img class="${"mx-1 inline-block w-[30px] h-auto"}"${add_attribute("src", social[1], 0)}></a>`;
  })}</div></div></div>
  <div class="${"w-full min-h-[calc(100vh-80px)]"}">${slots.default ? slots.default({}) : ``}</div>
  <div class="${"w-full relative"}">${navSelected != "/about" && navSelected != "/games" ? `<div class="${"z-20 w-full bottom-[90px] absolute h-[80px] footer-gradient"}"></div>` : ``}
    <div class="${"z-30 mission-mask w-full h-[100px] flex flex-wrap items-center relative -mt-8"}"><div class="${"absolute bg-tan bg-center md:bg-cover bg-no-repeat w-full h-full"}"></div>
      <div class="${"pt-2 px-8 absolute w-full flex flex-wrap items-center"}"><div class="${"w-full text-left flex flex-wrap items-center"}"><img class="${"mb-0 mt-1 h-[30px]"}"${add_attribute("src", logoImg, 0)}>
          ${``}</div>
        ${``}
        ${`<span class="${"py-2 w-full font-body text-textGray text-tiny"}">© Riyo Inc 2022, All Rights Reserved | <a class="${"text-tiny underline"}" href="${"/privacy"}">Privacy Policy</a> | Site Design by Fully Illustrated</span>`}</div></div></div></div>
<div class="${"bg-beige absolute top-0 left-0 w-[100vw] h-[100vh] " + escape(fullyLoaded == true ? "hidden" : "flex flex-wrap", true)}"></div>`;
});
export {
  Layout as default
};
