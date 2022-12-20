<script>
  import { render as htmlRender } from 'datocms-structured-text-to-html-string';
	
  export let data;

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

  let yPos = 0;
  let winWidth = 0;
  //let pageDiv = 1;
  //let curBios = [0];

  //$: pageDiv = winWidth <= 768 ? 1 : 2;

  function goPage( pg ) {
    //console.log( pg );
    //let newPage = Math.min( Math.max( pg, 0 ), Math.ceil( data.article.allBioslength / pageDiv ) - 1 );
    //console.log( newPage );

    //bioPage = newPage;
    //let pageIndex = bioPage * pageDiv; 
    //console.log( bioPage, pageIndex )
    //curBios = pageDiv == 1 || bioPage + 1 >= Math.ceil( data.article.allBioslength / pageDiv ) ? [pageIndex] : [pageIndex, pageIndex + 1]
  }
</script>

<svelte:window bind:scrollY={yPos} bind:innerWidth={winWidth} on:resize={goPage(bioPage)}/>

{ #if data.article.about.title != undefined }
  <div class="bg-welcomeBandBg bg-cover bg-center bg-beige p-8 pb-12 flex flex-wrap pt-12 justify-center">  
    <div class="mb-12 w-full justify-center flex flex-wrap">
      <div class="flex flex-wrap max-w-[580px]">
        <div class="w-full flex flex-wrap justify-center items-center">
          <img class="w-[35%] h-[1.5px] md:h-auto" src={img.ruleOfLaw} />
          <h1 class="w-[30%] text-center mb-2">{data.article.about.title}</h1>
          <img class="w-[35%] h-[1.5px] md:h-auto" src={img.ruleOfLaw} />  
        </div>
        <img class="mx-auto" src={img.logo} />
        <img class="-mt-7 h-[2px] object-left" src={img.ruleOfLaw}/>
        <div class="mt-8 text-textGray text-center style-dato-header">
          { @html htmlRender( data.article.about.description ) }
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
          <h1>{ data.article.about.storyHeader }</h1>
          <img class="mb-4 h-[18px] md:h-[22px] object-cover object-left" src={img.timeRuleBeige}/>
          <div class="py-4 text-textGray style-dato-st">
            { @html htmlRender( data.article.about.story ) }
          </div>
        </div>
        <div class="w-full lg:w-1/2 md:pr-[7%] pb-4">
          <h1>{data.article.about.visionHeader}</h1>
          <img src={img.divider}/>
          <div class="py-4 text-textGray style-dato-st">
            { @html htmlRender( data.article.about.vision ) }
          </div>
        </div>
        <div class="w-full lg:w-1/2 md:pr-[7%] pb-4">
          <h1>{data.article.about.valuesHeader}</h1>
          <img src={img.divider}/>
          <div class="py-4 text-textGray style-dato-st">
            { @html htmlRender( data.article.about.values ) }
          </div>
        </div>
        <div class="w-full">
          <h1>{data.article.about.careersHeader}</h1>
          <img class="mb-4 h-[18px] md:h-[22px] object-cover object-left" src={img.timeRuleBeige}/>
          <div class="py-4 flex text-textGray flex-wrap style-dato-st">
            <div class="w-full">{ @html htmlRender( data.article.about.workWithUs ) }</div>
            <div class="inline-block">
              <a href="/careers"><button class="mt-2 btn-std w-[160px] p-2 border-2 text-charcoal border-textGray bg-beige hover:bg-midBeige uppercase">{data.article.about.careersButton}</button></a>
            </div>      
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-aboutBandBottomBg bg-charcoal g-top bg-no-repeat p-8 pb-16 flex flex-wrap pt-20 justify-center -mt-12">  
    <div class="w-full md:w-5/6 flex flex-wrap">
      <div class="w-full relative text-tan text-left flex flex-wrap">  
        <h1 class="w-full">{data.article.about.teamHeader}}</h1>
        <img class="mb-4 h-[22px] object-cover object-left" src={img.timeRule}/>
        { #each data.article.allBios as bio }
          <div class="w-full md:w-1/2 lg:w-1/3 flex flex-wrap mb-4 pr-4">
            <div class="w-1/3 md:w-1/2">
              <div class="mr-4 bg-boxBlue border-[4px] md:border-[5px] border-gray-700"><img class="" src={bio.portrait?.url}/></div> 
            </div>
            <div class="w-2/3 md:w-1/2 font-menu">
              <h2 class="text-xl">{bio.name}</h2>
              <h2 class="text-blue-400 pb-1">{bio.role}</h2>
              <hr class="border-tan w-3/4"/>
            </div>  
          </div>
        { /each }
      </div>
    </div>
  </div>
{ /if }