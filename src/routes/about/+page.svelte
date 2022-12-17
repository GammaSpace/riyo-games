<script>
  import { onMount } from 'svelte';
  import { PUBLIC_DATO_TOKEN } from '$env/static/public';
  import { render as htmlRender } from 'datocms-structured-text-to-html-string';
  import { loaded } from '../../stores';

  const token = PUBLIC_DATO_TOKEN;

  let article = "";
  let bios = "";

  let bioPage = 0;

  let img = {
    divider: "/img/about/divider.png",
    timeRule: "/img/ui/time_rule.png",
    timeRuleBeige: "/img/ui/time_rule_beige.png",
    ruleOfLaw: "/img/ui/rule_of_law.png",
    logo: "/img/logos/riyo_games_logo_586x288.png",
    mickey: "/img/ui/nav_mickey_hand.png",
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
            about {
              title,
              description {
                value
              },
              storyHeader,
              story {
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
              },
              portrait {
                url
              },
            }
          }`
        }),
      }
    )
    .then( res => res.json() )
    .then( ( res ) => {
      article = res.data.about;
      bios = res.data.allBios;
      console.log( bios );
      //goPage( 0 );
      //console.log( article );
      loaded.set( true );
    })
    .catch( ( error ) => {
      console.log( error );
    });
  })  

  let yPos = 0;
  let winWidth = 0;
  let pageDiv = 1;
  let curBios = [0];

  $: pageDiv = winWidth <= 768 ? 1 : 2;

  function goPage( pg ) {
    //console.log( pg );
    //let newPage = Math.min( Math.max( pg, 0 ), Math.ceil( bios.length / pageDiv ) - 1 );
    //console.log( newPage );

    //bioPage = newPage;
    //let pageIndex = bioPage * pageDiv; 
    //console.log( bioPage, pageIndex )
    //curBios = pageDiv == 1 || bioPage + 1 >= Math.ceil( bios.length / pageDiv ) ? [pageIndex] : [pageIndex, pageIndex + 1]
  }
</script>

<svelte:window bind:scrollY={yPos} bind:innerWidth={winWidth} on:resize={goPage(bioPage)}/>

{ #if article.title != undefined }
  <div class="bg-welcomeBandBg bg-cover bg-center bg-beige p-8 pb-12 flex flex-wrap pt-12 justify-center">  
    <div class="mb-12 w-full justify-center flex flex-wrap">
      <div class="flex flex-wrap max-w-[580px]">
        <div class="w-full flex flex-wrap justify-center items-center">
          <img class="w-[35%] h-[1.5px] md:h-auto" src={img.ruleOfLaw} />
          <h1 class="w-[30%] text-center mb-2">About</h1>
          <img class="w-[35%] h-[1.5px] md:h-auto" src={img.ruleOfLaw} />  
        </div>
        <img class="mx-auto" src={img.logo} />
        <img class="-mt-7 h-[2px] object-left" src={img.ruleOfLaw}/>
        <div class="mt-8 text-textGray text-center style-dato-header">
          { @html htmlRender( article.description ) }
        </div>
      </div>
    </div>
  </div>
  <div class="w-full relative flex flex-wrap justify-center items-center">
    <div class="z-20 w-full -top-[80px] absolute h-[80px] footer-gradient"></div>
    <div class="z-30 mission-mask relative flex flex-wrap p-8 pt-4 justify-center items-center -mt-4">
      <div class="bg-aboutBandMidBg bg-center bg-cover bg-no-repeat absolute w-full h-full">
      </div>
      <div class="z-10 w-full md:px-0 my-16 md:w-5/6 flex flex-wrap justify-center">
        <div class="w-full">
          <h1>{ article.storyHeader }</h1>
          <img class="mb-4 h-[18px] md:h-[22px] object-cover object-left" src={img.timeRuleBeige}/>
          <div class="py-4 text-textGray style-dato-st">
            { @html htmlRender( article.story ) }
          </div>
        </div>
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
          <h1>Careers At Riyo</h1>
          <img class="mb-4 h-[18px] md:h-[22px] object-cover object-left" src={img.timeRuleBeige}/>
          <div class="py-4 flex text-textGray flex-wrap style-dato-st">
            <div class="w-full">{ @html htmlRender( article.workWithUs ) }</div>
            <div class="inline-block">
              <a href="/careers"><button class="mt-2 btn-std w-[160px] p-2 border-2 text-charcoal border-textGray bg-beige hover:bg-midBeige uppercase">Work With Us</button></a>
            </div>      
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-aboutBandBottomBg bg-charcoal g-top bg-no-repeat p-8 pb-16 flex flex-wrap pt-20 justify-center -mt-12">  
    <div class="w-full md:w-5/6 flex flex-wrap">
      <div class="w-full relative text-tan text-left flex flex-wrap">  
        <h1 class="w-full">Our Team</h1>
        { #if bioPage > 0 }
          <!--span class="absolute right-12 top-[18px]" id="bio-page-btn" on:click={()=>goPage( bioPage - 1 )}><img class="-scale-x-100" src={img.mickey}/></span-->
        { /if }
        { #if bioPage + 1 < Math.ceil( bios.length / pageDiv ) }
          <!--span class="absolute right-0 top-[18px]" id="bio-page-btn" on:click={()=>goPage( bioPage + 1 )}><img src={img.mickey}/></span-->
        { /if }
        <img class="mb-4 h-[22px] object-cover object-left" src={img.timeRule}/>
        { #each bios as bio }
          <div class="w-full md:w-1/2 lg:w-1/3 flex flex-wrap mb-4 pr-4">
            <div class="w-1/3 md:w-1/2">
          <!--div class="w-full flex flex-wrap">
            <div class="w-full md:w-1/2 flex flex-wrap relative">
              <div class="w-1/3 py-4 relative"-->
                
              <div class="mr-4 bg-boxBlue border-[4px] md:border-[5px] border-gray-700"><img class="" src={bio.portrait?.url}/></div> 
              <!--/div-->
            </div>
            <div class="w-2/3 md:w-1/2 font-menu">
              <h2 class="text-xl">{bio.name}</h2>
              <h2 class="text-blue-400 pb-1">{bio.role}</h2>
              <hr class="border-tan w-3/4"/>
              <!--p class="pt-2">LV: { bios[bio].level }<br /></p>
              <p>HP: { bios[bio].hp } <span class="text-gray-600">/9999</span></p-->    
            </div>
            <!--div class="py-4 w-full md:w-1/2 style-dato-st">{@html htmlRender( bios[bio].bio)}</div-->    
          </div>
          <!--hr class="ml-[16.6%] w-[83.3%] border-textGray mb-4" /-->
        { /each }
      </div>
    </div>
  </div>
{ /if }