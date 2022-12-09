<script>
  import "../app.css";
  import { page } from '$app/stores';
  import { loaded } from '../stores.js';
  
  const pages = [
    ["home","/"],    
    ["about","/about"],
    ["careers","/careers"],
    ["games","/games"],
    ["contact","/contact"]
  ]

  let yPos = 0;

  let logoImg = "/img/logos/riyo_games_logo_586x288.png";
  let navTabImg = "/img/ui/nav_logo_tab.png";
  let navSelectedImg = "/img/ui/nav_selected_state.png";

  function resetLoaded( page ) {
    if ( navSelected != page ) {
      loaded.set( false );
    }
  }

  let fullyLoaded = false;

  loaded.subscribe( val => {
    fullyLoaded = val;
    console.log( fullyLoaded );
  })

  let showDropdown = false;
  function mobileMenu() {
    showDropdown = !showDropdown
  }

  $: navSelected = $page.url.pathname;
</script>

<svelte:window bind:scrollY={yPos}/>

<div class="bg-transparent {fullyLoaded == false ? "hidden" : "flex flex-wrap"}">
  <div class="block md:hidden header-fade z-40 fixed { yPos > 0 ? "header-gradient" : "bg-transparent"} w-full h-[60px]">
    <!--div class="block md:hidden absolute left-8 top-0"><img class="w-[50px] h-auto" src={navTabImg}/></div-->
    <div on:click={()=>mobileMenu()} class="z-40 block md:hidden text-charcoal h-[48px] w-[48px] -right-1 fixed hover:cursor-pointer">
      <div class="border-2 w-[32px] border-charcoal rounded mt-2"></div>
      <div class="border-2 w-[32px] border-charcoal rounded mt-2"></div>
      <div class="border-2 w-[32px] border-charcoal rounded mt-2"></div>
    </div>
  </div>
  <div
    class={`smooth-menu z-20 block md:hidden text-center w-full fixed overflow-hidden bg-beige text-white ${showDropdown ? "max-h-150" : "max-h-0"}`}>
    <div class="py-4"></div>
    {#each pages as page}
      <div on:click={()=>mobileMenu()} class="py-4 text-center"><h4 class="text-textGray font-menu uppercase"><a href="{ page[1] }">{ page[0] }</a></h4></div>
    {/each}
  </div>
  <div class="hidden md:block header-fade z-40 fixed p-4 { yPos > 0 ? "header-gradient" : "bg-transparent"} w-full h-[60px]">
    <!--div class="absolute left-8 top-0"><img class="w-[50px] h-auto" src={navTabImg}/></div-->
    <div class="absolute right-8">
      { #each pages as page }
      <span class="relative pl-4">
        <h4 class="inline-block uppercase"><a on:click={()=>resetLoaded(page[1])} href="{ page[1] }">{ page[0] }</a></h4>
        { #if navSelected == page[1] }
          <div class="absolute -top-[19px] left-1/2"><img class="mx auto w-[70%]" src={navSelectedImg}/></div>
        { /if }
      </span>
      { /each }
    </div>
  </div>
  <div class="w-full min-h-[calc(100vh-70px)]">
    <slot />
  </div>
  <div class="pt-4 px-8 pb-12 bg-tan w-full h-[70px] flex flex-wrap">
    <!--div class="w-1/3 md:w-1/6 text-left"><p><img class="h-[40px]" src={logoImg}/></p></div-->
    <div class="w-1/2 md:w-1/3 leading-8 text-left"><span class="font-menu inline-block text-textGray">&#169; 2022 Riyo Games</span></div>
    <div class="w-1/2 md:w-2/3 text-right">
      <h4 class="inline-block font-menu uppercase"><a href="/privacy">Privacy Policy</a></h4>
      <div class="hidden md:inline-block">
      { #each pages as page }
        <span class="pl-4"><h4 class="inline-block uppercase"><a href="{ page[1] }">{ page[0] }</a></h4></span>
      { /each }
      </div>
    </div>
  </div>
</div>
<div class="bg-beige absolute top-0 left-0 w-[100vw] h-[100vh] {fullyLoaded == true ? "hidden" : "flex flex-wrap"}">
</div>