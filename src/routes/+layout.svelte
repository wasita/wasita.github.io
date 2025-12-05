<script lang="ts">
	import { page } from '$app/stores';
	import '$lib/theme.css';
	import '../app.postcss';
	import { AppShell, AppBar, Avatar, Drawer, getDrawerStore, initializeStores } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { afterNavigate } from '$app/navigation';
	import { LightSwitch } from '@skeletonlabs/skeleton';


	let currentYear = new Date().getFullYear();
	
	// Initialize Skeleton stores
	initializeStores();
	const drawerStore = getDrawerStore();

	afterNavigate((params: any) => {
		const isNewPage: boolean =
			params.from && params.to && params.from.route.id !== params.to.route.id;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
		}
	});

	const menu: DrawerSettings = {
		id: 'menu',
		position: 'right',
		bgDrawer: 'bg-surface-100 dark:bg-surface-800 dark:text-white',
		bgBackdrop: 'backdrop-blur',
		width: 'w-full',
		padding: 'p-4',
		rounded: 'rounded-xl',
		border: 'border border-surface-300 dark:border-surface-700',
	};

	$: currentRoute = $page.url.pathname;
	export let data;
</script>

<svelte:head>
	<title>wasita.space</title>
</svelte:head>

<Drawer>
	<!-- Mobile menu -->
	{#if $drawerStore.id === 'menu'}
		<nav class="px-4 py-6 list-nav">
			<div class="flex items-center pb-6">
				<h2 class="flex-1 pl-4 font-bold">menu</h2>
				<button class="btn btn-icon-lg variant-glass-surface" on:click={() => drawerStore.close()}>
					x
				</button>
			</div>
			<ul>
				<li>
					<a
						class="my-2 transition-all duration-200 btn btn-xl"
						href="/"
						class:variant-glass-surface={currentRoute !== '/'}
						class:variant-glass-primary={currentRoute === '/'}
						on:click={() => drawerStore.close()}>
						Home
					</a>
				</li>
				<li>
					<a
						class="my-2 transition-all duration-200 btn btn-xl"
						href="/about"
						class:variant-glass-surface={!currentRoute.includes('/about')}
						class:variant-glass-primary={currentRoute.includes('/about')}
						on:click={() => drawerStore.close()}>
						About
					</a>
				</li>
				<li>
					<a
						class="my-2 transition-all duration-200 btn btn-xl"
						href="/research"
						class:variant-glass-surface={!currentRoute.includes('/research')}
						class:variant-glass-primary={currentRoute.includes('/research')}
						on:click={() => drawerStore.close()}>
						Research
					</a>
				</li>
				<li>
					<a
						class="my-2 transition-all duration-200 btn btn-xl"
						href="/portfolio"
						class:variant-glass-surface={!currentRoute.includes('/portfolio')}
						class:variant-glass-primary={currentRoute.includes('/portfolio')}
						on:click={() => drawerStore.close()}>
						Portfolio
					</a>
				</li>
				<li>
					<a
						class="my-2 transition-all duration-200 btn btn-xl"
						href="/blog"
						class:variant-glass-surface={!currentRoute.includes('/blog')}
						class:variant-glass-primary={currentRoute.includes('/blog')}
						on:click={() => drawerStore.close()}>
						Blog
					</a>
				</li>
				<li>
					<a
						class="my-2 transition-all duration-200 btn btn-xl"
						href="/contact"
						class:variant-glass-surface={!currentRoute.includes('/contact')}
						class:variant-glass-primary={currentRoute.includes('/contact')}
						on:click={() => drawerStore.close()}>
						Contact
					</a>
				</li>
				<li>
					<hr class="w-24 mx-auto my-4 divider" />
				</li>
			</ul>
			<ul class="grid grid-cols-3 gap-2 items-center justify-center content-center">
				<li>
					<a
						class="btn variant-soft-surface hover:variant-soft-primary"
						href="https://wasita-mahaphanit-cv.netlify.app"
						target="_blank"
						rel="noreferrer"
						on:click={() => drawerStore.close()}>
						<Icon icon="academicons:cv-square" class="text-3xl" />
					</a>
				</li>
				<li>
					<a
						class="btn variant-soft-surface hover:variant-soft-primary"
						href="https://scholar.google.com/citations?user=1tZe-1gAAAAJ"
						target="_blank"
						rel="noreferrer"
						on:click={() => drawerStore.close()}>
						<Icon icon="academicons:google-scholar-square" class="text-3xl" />
					</a>
				</li>
				<li>
					<a
						class="btn variant-soft-surface hover:variant-soft-primary"
						href="https://bsky.app/profile/wasita.bsky.social"
						target="_blank"
						rel="noreferrer"
						on:click={() => drawerStore.close()}>
						<Icon icon="simple-icons:bluesky" class="text-3xl" />
					</a>
				</li>
				<li>
					<a
						class="btn variant-soft-surface hover:variant-soft-primary"
						href="https://twitter.com/mahaphanit"
						target="_blank"
						rel="noreferrer"
						on:click={() => drawerStore.close()}>
						<Icon icon="mdi:twitter" class="text-3xl" />
					</a>
				</li>
				<li>
					<a
						class="btn variant-soft-surface hover:variant-soft-primary"
						href="https://linkedin.com/in/wasita-mahaphanit"
						target="_blank"
						rel="noreferrer"
						on:click={() => drawerStore.close()}>
						<Icon icon="mdi:linkedin" class="text-3xl" />
					</a>
				</li>
				<li>
					<a
						class="btn btn-sm variant-soft-surface hover:variant-soft-primary"
						href="https://github.com/wasita"
						target="_blank"
						rel="noreferrer"
						on:click={() => drawerStore.close()}>
						<Icon icon="mdi:github" class="text-3xl" />
					</a>
				</li>
			</ul>
		</nav>
	{/if}
</Drawer>

<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10">
	<svelte:fragment slot="pageHeader">
		<div class="bg-surface-50 dark:bg-surface-900 backdrop-blur-xl">
			<AppBar background="none" class="container py-4 mx-auto">
				<svelte:fragment slot="lead">
					<a href="/">
						<Avatar src="/favicon.png"  />
					</a>
				</svelte:fragment>
				<svelte:fragment slot="trail">
					<LightSwitch />
					<div class="items-center hidden space-x-3 lg:flex">
						<a
							class="transition-all duration-200 btn btn-sm hover:variant-glass-primary"
							href="/"
							class:variant-glass-surface={currentRoute !== '/'}
							class:variant-glass-primary={currentRoute === '/'}>
							Home
						</a>
						<a
							class="transition-all duration-200 btn btn-sm hover:variant-glass-primary"
							href="/about"
							class:variant-glass-surface={!currentRoute.includes('/about')}
							class:variant-glass-primary={currentRoute.includes('/about')}>
							About
						</a>
						<a
							class="transition-all duration-200 btn btn-sm hover:variant-glass-primary"
							href="/research"
							class:variant-glass-surface={!currentRoute.includes('/research')}
							class:variant-glass-primary={currentRoute.includes('/research')}>
							Research
						</a>
						<a
							class="transition-all duration-200 btn btn-sm hover:variant-glass-primary"
							href="/portfolio"
							class:variant-glass-surface={!currentRoute.includes('/portfolio')}
							class:variant-glass-primary={currentRoute.includes('/portfolio')}>
							Portfolio
						</a>
						<a
							class="transition-all duration-200 btn btn-sm hover:variant-glass-primary"
							href="/blog"
							class:variant-glass-surface={!currentRoute.includes('/blog')}
							class:variant-glass-primary={currentRoute.includes('/blog')}>
							Blog
						</a>
						<a
							class="transition-all duration-200 btn btn-sm hover:variant-glass-primary"
							href="/contact"
							class:variant-glass-surface={!currentRoute.includes('/contact')}
							class:variant-glass-primary={currentRoute.includes('/contact')}>
							Contact
						</a>
						<hr class="h-6 divider-vertical" />
						<a
							class="btn btn-sm variant-soft-surface hover:variant-soft-primary"
							href="https://wasita-mahaphanit-cv.netlify.app"
							target="_blank"
							rel="noreferrer">
							<Icon icon="academicons:cv-square" class="text-xl" />
						</a>
						<a
							class="btn btn-sm variant-soft-surface hover:variant-soft-primary"
							href="https://scholar.google.com/citations?user=1tZe-1gAAAAJ"
							target="_blank"
							rel="noreferrer">
							<Icon icon="academicons:google-scholar-square" class="text-xl" />
						</a>
						<a
							class="btn btn-sm variant-soft-surface hover:variant-soft-primary"
							href="https://bsky.app/profile/wasita.bsky.social"
							target="_blank"
							rel="noreferrer">
							<Icon icon="simple-icons:bluesky" class="text-xl" />
						</a>
						<a
							class="btn btn-sm variant-soft-surface hover:variant-soft-primary"
							href="https://twitter.com/mahaphanit"
							target="_blank"
							rel="noreferrer">
							<Icon icon="mdi:twitter" class="text-xl" />
						</a>
						<a
							class="btn btn-sm variant-soft-surface hover:variant-soft-primary"
							href="https://linkedin.com/in/wasita-mahaphanit"
							target="_blank"
							rel="noreferrer">
							<Icon icon="mdi:linkedin" class="text-xl" />
						</a>
						<a
							class="btn btn-sm variant-soft-surface hover:variant-soft-primary"
							href="https://github.com/wasita"
							target="_blank"
							rel="noreferrer">
							<Icon icon="mdi:github" class="text-xl" />
						</a>
					</div>
					<div class="flex lg:hidden">
						<button class="px-0 btn" on:click={() => drawerStore.open(menu)}>
							<Icon icon="mdi:menu" class="text-2xl" />
						</button>
					</div>
				</svelte:fragment>
			</AppBar>
		</div>
	</svelte:fragment>
	{#key data.pathname}
		<div
			class="container px-4 mx-auto"
			in:fly={{ easing: cubicOut, y: 10, duration: 150, delay: 200 }}
			out:fly={{ easing: cubicIn, y: 10, duration: 150 }}>
			<slot />
		</div>
	{/key}
	<svelte:fragment slot="pageFooter">
		<div class="container mx-auto">
			<div
				class="flex items-center justify-center p-4 mx-4 my-4 rounded-xl">
				<p>
					Wasita Mahaphanit © {currentYear} | Built with <span class="text-purple-400 text-xl">♥</span> ft. Svelte & Tailwind
				</p>
			</div>
		</div>
	</svelte:fragment>
</AppShell>
