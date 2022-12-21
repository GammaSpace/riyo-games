<script>
  import { onMount } from 'svelte';
  import { PUBLIC_DATO_TOKEN } from '$env/static/public';
  import { render as htmlRender } from 'datocms-structured-text-to-html-string';
  import { loaded } from "../../stores";
  import TabardBottom from "../../svg/tabard_bottom.svelte";
  import TabardBody from "../../svg/tabard_body.svelte";

  const token = PUBLIC_DATO_TOKEN;

  let article = "";
  let ctas = "";

  let img = {
    divider: "/img/about/divider.png",
    logo: "/img/logos/riyo_games_logo_586x288.png",
    totTitle: "/img/logos/threads_of_time_logo.png",
    ruleOfLaw: "/img/ui/rule_of_law.png",
    swordGif: "/img/gif/sword.gif",
    dinosGif: "/img/gif/dinos.gif",
  }

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
            gamesModel {
              title,
              totDescription {
                value
              },
              moreDetails {
                value
              },
              features {
                value
              },
              inDevelopment {
                value
              }
            },
            allCallToActions {
              title,
              link,
              svg {
                url
              },
              cta {
                value,
              }
            }
          }`
        }),
      }
    )
    .then( res => res.json() )
    .then( ( res ) => {
      article = res.data.gamesModel;
      ctas = res.data.allCallToActions;
      loaded.set( true );
    })
    .catch( ( error ) => {
      console.log( error );
    });
  })  

  let yPos = 0;

  function hoverTabard( toggle ) {
    /*console.log("hovering!");
    if ( toggle ) {
      console.log(document.getElementById("tabard-body"));
      document.getElementById("tabard-body").style.fill = "#b3a78b";
      document.getElementById("tabard-bottom").style.fill = "#b3a78b";
    } else {
      document.getElementById("tabard-body").style.fill = "#d3c7ab";
      document.getElementById("tabard-bottom").style.fill = "#d3c7ab";
    }*/
  }
</script>

<svelte:window bind:scrollY={yPos}/>

{ #if article.title != undefined }
  <div class="bg-welcomeBandBg bg-cover bg-center bg-beige p-8 pb-12 flex flex-wrap pt-12 justify-center">  
    <div class="mb-12 w-full justify-center flex flex-wrap">
      <div class="flex flex-wrap justify-center">
        <div class="w-5/6 md:w-1/2 flex flex-wrap justify-center items-center">
          <img alt="Horizontal Rule" class="w-[30%] md:w-[35%] h-[1.5px] md:h-[1px]" src={img.ruleOfLaw} />
          <h1 class="w-[40%] md:w-[30%] text-center mb-2">Games</h1>
          <img alt="Horizontal Rule" class="w-[30%] md:w-[35%] h-[1.5px] md:h-[1px]" src={img.ruleOfLaw} />  
        </div>
        <img alt="Threads Of Time Game Logo" class="mx-auto w-full md:w-[90%] xl:w-[80%]" src={img.totTitle} />
        <div class="flex flex-wrap justify-center items-center">
        <div class="w-full md:w-2/3 xl:w-1/2 mt-8 text-textGray text-center style-dato-header">
          { @html htmlRender( article.totDescription ) }
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mission-mask relative flex flex-wrap p-8 justify-center items-center -mt-4">
    <div class="bg-missionBandBg bg-center bg-cover bg-no-repeat absolute w-full h-full">
    </div>
    <div class="z-10 w-full pb-8 md:px-0 mt-12 mb-16 md:w-5/6 flex flex-wrap justify-center">
      <h1 class="w-full text-beige">Screenshots</h1>
      <hr class="w-full mb-4">
      <div class="w-full flex flex-wrap justify-center">
        <div class="w-full pr-0 pb-8 md:w-1/2 md:pr-4 md:pb-0"><img alt="Game Screenshot" class="w-full" src={img.swordGif}/></div>
        <div class="w-full pl-0 pb-8 md:w-1/2 md:pl-4 md:pb-0"><img alt="Game Screenshot" class="w-full" src={img.dinosGif}/></div>
      </div>
    </div>
  </div>
  <div class="mission-mask relative flex flex-wrap p-8 justify-center items-center -mt-8">
    <div class="bg-careersBandMidBg bg-center bg-cover bg-no-repeat absolute w-full h-full">
    </div>
    <div class="z-10 w-full md:px-0 mt-12 mb-8 md:w-5/6 flex flex-wrap justify-center">
      <div class="w-full lg:w-1/2 md:pr-[7%] pb-4">
        <h1>About the Game</h1>
        <img alt="Horizontal Rule" src={img.divider}/>
        <div class="py-4 text-textGray style-dato-st">
          { @html htmlRender( article.moreDetails ) }
        </div>
      </div>
      <div class="w-full lg:w-1/2 md:pr-[7%] pb-4">
        <h1>Features</h1>
        <img alt="Horizontal Rule" src={img.divider}/>
        <div class="py-4 text-textGray style-dato-st">
          { @html htmlRender( article.features ) }
        </div>
      </div>
    </div>
    <div class="z-10 w-full pb-8 md:pb-0 md:px-0 mb-8 md:w-5/6 flex flex-wrap justify-center">
      <div class="w-full pb-4 text-textGray flex flex-wrap justify-center items-top">
        { #each ctas as cta (cta.title) }
          <div class="w-[220px] ml-5 mr- mb-8 relative" on:mouseenter={()=>hoverTabard(true)} on:mouseleave={hoverTabard(false)}>
            <div class="w-full top-0 z-5 h-full">
              <TabardBody />
              <TabardBottom />
            </div>
            <div class="absolute z-10 py-4 px-6 top-0 text-center text-lg">
              <a href={cta.link}>
                <div class="w-2/3 mx-auto mb-4"><img alt="Social Media Icon" src={cta.svg.url}/></div>
                <p class="font-menu text-charcoal text-lg uppercase">{ cta.title }</p>
              </a>
              <div class="style-dato-st mt-4">  
                { @html htmlRender( cta.cta ) }
              </div>
            </div>
          </div>
        { /each }
      </div>
    </div>
  </div>
  <div class="bg-aboutBandBottomBg bg-center bg-cover bg-no-repeat p-8 flex flex-wrap pt-16 md:pt-16 justify-center -mt-24 md:-mt-16">  
    <div class="w-full md:mt-12 md:w-5/6 mt-12 mb-16 flex flex-wrap">
      <div class="w-full text-tan text-left flex flex-wrap">  
        <h1 class="w-full text-center">CURRENTLY IN DEVELOPMENT</h1>
        <hr class="w-5/6 mx-auto border-tan" />
        <div class="w-full text-center pt-4 style-dato-st">
          { @html htmlRender( article.inDevelopment ) }
        </div>
      </div>
    </div>
  </div>
{ /if }