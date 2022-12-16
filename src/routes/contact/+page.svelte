<script>
  import { onMount } from 'svelte';
  import { PUBLIC_DATO_TOKEN } from '$env/static/public';
  import { render as htmlRender } from 'datocms-structured-text-to-html-string';
  import { loaded } from '../../stores';
  import ContactForm from '../../components/ContactForm.svelte';

  const token = PUBLIC_DATO_TOKEN;

  let article = "";

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
            contact {
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
      article = res.data.contact;
      loaded.set( true );
    })
    .catch( ( err ) => {
      console.log( err );
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
        <div class="text-textGray style-dato-header">{ @html htmlRender( article.description ) }</div>
      </div>
    </div>
  </div>
  <div class="w-full relative flex flex-wrap justify-center items-center">
    <div class="z-10 w-full top-[-80px] absolute h-[80px] footer-gradient"></div>
    <div class="z-20 w-full mission-mask relative flex flex-wrap p-8 justify-center items-center -mt-4">
      <div class="bg-careersBandMidBg bg-cover bg-no-repeat absolute w-full h-full"></div>
      <div class="z-10 w-full md:w-5/6 md:px-0 mt-8 pb-48 mb-4 flex flex-wrap justify-center">
        <div class="w-full md:w-1/2 pr-8">
          <h1>Contact Form</h1>
          <ContactForm />
        </div>
        <div class="w-full md:w-1/2 mt-8 md:mt-0">
          <h1>Newsletter Signup</h1>
          <form id="signup" method="post" action="https://www.aweber.com/scripts/addlead.pl">
            <input type="hidden" name="listname" value="awlist6157223" />
            <input type="hidden" name="redirect" value="http://www.example.com/thankyou.htm" />
            <input type="hidden" name="meta_redirect_onlist" value="http://www.example.com/thankyou.htm" />
            <input type="hidden" name="meta_adtracking" value="custom form" />
            <input type="hidden" name="meta_message" value="1" /> 
            <input type="hidden" name="meta_required" value="email" /> 
            <input type="hidden" name="meta_forward_vars" value="1" /> 
            <label class="mt-4 block text-sm font-body text-textGray">Name
              <input type="text" class="mt-1 w-full text-sm p-1 text-charcoal rounded-md" name="name" value="" /> 
            </label>
            <label class="mt-4 block text-sm font-body text-textGray">Email
              <input type="text" class="mt-1 w-full text-sm p-1 text-charcoal rounded-md" name="email" value="" />
            </label>
            <input type="submit" class="mt-8 btn-std w-[160px] p-2 border-2 text-charcoal border-textGray bg-beige hover:bg-midBeige hover:cursor-pointer uppercase" name="submit" value="Subscribe" /> 
          </form>
        </div>
      </div>
    </div>
  </div>
{ /if }