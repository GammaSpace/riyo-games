<script>
	import { render as htmlRender } from 'datocms-structured-text-to-html-string';

	export let data;

	let bioPage = 0;

	let img = {
		divider: '/img/about/divider.png',
		timeRule: '/img/ui/time_rule.png',
		timeRuleBeige: '/img/ui/time_rule_beige.png',
		ruleOfLaw: '/img/ui/rule_of_law.png',
		logo: '/img/logos/riyo_games_logo_586x288.png',
		mickey: '/img/ui/nav_mickey_hand.png',
		bio: {
			placeholder: '/img/bios/profile_pic.png'
		}
	};

	let yPos = 0;
	let winWidth = 0;
</script>

<svelte:window bind:scrollY={yPos} bind:innerWidth={winWidth} />

<div
	class="bg-welcomeBandBg bg-cover bg-center bg-beige p-8 pb-12 flex flex-wrap pt-12 justify-center"
>
	<div class="mb-12 w-full justify-center flex flex-wrap">
		<div class="flex flex-wrap max-w-[580px]">
			<div class="w-full flex flex-wrap justify-center items-center">
				<img alt="Horizontal Rule" class="w-[35%] h-[1.5px]" src={img.ruleOfLaw} />
				<h1 class="w-[30%] text-center mb-2">{data.about.title}</h1>
				<img alt="Horizontal Rule" class="w-[35%] h-[1.5px]" src={img.ruleOfLaw} />
			</div>
			<img alt="Riyo Games Logo" class="mx-auto" src={img.logo} />
			<img alt="Horizontal Rule" class="-mt-7 h-[2px] object-left" src={img.ruleOfLaw} />
			<div class="mt-8 text-textGray text-center style-dato-header">
				{@html htmlRender(data.about.description)}
			</div>
		</div>
	</div>
</div>
<div class="w-full relative flex flex-wrap justify-center items-center">
	<div class="z-20 w-full -top-[80px] absolute h-[80px] footer-gradient" />
	<div class="z-30 mission-mask relative flex flex-wrap p-8 pt-4 justify-center items-center -mt-4">
		<div class="bg-aboutBandMidBg bg-center bg-cover bg-no-repeat absolute w-full h-full" />
		<div class="z-10 w-full md:px-0 my-16 md:w-5/6 flex flex-wrap justify-center">
			<div class="w-full">
				<h1>{data.about.storyHeader}</h1>
				<img
					alt="Horizontal Rule"
					class="mb-4 h-[18px] md:h-[22px] object-cover object-left"
					src={img.timeRuleBeige}
				/>
				<div class="py-4 text-textGray style-dato-st">
					{@html htmlRender(data.about.story)}
				</div>
			</div>
			<div class="w-full lg:w-1/2 md:pr-[7%] pb-4">
				<span class="text-textGray font-menu uppercase font-bold tex-sm tracking-wide"
					>About Us</span
				>
				<h1 class="pt-0 mt-0">{data.about.visionHeader}</h1>
				<img alt="Horizontal Rule" src={img.divider} />
				<div class="py-4 text-textGray style-dato-st">
					{@html htmlRender(data.about.vision)}
				</div>
			</div>
			<div class="w-full lg:w-1/2 md:pr-[7%] pb-4">
				<span class="text-textGray font-menu uppercase font-bold tex-sm tracking-wide"
					>About Us</span
				>

				<h1 class="pt-0 mt-0">{data.about.valuesHeader}</h1>
				<img alt="Horizontal Rule" src={img.divider} />
				<div class="py-4 text-textGray style-dato-st">
					{@html htmlRender(data.about.values)}
				</div>
			</div>
			<div class="w-full mt-12">
				<img alt="Horizontal Rule" class="h-[2px] object-left" src={img.ruleOfLaw} />
				<div class="flex flex-row flex-wrap justify-around my-6">
					<div class="w-1/2 lg:w-auto">
						<span class="text-textGray font-menu uppercase font-bold tex-sm tracking-wide"
							>Work With Us</span
						>
						<h1 class="pt-0 mt-0">{data.about.careersHeader}</h1>
					</div>
					<div class="vertical-divider-container hidden lg:flex">
						<img alt="Vertical Divider" class="w-[100px] h-[2px] rotate-90" src={img.ruleOfLaw} />
					</div>

					<div class="w-1/2 lg:w-1/3 text-textGray flex-wrap style-dato-st">
						<div class="w-full">{@html htmlRender(data.about.workWithUs)}</div>
					</div>
					<div class="vertical-divider-container hidden lg:flex">
						<img alt="Vertical Divider" class="w-[100px] h-[2px] rotate-90" src={img.ruleOfLaw} />
					</div>
					<div class="items-center self-center text-center mt-6 lg:mt-0">
						<a href="/careers" class="mx-auto"
							><button
								class="btn-std w-[160px] p-2 font-bold text-charcoal  bg-stone-100 hover:bg-stone-50 uppercase"
								>{data.about.careersButton}</button
							></a
						>
					</div>
				</div>
			</div>
			<img alt="Horizontal Rule" class="h-[2px] object-left mb-12" src={img.ruleOfLaw} />
		</div>
	</div>
</div>
<div
	class="bg-aboutBandBottomBg bg-charcoal g-top bg-no-repeat p-8 pb-16 flex flex-wrap pt-20 justify-center -mt-12"
>
	<div class="w-full md:w-5/6 flex flex-wrap">
		<div class="w-full relative text-tan text-left flex flex-wrap">
			<span class="text-blue-400 font-menu uppercase font-bold tex-sm tracking-wide">About Us</span>

			<h1 class="w-full mt-0 pt-0">{data.about.teamHeader}</h1>
			<img
				alt="Horizontal Rule"
				class="mb-4 h-[22px] object-cover object-left"
				src={img.timeRule}
			/>
			{#each data.allBios as bio}
				<div class="w-full md:w-1/2 lg:w-1/3 flex flex-wrap mb-4 pr-4">
					<div class="w-1/3 md:w-1/2">
						<div class="mr-4 bg-boxBlue border-[4px] md:border-[5px] border-gray-700">
							<img alt="Team Member Portrait" class="" src={bio.portrait?.url} />
						</div>
					</div>
					<div class="w-2/3 md:w-1/2 font-menu">
						<h2 class="text-xl">{bio.name}</h2>
						<h2 class="text-blue-400 pb-1">{bio.role}</h2>
						<img alt="Horizontal Rule" class="w-[75%] h-[1.5px]" src={img.ruleOfLaw} />
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.vertical-divider-container {
		align-items: center;
		justify-content: center;
		padding: 0 12px; /* Adjust padding as needed */
	}

	.vertical-divider {
		height: auto; /* Maintain natural height */
		width: 2px; /* Set width to 2px */
	}
</style>
