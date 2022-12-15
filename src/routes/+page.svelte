<script>
  import { onMount } from 'svelte';
  import { PUBLIC_DATO_TOKEN } from '$env/static/public';
  import { render as htmlRender } from 'datocms-structured-text-to-html-string';
  import { loaded } from '../stores';

  const token = PUBLIC_DATO_TOKEN;

  const homeLinks = [ 
    ["about","/about"],
    ["careers","/careers"],
    ["games","https://www.threadsoftimegame.com"],
    ["contact","contact"]
  ]

  let handActive = Array( homeLinks.length );

  let article = "";

  onMount( async ()=> {
    fetch(
      'https://graphql.datocms.com/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          query: `{
            homepage {
              title,
              studioDescription {
                value
              },
              missionHeadline {
                value
              },
              additionalDescription {
                value
              },
              threadsOfTimeIntro {
                value
              }
            }
          }`
        }),
      }
    )
    .then( res => res.json() )
    .then( ( res ) => {
      article = res.data.homepage;
      loaded.set( true );
    })
    .catch( ( error ) => {
      console.log( error );
    });

    for ( let i = 0; i < handActive.length; i++ ) {
      handActive[i] = [ undefined, false ];
    }
    handActive[0][1] = true;
  })  

  let img = {
    logo: "/img/logos/riyo_games_logo_586x288.png",
    hero: "/img/home/welcome_band_hero.png", 
    portal: "/img/home/welcome_band_portal.png",
    circle: "/img/home/mission_bg_circle.svg",
    tot: "/img/home/tot_band_title.png",
    castle: "img/home/tot_band_portal.png",
    mickey: "/img/ui/nav_mickey_hand.png",
    ruleOfLaw: "/img/ui/rule_of_law.png"
  }

  let yPos = 0;
  let winWidth = 0;

  function handleMickey(id) {
    for ( let i = 0; i < handActive.length; i++ ) {
      handActive[i][1] = false;
    }
    handActive[id][1] = true;
  }
</script>

<svelte:window bind:scrollY={yPos} bind:innerWidth={winWidth}/>

{ #if article.title != undefined }
<div class="bg-welcomeBandBg bg-cover bg-center p-8 pb-12 pt-16 flex flex-wrap pt-12 pb-24 md:pl-[10%]">
  <div class="w-full mt-16 md:w-1/2">
    <img class="mb-8" src={img.logo} />
    <!--hr class="-mt-12" /-->
    <img class="-mt-12 h-[2px] object-left" src={img.ruleOfLaw}/>
    <div class="pt-8 pb-4 text-textGray style-dato-header">
      { @html htmlRender( article.studioDescription ) }
    </div>
    <img class="mb-2 h-[2px] object-left" src={img.ruleOfLaw}/>
    <div class="flex flex-wrap justify-center relative">
      <div class="w-1/2 md:w-full">
        { #each homeLinks as link, i }
        <div class="">
          <a bind:this={handActive[i][0]} on:mouseenter={()=>handleMickey(i)} on:mouseleave={()=>{handActive[i][1]=false}} href="{ link[1] }">
            { #if handActive[i][1] }
              <div class="pt-2 absolute mickey-bounce inline-block w-[40px]"><img class="inline-block" src={img.mickey}/></div>
              <span class="h-[40px] pl-12 pt-2 inline-block uppercase text-lg">{ link[0] }</span>
              { :else }
              <span class="homepage-menu h-[40px] pt-2 inline-block uppercase text-lg">{ link[0] }</span>
            {/if}
            <img class="w-full md:w-1/3 my-1 h-[2px] object-left" src={img.ruleOfLaw}/>
          </a>
        </div>
        { /each }
      </div>
    </div>
  </div>
  <div class="relative w-full md:w-1/2 flex justify-center items-center">
    <div class=""><img class="-mr-8 max-w-[140%] mt-8 md:mt-0 float-right" src={img.portal}></div>
    <div class="absolute z-1 w-1/2 ml-48 md:ml-64 mt-48 md:mt-16 mr-48"><img style="transform: translate(0,{ -yPos * ( winWidth > 768 ? 0.2 : 0.1 )}px)" class="max-w-[140%] overflow-x-hidden" src={img.hero}></div>
  </div>
</div>
<div class="mission-mask relative flex flex-wrap justify-center -mt-4 items-center">
  <div class="bg-missionBandBg bg-center md:bg-cover bg-no-repeat absolute w-full h-full"></div>
  <div class="circle-mask absolute w-full h-full flex flex-wrap justify-center items-center overflow-hidden">
    <div class="absolute w-[130%] sm:w-[110%] md:w-[100%] lg:w-[90%] xl:w-[80%]">
      <img style="transform: translate(0,{-yPos * 0.1}px)" class="mt-64 sm:mt-48 mx-auto" src={img.circle}/>
    </div>
  </div>
  <div class="z-10 px-8 text-center w-full py-16 md:py-[16vw] 2xl:py-[15vw] md:w-2/3 xl:w-1/2">
    <div class="text-tan">
      <div class="text-2xl uppercase">{ @html htmlRender( article.missionHeadline ) }</div>
    </div>
    <div class="py-4 text-textGray">
      { @html htmlRender( article.additionalDescription ) }
    </div>
    <div class="">
      <form class="inline-block p-4" action="/about">
        <a href="/about"><button class="btn-std hover:bg-darkBeige w-[160px] p-2 bg-beige uppercase">Learn More</button></a>
      </form>
      <form class="inline-block" action="/careers">
        <a href="/careers"><button class="btn-std hover:bg-darkBeige w-[160px] p-2 bg-beige uppercase">Work With Us</button></a>
      </form>      
    </div>
  </div>
</div>
<div class="bg-totBandBg bg-center bg-cover bg-no-repeat p-8 pb-16 flex flex-wrap pt-16 md:pt-24 -mt-4 overflow-y-hidden overflow-x-hidden">
  <div class="relative w-full md:w-1/2 flex items-center pr-0 md:pr-20 xl:pr-24 ">
    <div class=""><img class="max-w-[130%] -ml-8" src={img.castle}></div>
    <div class="absolute w-3/4 z-1 -ml-12 pt-[15rem] md:pt-[20rem] 2xl:pt-[30rem]"><img style="transform: translate(0,{ -yPos * ( winWidth > 768 ? 0.2 : 0.1 ) }px)" class="max-w-[140%]" src={img.tot}></div>
  </div>
  <div class="z-10 w-full md:w-1/2 flex flex-wrap">
    <div class="w-full">
      <h2 class="pb-2">OUR GAMES</h2>
      <h2 class="pb-2 text-4xl">Threads of Time</h2>
      <hr />
      <div class="pt-2 pb-4 text-textGray style-dato-st">
        { @html htmlRender( article.threadsOfTimeIntro ) }
      </div>
      <form class="inline-block pb-4" action="/games">
        <a href="https://www.threadsoftimegame.com"><button class="btn-std hover:bg-beige border-2 border-textGray py-2 px-6 bg-tan text-charcoal uppercase">Learn More</button></a>
      </form>
    </div>
  </div>
</div>
{ /if }

