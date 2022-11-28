<script>
  import { onMount } from 'svelte';
  import { PUBLIC_DATO_TOKEN } from '$env/static/public';
  import { render as htmlRender } from 'datocms-structured-text-to-html-string';
  import { loaded } from "../../stores";

  const token = PUBLIC_DATO_TOKEN;

  let article = "";

  let img = {
    divider: "/img/about/divider.png",
    logo: "/img/logos/riyo_games_logo_586x288.png",
    totTitle: "/img/logos/threads_of_time_logo.png",
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
            allGames {
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
            }
          }`
        }),
      }
    )
    .then( res => res.json() )
    .then( ( res ) => {
      article = res.data.allGames[0];
      //console.log( article );
      loaded.set( true );
    })
    .catch( ( error ) => {
      console.log( error );
    });
  })  

  let yPos = 0;
</script>

<svelte:window bind:scrollY={yPos}/>

{ #if article.title != undefined }
  <div class="bg-welcomeBandBg bg-cover bg-center bg-beige p-8 pb-12 flex flex-wrap pt-12 justify-center">  
    <div class="mb-12 w-full justify-center flex flex-wrap">
      <div class="flex flex-wrap">
        <h1 class="w-full text-center mb-2">Games</h1>  
        <img class="mx-auto mb-4 w-1/2" src={img.divider}/>
        <img class="mx-auto w-full md:w-[90%] xl:w-[80%]" src={img.totTitle} />
        <div class="flex flex-wrap justify-center items-center">
        <div class="w-full md:w-2/3 xl:w-1/2 mt-8 text-textGray text-center style-dato-st">
          { @html htmlRender( article.totDescription ) }
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mission-mask relative flex flex-wrap p-8 justify-center items-center -mt-4">
    <div class="bg-missionBandBg bg-center bg-cover bg-no-repeat absolute w-full h-full">
    </div>
    <div class="z-10 w-full md:px-0 mt-8 mb-16 md:w-5/6 flex flex-wrap justify-center">
      <h1 class="w-full text-beige">Screenshots</h1>
      <hr class="w-full mb-4">
      <div class="w-full flex flex-wrap justify-center">
        <div class="w-full pr-0 pb-8 md:w-1/2 md:pr-4 md:pb-0"><img class="w-full" src={img.swordGif}/></div>
        <div class="w-full pl-0 pb-8 md:w-1/2 md:pl-4 md:pb-0"><img class="w-full" src={img.dinosGif}/></div>
      </div>
    </div>
  </div>
  <div class="mission-mask relative flex flex-wrap p-8 justify-center items-center -mt-4">
    <div class="bg-careersBandMidBg bg-center bg-cover bg-no-repeat absolute w-full h-full">
    </div>
    <div class="z-10 w-full md:px-0 mt-16 mb-8 md:w-5/6 flex flex-wrap justify-center">
      <div class="w-full lg:w-1/2 md:pr-[7%] pb-4">
        <h1>About the Game</h1>
        <img src={img.divider}/>
        <div class="py-4 text-textGray style-dato-st">
          { @html htmlRender( article.moreDetails ) }
        </div>
      </div>
      <div class="w-full lg:w-1/2 md:pr-[7%] pb-4">
        <h1>Features</h1>
        <img src={img.divider}/>
        <div class="py-4 text-textGray style-dato-st">
          { @html htmlRender( article.features ) }
        </div>
      </div>
    </div>
  </div>
  <div class="bg-aboutBandBottomBg bg-center bg-cover bg-no-repeat p-8 flex flex-wrap pt-8 justify-center -mt-4">  
    <div class="w-full md:w-5/6 my-8 flex flex-wrap">
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