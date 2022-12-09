<script>
  import { onMount } from 'svelte';
  import { PUBLIC_DATO_TOKEN } from '$env/static/public';
  import { render as htmlRender } from 'datocms-structured-text-to-html-string';
  import { loaded } from "../../stores";

  const token = PUBLIC_DATO_TOKEN;

  let article = "";
  let ctas = "";

  let img = {
    divider: "/img/about/divider.png",
    logo: "/img/logos/riyo_games_logo_586x288.png",
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
            privacyPolicy {
              content {
                value,
              }
            }
          }`
        }),
      }
    )
    .then( res => res.json() )
    .then( ( res ) => {
      console.log( res );
      article = res.data.privacyPolicy;
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

<div class="bg-welcomeBandBg bg-cover bg-center bg-beige p-8 pb-12 flex flex-wrap pt-12">  
  <div class="mb-12 max-w-[900px] w-full text-textGray style-privacy">
    {@html htmlRender(article.content)}
  </div>  
</div>