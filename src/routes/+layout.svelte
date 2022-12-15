<script>
  import "../app.css";
  import { page } from '$app/stores';
  import { loaded } from '../stores.js';
  
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

  let socials = [
    [ "https://discord.com/invite/FBdgdbAVbf", "/img/socials/social-discord.svg" ],
    [ "https://twitter.com/riyogames", "/img/socials/social-twitter.svg" ],
    [ "", "/img/socials/social-instagram.svg" ],
    [ "", "/img/socials/social-tiktok.svg" ],
    [ "/contact", "/img/socials/social-news.svg" ],
  ]

  function resetLoaded( page ) {
    if ( navSelected != page ) {
      loaded.set( false );
    }
  }

  let fullyLoaded = false;
  let winWidth = 0;

  loaded.subscribe( val => {
    fullyLoaded = val;
  })

  let showDropdown = false;
  function mobileMenu() {
    showDropdown = !showDropdown
  }

  $: navSelected = $page.url.pathname;
</script>

<svelte:window bind:scrollY={yPos} bind:innerWidth={winWidth}/>

<div class="bg-transparent {fullyLoaded == false ? "hidden" : "flex flex-wrap"}">
  <div class="z-[100] block md:hidden header-fade fixed { yPos > 0 && !showDropdown ? "header-gradient" : "bg-transparent"} w-full h-[60px]">
    <div class="z-[100] block md:hidden absolute left-8 top-0"><img class="w-[50px] h-auto" src={navTabImg}/></div>
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
            <img class="my-2 h-[1.5px] object-left mx-auto w-[40%]" src={ruleOfLaw} />
        </div>
      {/each}
      <div class="py-4 text-center">
        <div class="inline-block">
          { #each socials as social }
            <a class="mx-3" href={social[0]}><img class="inline-block w-[45px] h-auto" src={social[1]}/></a>
          {/each}
        </div>
      </div>
    </div>
  </div>
  <div class="hidden md:block header-fade z-40 fixed p-4 { yPos > 0 ? "header-gradient" : "bg-transparent"} w-full h-[80px]">
    <div class="absolute left-8 top-0"><img class="w-[50px] h-auto" src={navTabImg}/></div>
    <div class="absolute right-8">
      { #each pages as page }
        <span class="relative pl-4">
          <h4 class="inline-block uppercase { navSelected == page[1] ? "text-boxBlue" : "" } hover:text-boxBlue"><a on:click={()=>resetLoaded(page[1])} href="{ page[1] }">{ page[0] }</a></h4>
          { #if navSelected == page[1] }
            <div class="absolute -top-[19px] left-1/2"><img class="mx auto w-[70%]" src={navSelectedImg}/></div>
          { /if }
        </span>
      { /each }
      <div class="pl-4 inline-block">
        { #each socials as social }
          <a href={social[0]}><img class="mx-1 inline-block w-[30px] h-auto" src={social[1]}/></a>
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
          <img class="mb-0 mt-1 h-[30px]" src={logoImg}/>
          { #if winWidth > 768 }
            <span class="font-body text-textGray text-tiny pl-2">&#169; Riyo Inc 2022, All Rights Reserved | <a class="text-tiny underline" href="/privacy">Privacy Policy</a> | Site Design by Fully Illustrated</span>   
          { /if }
        </div>
        { #if winWidth > 768 }
          <!--div class="w-5/6 xl:w-[50%] text-right">
            <div class="hidden md:inline-block"-->
              { #each pages as page }
                <!--span class="pl-4"><h4 class="inline-block uppercase"><a href="{ page[1] }">{ page[0] }</a></h4></span-->
              { /each }
              { #each socials as social }
                <!--a href={social[0]}><img class="mx-1 inline-block w-[30px] h-auto" src={social[1]}/></a-->
              {/each}
            <!--/div>
          </div-->
        { /if }
        { #if winWidth <= 768 }
          <span class="py-2 w-full font-body text-textGray text-tiny">&#169; Riyo Inc 2022, All Rights Reserved | <a class="text-tiny underline" href="/privacy">Privacy Policy</a> | Site Design by Fully Illustrated</span>   
        { /if }
      </div>
    </div>
  </div>
</div>
<div class="bg-beige absolute top-0 left-0 w-[100vw] h-[100vh] {fullyLoaded == true ? "hidden" : "flex flex-wrap"}">
</div>