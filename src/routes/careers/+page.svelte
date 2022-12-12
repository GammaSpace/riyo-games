<script>
  import { onMount } from 'svelte';
  import { PUBLIC_DATO_TOKEN } from '$env/static/public';
  import { render as htmlRender } from 'datocms-structured-text-to-html-string';
  import { loaded } from '../../stores';

  const token = PUBLIC_DATO_TOKEN;

  let article = "";
  let positions = "";

  let img = {
    divider: "/img/about/divider.png",
    logo: "/img/logos/riyo_games_logo_586x288.png",
    timeRuleBeige: "/img/ui/time_rule_beige.png",
  }

  let posDom = Array();

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
            allCareers {
              title,
              description {
                value
              },
              diversityInclusion {
                value
              },
              commitmentToImprovement {
                value
              }
            }
          }`
        }),
      }
    )
    .then(  ( res ) => res.json() )
    .then(  ( res ) => {
      article = res.data.allCareers[0];
      //console.log( article );
      loaded.set( true );
    })
    .catch( ( err ) => {
      //console.log( err );
    });

    fetch( "https://api.collage.co/v1/positions/riyogames" )
    .then(  ( res ) => res.json() )
    .then(  ( res ) => {
      positions = res.positions;
      console.log( positions );
      posDom = Array( positions.length );
      for ( let i = 0; i < posDom.length; i++ ) {
        posDom[i] = [ "", "Read More" ];
      }
      //console.log( "posdom: ");
      //console.log( posDom );
    })
    .catch( ( err )  => console.log( err ) )
  })  

  let yPos = 0;

  function toggleJob( id ) {
    console.log( posDom );
    posDom[id][0].style.maxHeight = posDom[id][0].style.maxHeight == "100%" ? "0" : "100%";
    posDom[id][1] = posDom[id][0].style.maxHeight == "100%" ? "Read Less" : "Read More";
  }
</script>

<svelte:window bind:scrollY={yPos}/>

{ #if article.title != undefined }
  <div class="bg-careersBandTopBg bg-cover bg-center bg-no-repeat p-8 pb-12 flex flex-wrap pt-12 justify-center">  
    <div class="mt-8 mb-12 w-full md:w-5/6 justify-center items-center flex flex-wrap">
      <div class="w-full md:w-1/3 xl:w-1/4 mb-4 md:mb-0"><img class="mx-auto" src={img.logo} /></div>
      <div class="w-full md:w-2/3 xl:w-3/4 pl-0 md:px-16">
        <h1>Careers</h1>
        <img src={img.divider}/>
        <div class="text-textGray style-dato-header mt-4">{ @html htmlRender( article.description ) }</div>
      </div>
    </div>
  </div>
  <div class="relative flex flex-wrap p-8 justify-center items-center -mt-4">
    <div class="bg-careersBandMidBg bg-top bg-tan bg-no-repeat absolute w-full h-full">
    </div>
    <div class="z-10 w-full md:px-0 mt-16 mb-4 md:w-5/6 flex flex-wrap justify-center">
      <div class="w-full lg:w-1/2 md:pr-[7%] pb-4">
        <h1>Diversity &amp; Inclusion</h1>
        <img src={img.divider}/>
        <div class="py-4 text-textGray style-dato-st">
          { @html htmlRender( article.diversityInclusion ) }
        </div>
      </div>
      <div class="w-full lg:w-1/2 md:pr-[7%] pb-4">
        <h1>Commitment to Improvement</h1>
        <img src={img.divider}/>
        <div class="py-4 text-textGray style-dato-st">
          { @html htmlRender( article.commitmentToImprovement ) }
        </div>
      </div>
    </div>
    <div class="z-10 w-full md:px-0 my-8 md:w-5/6 flex flex-wrap justify-center ">
      <div class="w-full">
        <h1>Open Positions</h1>
        <img class="mb-4 h-[18px] md:h-[22px] object-cover object-left" src={img.timeRuleBeige}/>
        <div class="py-4 text-textGray">
          {#each positions as job, id }
            <div class="my-2 px-4 py-4 bg-beige">
              <div class="w-full relative flex flex-wrap justify-center items-center">
                <h2 class="pb-2 md:pb-0 text-xl text-center md:text-left w-full md:w-[calc(100%-140px)] pr-4">{job.title}</h2>
                <div class="w-full text-center md:w-auto">
                  <button 
                    on:click={()=>toggleJob(id)}
                    class="uppercase my-2 md:my-0 font-menu text-center w-[120px] md:w-[140px] h-[40px] bg-charcoal text-beige px-4 py-2">
                    {posDom[id][1]}
                  </button>
                </div>
              </div>
              <div bind:this={posDom[id][0]} class="max-h-0 overflow-y-hidden toggle-job">
                <div class="style-job py-4">
                  {@html job.description}
                </div>
                <form class="inline-block pb-4" action="/about">
                  <a href={job.applyUrl}><button class="uppercase font-menu text-center w-[120px] md:w-[140px] h-[40px] bg-charcoal text-lg text-beige py-2">Apply</button></a>
                </form>
              </div>
            </div>
          {/each}          
        </div>
      </div>
    </div>
  </div>
{ /if }