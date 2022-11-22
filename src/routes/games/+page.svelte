<script>
  import { onMount } from 'svelte';
  import { PUBLIC_DATO_TOKEN } from '$env/static/public';
  import { render as htmlRender } from 'datocms-structured-text-to-html-string';

  const token = PUBLIC_DATO_TOKEN;

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
            allArticles( filter: { title: { eq: "Games"} } ) {
              title,
              content {
                value
              }
            }
          }`
        }),
      }
    )
    .then( res => res.json() )
    .then( ( res ) => {
      article = res.data.allArticles[0];
      console.log( article );
    })
    .catch( ( error ) => {
      console.log( error );
    });
  })  
</script>

{ #if article.title != undefined }
<div class="flex flex-wrap pt-12 md:pl-[10%]">
  <div class="w-full md:w-1/2">
    <h1>{ article.title }</h1>  
    { @html htmlRender( article.content ) }
  </div>
</div>
{ /if }