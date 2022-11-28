<script>
  import "../app.css";
  import { page } from '$app/stores';
  import { loaded } from '../stores.js';
  
  const pages = [
    ["home","/"],    
    ["about","/about"],
    ["careers","/careers"],
    ["games","/games"],
    ["contact","contact"]
  ]

  let yPos = 0;

  let logoImg = "/img/logos/riyo_games_logo_586x288.png";
  let navTabImg = "/img/ui/nav_logo_tab.png";
  let navSelectedImg = "/img/ui/nav_selected_state.png";

  function resetLoaded() {
    loaded.set( false );
  }

  let fullyLoaded = false;

  loaded.subscribe( val => {
    fullyLoaded = val;
    console.log( fullyLoaded );
  })

  $: navSelected = $page.url.pathname;
</script>

<svelte:window bind:scrollY={yPos}/>

<div class="bg-transparent {fullyLoaded == false ? "hidden" : "flex flex-wrap"}">
  <div class="header-fade z-40 fixed p-4 { yPos > 0 ? "header-gradient" : "bg-transparent"} w-full h-[60px]">
    <div class="hidden md:block absolute left-8 top-0"><img class="w-[50px] h-auto" src={navTabImg}/></div>
    <div class="hidden md:block absolute right-8">
      { #each pages as page }
      <span class="relative pl-4">
        <h4 class="inline-block uppercase"><a on:click={()=>resetLoaded()} href="{ page[1] }">{ page[0] }</a></h4>
        { #if navSelected == page[1] }
          <div class="absolute -top-[19px] left-1/2"><img class="mx auto w-[70%]" src={navSelectedImg}/></div>
        { /if }
      </span>
      { /each }
    </div>
  </div>
  <div class="w-full min-h-[calc(100vh-140px)]">
    <slot />
  </div>
  <div class="pt-4 px-8 pb-12 bg-tan w-full h-[70px]">
    <div class="z-40 hidden md:block absolute left-8"><p><img class="h-[40px]" src={logoImg}/></p></div>
    <div class="z-40 hidden md:block absolute right-8">
      { #each pages as page }
      <span class="pl-4"><h4 class="inline-block uppercase"><a href="{ page[1] }">{ page[0] }</a></h4></span>
      { /each }
    </div>
  </div>
</div>
<div class="bg-beige absolute top-0 left-0 w-[100vw] h-[100vh] {fullyLoaded == true ? "hidden" : "flex flex-wrap"}">
</div>