<script>
  export let buttonText;
  export let job;

  let expanded = false;
</script>

<div class="my-2 px-4 py-2 bg-tan">
  <div class="w-full relative flex flex-wrap justify-center items-center">
    <h2 class="text-xl w-[calc(100%-140px)] pr-4">{job.title}</h2>
    <button 
      on:click={()=>toggleJob(id)}
      class="w-[140px] h-[40px] bg-charcoal text-beige px-4 py-2">
      {posDom[id].style.maxHeight == "0" ? "Read More" : "Read Less"}
    </button>
  </div>
  <div bind:this={posDom[id]} class="max-h-0 overflow-y-hidden toggle-job">
    <div class="style-job py-4">
      <slot/>
      <!--{@html job.description}-->
    </div>
  </div>
</div>