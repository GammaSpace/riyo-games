<script>
	import { render as htmlRender } from 'datocms-structured-text-to-html-string';

	export let data;

	const homeLinks = [
		['about', '/about'],
		['careers', '/careers'],
		['games', 'https://threadsoftimegame.com'],
		['contact', 'contact']
	];

	let handActive = Array(homeLinks.length);

	for (let i = 0; i < handActive.length; i++) {
		handActive[i] = [undefined, false];
	}
	handActive[0][1] = true;

	let img = {
		logo: '/img/logos/riyo_games_logo_586x288.png',
		hero: '/img/home/welcome_band_hero.png',
		portal: '/img/home/welcome_band_portal.png',
		circle: '/img/home/mission_bg_circle.svg',
		tot: '/img/home/tot_band_title.png',
		castle: 'img/home/tot_band_portal.png',
		mickey: '/img/ui/nav_mickey_hand.png',
		ruleOfLaw: '/img/ui/rule_of_law.png'
	};

	let yPos = 0;
	let winWidth = 0;

	function handleMickey(id) {
		for (let i = 0; i < handActive.length; i++) {
			handActive[i][1] = false;
		}
		handActive[id][1] = true;
	}
</script>

<svelte:window bind:scrollY={yPos} bind:innerWidth={winWidth} />

<div
	class="bg-welcomeBandBg bg-cover bg-center p-8 pb-12 pt-16 flex flex-wrap pt-12 pb-24 md:pl-[10%]"
>
	<div class="w-full mt-16 md:w-1/2">
		<img alt="Riyo Games Logo" class="mb-8" src={img.logo} />
		<img alt="Horizontal Rule" class="-mt-12 h-[2px] object-left" src={img.ruleOfLaw} />
		<div class="pt-8 pb-4 text-textGray style-dato-header">
			{@html htmlRender(data.studioDescription)}
		</div>
		<img alt="Horizontal Rule" class="mb-2 h-[2px] object-left" src={img.ruleOfLaw} />
		<div class="flex flex-wrap justify-center relative">
			<div class="w-1/2 md:w-full">
				{#each homeLinks as link, i}
					<div class="">
						<a
							bind:this={handActive[i][0]}
							on:mouseenter={() => handleMickey(i)}
							on:mouseleave={() => {
								handActive[i][1] = false;
							}}
							href={link[1]}
						>
							{#if handActive[i][1]}
								<div class="pt-2 absolute mickey-bounce inline-block w-[40px]">
									<img alt="Menu Selector" class="inline-block" src={img.mickey} />
								</div>
								<span class="h-[40px] pl-12 pt-2 inline-block uppercase text-lg">{link[0]}</span>
							{:else}
								<span class="homepage-menu h-[40px] pt-2 inline-block uppercase text-lg"
									>{link[0]}</span
								>
							{/if}
						</a>
						<img
							alt="Horizontal Rule"
							class="w-full md:w-1/3 my-1 h-[2px] object-left"
							src={img.ruleOfLaw}
						/>
					</div>
				{/each}
			</div>
		</div>
	</div>
	<div class="relative w-full md:w-1/2 flex justify-center items-center">
		<div class="absolute right-0 top-[40px]">
			<img
				alt="Stylized Landscape"
				class="-mr-8 max-w-[140%] mt-8 md:mt-0 float-right"
				src={img.portal}
			/>
		</div>
		<div class="absolute z-1 top-[10px] w-1/2 ml-48 md:ml-64 md:mt-16 mr-48">
			<img
				alt="Heroic Figure"
				style="transform: translate(0,{-yPos * (winWidth > 768 ? 0.2 : 0.1)}px)"
				class="max-w-[140%] overflow-x-hidden"
				src={img.hero}
			/>
		</div>
	</div>
</div>
<div class="mission-mask relative flex flex-wrap justify-center -mt-4 items-center">
	<div class="bg-missionBandBg bg-center md:bg-cover bg-no-repeat absolute w-full h-full" />
	<div
		class="circle-mask absolute w-full h-full flex flex-wrap justify-center items-center overflow-hidden"
	>
		<div class="absolute w-[130%] sm:w-[110%] md:w-[100%] lg:w-[90%] xl:w-[80%]">
			<img
				alt="Stylized Background Circle"
				style="transform: translate(0,{-yPos * 0.1}px)"
				class="mt-64 sm:mt-48 mx-auto"
				src={img.circle}
			/>
		</div>
	</div>
	<div class="z-10 px-8 text-center w-full py-16 md:py-[16vw] 2xl:py-[15vw] md:w-2/3 xl:w-1/2">
		<div class="text-tan">
			<div class="text-2xl uppercase">{@html htmlRender(data.missionHeadline)}</div>
		</div>
		<div class="py-4 text-textGray">
			{@html htmlRender(data.additionalDescription)}
		</div>
		<div class="">
			<div class="inline-block p-4">
				<a href="/about"
					><button class="btn-std hover:bg-darkBeige w-[160px] p-2 bg-beige uppercase"
						>Learn More</button
					></a
				>
			</div>
			<div class="inline-block">
				<a href="/careers"
					><button class="btn-std hover:bg-darkBeige w-[160px] p-2 bg-beige uppercase"
						>Work With Us</button
					></a
				>
			</div>
		</div>
	</div>
</div>
<div
	class="bg-totBandBg bg-center bg-cover bg-no-repeat p-8 pb-16 flex flex-wrap pt-16 md:pt-24 -mt-4 overflow-y-hidden overflow-x-hidden"
>
	<div class="relative w-full md:w-1/2 flex items-center pr-0 md:pr-20 xl:pr-24 ">
		<div class="">
			<img alt="Castle Overlooking Water" class="max-w-[130%] -ml-8" src={img.castle} />
		</div>
		<div class="absolute w-3/4 z-1 -ml-12 pt-[15rem] md:pt-[20rem] 2xl:pt-[30rem]">
			<img
				alt="Threads of Time Game Logo"
				style="transform: translate(0,{-yPos * (winWidth > 768 ? 0.2 : 0.1)}px)"
				class="max-w-[140%]"
				src={img.tot}
			/>
		</div>
	</div>
	<div class="z-10 w-full md:w-1/2 flex flex-wrap">
		<div class="w-full">
			<h2 class="pb-2">{data.gamesHeader}</h2>
			<h2 class="pb-2 text-4xl">{data.gamesSubHeader}</h2>
			<img alt="Horizontal Rule" class="my-2 h-[1.5px] object-left" src={img.ruleOfLaw} />
			<div class="pt-2 pb-4 text-textGray style-dato-st">
				{@html htmlRender(data.threadsOfTimeIntro)}
			</div>
			<div class="inline-block pb-4">
				<a href="https://threadsoftimegame.com"
					><button
						class="btn-std hover:bg-beige border-2 border-textGray py-2 px-6 bg-tan text-charcoal uppercase"
						>Learn More</button
					></a
				>
			</div>
		</div>
	</div>
</div>
