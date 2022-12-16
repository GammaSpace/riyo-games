import { c as create_ssr_component } from "../../../chunks/index.js";
import { render } from "datocms-structured-text-to-html-string";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let article = "";
  return `

<div class="${"bg-welcomeBandBg bg-cover bg-center bg-beige p-8 pb-12 flex flex-wrap pt-12"}"><div class="${"mb-12 max-w-[900px] w-full text-textGray style-privacy"}"><!-- HTML_TAG_START -->${render(article.content)}<!-- HTML_TAG_END --></div></div>`;
});
export {
  Page as default
};
