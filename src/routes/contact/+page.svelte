<script>
	import { render as htmlRender } from 'datocms-structured-text-to-html-string';

	export let data;

	let img = {
		divider: '/img/about/divider.png',
		logo: '/img/logos/riyo_games_logo_586x288.png',
		ruleOfLaw: '/img/ui/rule_of_law.png'
	};

	let yPos = 0;
</script>

<svelte:window bind:scrollY={yPos} />
{#if data.title != undefined}
	<div
		class="bg-careersBandTopBg bg-cover bg-center bg-no-repeat p-8 pb-12 flex flex-wrap pt-12 justify-center"
	>
		<div class="mt-8 mb-12 w-full md:w-5/6 justify-center items-center flex flex-wrap">
			<div class="w-full md:w-1/3 xl:w-1/4">
				<img alt="Riyo Games Logo" class="mx-auto" src={img.logo} />
			</div>
			<div class="w-full md:w-2/3 xl:w-3/4 pl-0 md:px-16">
				<h1>{data.contactHeader}</h1>
				<img alt="Horizontal Rule" class="pb-4" src={img.divider} />
				<div class="text-textGray style-dato-header">{@html htmlRender(data.description)}</div>
			</div>
		</div>
	</div>

	<!-- Start of dark background section -->
	<div class="mission-mask relative flex flex-wrap justify-center -mt-4 items-center">
		<div
			class="bg-missionBandBg bg-cover bg-no-repeat w-full relative flex flex-wrap justify-center items-center"
		>
			<div class="z-10 w-full top-[-80px] absolute h-[80px] footer-gradient" />
			<div class="z-20 w-full relative flex flex-wrap p-8 justify-center items-center -mt-4">
				<div class="z-10 w-full md:w-5/6 md:px-0 mt-8 pb-64 mb-4 flex flex-wrap justify-center">
					<div class="w-full md:w-1/2 pr-8">
						<h1 class="text-midBeige">{data.emailHeader}</h1>
						<img alt="Horizontal Rule" class="pb-4" src={img.divider} />

						<p class="text-midBeige">{@html htmlRender(data.emailContent)}</p>
						<a href="mailto:contact@riyogames.com" class="underline text-base text-midBeige"
							>{data.emailContact}</a
						>
					</div>
					<div class="w-full md:w-1/2 mt-8 md:mt-0">
						<h1 class="text-midBeige">{data.newsletterHeader}</h1>
						<img alt="Horizontal Rule" class="pb-4" src={img.divider} />

						<form id="signup" method="post" action="https://www.aweber.com/scripts/addlead.pl">
							<input type="hidden" name="listname" value="awlist6157223" />
							<input type="hidden" name="meta_adtracking" value="custom form" />
							<input type="hidden" name="meta_message" value="1" />
							<input type="hidden" name="meta_required" value="email" />
							<input type="hidden" name="meta_forward_vars" value="1" />
							<label class="mt-4 block text-sm font-body text-midBeige"
								>Name
								<input
									type="text"
									class="mt-1 w-full text-sm p-2 text-charcoal rounded-md"
									name="name"
									value=""
								/>
							</label>
							<label class="mt-4 block text-sm font-body text-midBeige"
								>Email
								<input
									type="text"
									class="mt-1 w-full text-sm p-2 text-charcoal rounded-md "
									name="email"
									value=""
								/>
							</label>
							<input
								type="submit"
								class="mt-8 btn-std w-[160px] p-2  text-charcoal  bg-whiteTan hover:bg-midBeige hover:cursor-pointer uppercase"
								name="submit"
								value="Subscribe"
							/>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- End of dark background section -->
{/if}
