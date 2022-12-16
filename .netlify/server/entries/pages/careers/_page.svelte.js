import { c as create_ssr_component, d as add_attribute, e as escape, f as each } from "../../../chunks/index.js";
import { render } from "datocms-structured-text-to-html-string";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let article = "";
  let positions = "";
  let img = {
    divider: "/img/about/divider.png",
    logo: "/img/logos/riyo_games_logo_586x288.png",
    timeRuleBeige: "/img/ui/time_rule_beige.png"
  };
  let posDom = Array();
  return `

${article.title != void 0 ? `<div class="${"bg-careersBandTopBg bg-cover bg-center bg-no-repeat p-8 pb-12 flex flex-wrap pt-12 justify-center"}"><div class="${"mt-8 mb-20 w-full md:w-5/6 justify-center items-center flex flex-wrap"}"><div class="${"w-full md:w-1/3 xl:w-1/4 mb-4 md:mb-0"}"><img class="${"mx-auto"}"${add_attribute("src", img.logo, 0)}></div>
      <div class="${"w-full md:w-2/3 xl:w-3/4 pl-0 md:px-16"}"><h1>Careers</h1>
        <img${add_attribute("src", img.divider, 0)}>
        <div class="${"text-textGray style-dato-header mt-4"}"><!-- HTML_TAG_START -->${render(article.description)}<!-- HTML_TAG_END --></div></div></div></div>
  <div class="${"w-full relative flex flex-wrap justify-center items-center"}"><div class="${"z-10 w-full top-[-115px] absolute h-[80px] footer-gradient"}"></div>
    <div class="${"z-20 relative mission-mask flex flex-wrap p-8 pb-20 justify-center items-center -mt-16"}"><div class="${"bg-careersBandMidBg bg-top bg-tan bg-cover bg-no-repeat absolute w-full h-full"}"></div>
      <div class="${"z-10 w-full md:px-0 mt-12 mb-4 md:w-5/6 flex flex-wrap justify-center"}"><div class="${"w-full lg:w-1/2 md:pr-[7%] pb-4"}"><h1>Diversity &amp; Inclusion</h1>
          <img${add_attribute("src", img.divider, 0)}>
          <div class="${"py-4 text-textGray style-dato-st"}"><!-- HTML_TAG_START -->${render(article.diversityInclusion)}<!-- HTML_TAG_END --></div></div>
        <div class="${"w-full lg:w-1/2 md:pr-[7%] pb-4"}"><h1>Commitment to Improvement</h1>
          <img${add_attribute("src", img.divider, 0)}>
          <div class="${"py-4 text-textGray style-dato-st"}"><!-- HTML_TAG_START -->${render(article.commitmentToImprovement)}<!-- HTML_TAG_END --></div></div></div></div>
    <div class="${"z-20 relative bg-tan flex flex-wrap p-8 pb-20 justify-center items-center -mt-16"}"><div class="${"z-10 w-full md:px-0 mb-8 md:w-5/6 flex flex-wrap justify-center "}"><div class="${"w-full"}"><h1 class="${"inline-block pr-3"}">Open Positions</h1><h1 class="${"inline-block text-boxBlue"}">${escape(positions.length > 0 ? `(${positions.length})` : "")}</h1>
          <div class="${"pb-4 text-textGray"}">${each(positions, (job, id) => {
    return `<div class="${"job-shadow mt-4 px-4 py-4 " + escape(
      posDom[id][1] == "Read More" ? " bg-whiteTan" : " bg-charcoal",
      true
    )}"><div class="${"w-full relative flex flex-wrap justify-center items-center font-menu"}"><h2 class="${"pb-2 md:pb-0 text-xl text-center md:text-left w-full md:w-[calc(100%-140px)] pr-4 " + escape(
      posDom[id][1] == "Read More" ? " text-textGray" : " text-boxBlue",
      true
    )}">${escape(job.title)}</h2>
                  <div class="${"w-full text-center md:w-auto"}"><button class="${"uppercase my-2 md:my-0 font-menu text-center w-[120px] md:w-[140px] h-[40px] bg-charcoal px-4 py-2 " + escape(
      posDom[id][1] == "Read More" ? "text-beige hover:text-boxBlue" : " text-textGray hover:text-darkBeige",
      true
    )}">${escape(posDom[id][1])}
                    </button></div>
                </div></div>
              <div class="${"max-h-0 bg-whiteTan overflow-y-hidden toggle-job"}"${add_attribute("this", posDom[id][0], 0)}><div class="${"px-4 py-4 w-[70%] style-job text-textGray"}"><!-- HTML_TAG_START -->${job.description}<!-- HTML_TAG_END -->
                  <form class="${"inline-block pb-4"}" action="${"/about"}"><a${add_attribute("href", job.applyUrl, 0)}><button class="${"uppercase font-menu text-center w-[120px] md:w-[140px] h-[40px] bg-charcoal text-lg text-beige py-2"}">Apply</button></a>
                  </form></div>
              </div>`;
  })}</div></div></div></div></div>` : ``}`;
});
export {
  Page as default
};
