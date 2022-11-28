<script>
  import { onMount } from 'svelte';
  import { PUBLIC_DATO_TOKEN } from '$env/static/public';
  import { render as htmlRender } from 'datocms-structured-text-to-html-string';
  import { loaded } from '../../stores';

  const token = PUBLIC_DATO_TOKEN;

  let article = "";

  let img = {
    divider: "/img/about/divider.png",
    logo: "/img/logos/riyo_games_logo_586x288.png",
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
            allContacts {
              title,
              description {
                value
              }
            }
          }`
        }),
      }
    )
    .then(  ( res ) => res.json() )
    .then(  ( res ) => {
      article = res.data.allContacts[0];
      //console.log( article );
      loaded.set( true );
    })
    .catch( ( err ) => {
      //console.log( err );
    });
  })  

  let yPos = 0;
</script>

<svelte:window bind:scrollY={yPos}/>

{ #if article.title != undefined }
  <div class="bg-careersBandTopBg bg-cover bg-center bg-no-repeat p-8 pb-12 flex flex-wrap pt-12 justify-center">  
    <div class="mt-8 mb-12 w-full md:w-5/6 justify-center items-center flex flex-wrap">
      <div class="w-full md:w-1/3 xl:w-1/4"><img class="mx-auto" src={img.logo} /></div>
      <div class="w-full md:w-2/3 xl:w-3/4 pl-0 md:px-16">
        <h1>Contact Us</h1>
        <img class="pb-4" src={img.divider}/>
        <div class="text-textGray style-dato-st">{ @html htmlRender( article.description ) }</div>
      </div>
    </div>
  </div>
  <div class="relative flex flex-wrap p-8 justify-center items-center -mt-4">
    <div class="bg-careersBandMidBg bg-cover bg-no-repeat absolute w-full h-full">
    </div>
    <div class="z-10 w-full md:px-0 mt-16 mb-4 md:w-5/6 flex flex-wrap justify-center">
      <div class="w-2/3">
        <h1>Contact Form</h1>
        <form on:submit={(e) => onSubmit(e)}>
          <div class="font-display text-3xl mb-6">
            <label
              htmlFor="first-name"
              class="block text-lg font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              class="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
{ /if }