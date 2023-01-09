<script>
  import "../app.css";
  import { page } from '$app/stores';
  import { render as htmlRender } from 'datocms-structured-text-to-html-string';

  export let data;
  
  const pages = [
    ["home","/"],    
    ["about","/about"],
    ["careers","/careers"],
    ["games","https://www.threadsoftimegame.com"],
    ["contact","/contact"]
  ]

  let yPos = 0;

  let logoImg = "/img/logos/riyo_games_logo_586x288.png";
  let navTabImg = "/img/ui/nav_logo_tab.png";
  let navSelectedImg = "/img/ui/nav_selected_state.png";
  let ruleOfLaw = "/img/ui/rule_of_law.png";

  let winWidth = 0;
  let navSelected = $page.url.pathname;

  let showDropdown = false;
  function mobileMenu() {
    showDropdown = !showDropdown;
  }

  $: navSelected = $page.url.pathname;  
</script>

<svelte:window bind:scrollY={yPos} bind:innerWidth={winWidth}/>

<div class="bg-transparent flex flex-wrap">
  <div class="z-[100] block md:hidden header-fade fixed { yPos > 0 && !showDropdown ? "header-gradient" : "bg-transparent"} w-full h-[60px]">
    <div class="z-[100] block md:hidden absolute left-8 top-0"><img alt="Riyo Games Logo" class="w-[50px] h-auto" src={navTabImg}/></div>
    <div on:click={()=>mobileMenu()} class="z-[90] block md:hidden text-charcoal h-[48px] w-[48px] -right-1 fixed hover:cursor-pointer">
      <div class="border-2 w-[32px] border-charcoal rounded mt-2"></div>
      <div class="border-2 w-[32px] border-charcoal rounded mt-2"></div>
      <div class="border-2 w-[32px] border-charcoal rounded mt-2"></div>
    </div>
  </div>
  <div
    class={`smooth-menu z-[90] block md:hidden text-center w-full fixed overflow-hidden bg-whiteTan text-white ${showDropdown ? "max-h-150" : "max-h-0"}`}>
    <div class="pt-16 pb-4">
      {#each pages as page}
        <div on:click={()=>mobileMenu()} class="text-center">
          <a class="py-4 text-textGray font-menu uppercase text-lg" href="{ page[1] }">{ page[0] }</a>
            <img alt="Horizontal Rule" class="my-2 h-[1.5px] object-left mx-auto w-[40%]" src={ruleOfLaw} />
        </div>
      {/each}
      <div class="py-4 text-center">
        <div class="inline-block">
          { #each data.allSocials as social }
            <a on:click={()=>mobileMenu()} class="mx-3" href={social.link}><img alt="Social Media Icon" class="inline-block w-[45px] h-auto" src={social.svg.url}/></a>
          {/each}
        </div>
      </div>
    </div>
  </div>
  <div class="hidden md:block header-fade z-40 fixed p-4 { yPos > 0 ? "header-gradient" : "bg-transparent"} w-full h-[80px]">
    <div class="absolute left-8 top-0"><img alt="Riyo Games Logo" class="w-[50px] h-auto" src={navTabImg}/></div>
    <div class="absolute right-8">
      { #each pages as page }
        <span class="relative pl-4">
          <h4 class="inline-block uppercase { navSelected == page[1] ? "text-boxBlue" : "" } hover:text-boxBlue"><a href="{ page[1] }">{ page[0] }</a></h4>
          { #if navSelected == page[1] }
            <div class="absolute -top-[19px] left-1/2"><img alt="Navigation Selector" class="mx auto w-[70%]" src={navSelectedImg}/></div>
          { /if }
        </span>
      { /each }
      <div class="pl-4 inline-block">
        { #each data.allSocials as social }
          <a href={social.link}><img alt="Social Media Icon" class="mx-1 inline-block w-[30px] h-auto" src={social.svg.url}/></a>
        {/each}
      </div>
    </div>
  </div>
  <div class="w-full min-h-[calc(100vh-80px)]">
    <slot />
  </div>
  <div class="w-full relative">
    { #if navSelected != "/about" && navSelected != "/games" }
      <div class="z-20 w-full bottom-[90px] absolute h-[80px] footer-gradient"></div>
    { /if }
    <div class="z-30 mission-mask w-full h-[100px] flex flex-wrap items-center relative -mt-8">
      <div class="absolute bg-tan bg-center md:bg-cover bg-no-repeat w-full h-full"></div>
      <div class="pt-2 px-8 absolute w-full flex flex-wrap items-center">
        <div class="w-full text-left flex flex-wrap items-center">      
          <img alt="Riyo Games Logo" class="mb-0 mt-1 h-[30px]" src={logoImg}/>
          { #if winWidth > 768 }
            <span class="font-body text-textGray text-tiny pl-2">&#169; Riyo Inc 2022, All Rights Reserved |</span><span class="style-dato-footer">{@html htmlRender( data.footer.footerContent ) }</span>   
          { /if }
        </div>
        { #if winWidth <= 768 }
          <div class="w-full">
            <span class="py-2 font-body text-textGray text-tiny">&#169; Riyo Inc 2022, All Rights Reserved |</span><span class="style-dato-footer">{@html htmlRender( data.footer.footerContent ) }</span>   
          </div>
        { /if }
      </div>
    </div>
  </div>
</div>