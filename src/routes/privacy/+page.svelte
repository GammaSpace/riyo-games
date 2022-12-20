<script>
  import { render as htmlRender } from 'datocms-structured-text-to-html-string';

  export let data;

  let yPos = 0;
</script>

<svelte:window bind:scrollY={yPos}/>

<div class="bg-welcomeBandBg bg-cover bg-center bg-beige p-8 pb-12 flex flex-wrap pt-12">  
  <div class="mb-12 max-w-[900px] w-full text-textGray style-privacy">
    {@html htmlRender( data.article.content )}
  </div>  
</div>