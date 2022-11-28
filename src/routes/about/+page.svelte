<script>
  import { onMount } from 'svelte';
  import { PUBLIC_DATO_TOKEN } from '$env/static/public';
  import { render as htmlRender } from 'datocms-structured-text-to-html-string';
  import { loaded } from '../../stores';

  const token = PUBLIC_DATO_TOKEN;

  let article = "";
  let bios = "";

  let img = {
    divider: "/img/about/divider.png",
    timeRule: "/img/ui/time_rule.png",
    logo: "/img/logos/riyo_games_logo_586x288.png",
    bio: {
      placeholder: "/img/bios/profile_pic.png"
    }
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
            allAbouts {
              title,
              description {
                value
              },
              vision {
                value
              },
              values {
                value
              },
              workWithUs {
                value
              },
            },
            allBios {
              name,
              role
              level,
              hp,
              bio {
                value
              }
            }
          }`
        }),
      }
    )
    .then( res => res.json() )
    .then( ( res ) => {
      article = res.data.allAbouts[0];
      bios = res.data.allBios;
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
      <div class="flex flex-wrap max-w-[580px]">
        <h1 class="w-full text-center mb-2">About</h1>  
        <img class="mx-auto mb-4" src={img.divider}/>
        <img class="mx-auto" src={img.logo} />
        <div class="mt-8 text-textGray text-center style-dato-st">
          { @html htmlRender( article.description ) }
        </div>
      </div>
    </div>
  </div>
  <div class="mission-mask relative flex flex-wrap p-8 justify-center items-center -mt-4">
    <div class="bg-aboutBandMidBg bg-center bg-cover bg-no-repeat absolute w-full h-full">
    </div>
    <div class="z-10 w-full md:px-0 my-16 md:w-5/6 flex flex-wrap justify-center">
      <div class="w-full lg:w-1/2 md:pr-[7%] pb-4">
        <h1>Our Vision</h1>
        <img src={img.divider}/>
        <div class="py-4 text-textGray style-dato-st">
          { @html htmlRender( article.vision ) }
        </div>
      </div>
      <div class="w-full lg:w-1/2 md:pr-[7%] pb-4">
        <h1>Our Values</h1>
        <img src={img.divider}/>
        <div class="py-4 text-textGray style-dato-st">
          { @html htmlRender( article.values ) }
        </div>
      </div>
      <div class="w-full">
        <hr class="md:w-[93%]"/>
        <h1>Careers At Riyo</h1>
        <div class="py-4 flex text-textGray flex-wrap style-dato-st">
          { @html htmlRender( article.workWithUs ) }
          <form class="inline-block" action="/careers">
            <a href="/careers"><button class="mt-2 btn-std w-[160px] p-2 border-2 text-charcoal border-textGray bg-beige hover:bg-midBeige uppercase">Work With Us</button></a>
          </form>      
        </div>
        <hr class="md:w-[93%]"/>
      </div>
    </div>
  </div>
  <div class="bg-aboutBandBottomBg bg-center bg-cover bg-no-repeat p-8 flex flex-wrap pt-8 justify-center -mt-4">  
    <div class="w-full md:w-5/6 flex flex-wrap">
      <div class="w-full text-tan text-left flex flex-wrap">  
        <h1 class="w-full">Our Team</h1>
        <img class="mb-4" src={img.timeRule}/>
        { #each bios as bio }
          <div class="w-full flex flex-wrap">
            <div class="w-full md:w-1/2 flex flex-wrap">
              <div class="w-1/3 py-4 font-menu"><img class="pr-4" src={img.bio.placeholder}/></div> 
              <div class="w-2/3 py-4 font-menu">
                <h2 class="text-xl">{bio.name}</h2>
                <h2 class="text-blue-400 pb-1">{bio.role}</h2>
                <hr class="border-tan w-3/4"/>
                <p class="pt-2">LV: { bio.level }<br /></p>
                <p>HP: { bio.hp } <span class="text-gray-600">/9999</span></p>    
              </div> 
            </div>
            <div class="py-4 w-full md:w-1/2 style-dato-st">{@html htmlRender( bio.bio)}</div>    
          </div>
          <hr class="ml-[16.6%] w-[83.3%] border-textGray mb-4" />
        { /each }
      </div>
    </div>
  </div>
{ /if }