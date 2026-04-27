<script lang="ts">
 import { page } from "$app/stores";
 import "../app.css";
 import Icon from "@iconify/svelte";
 import { fly } from "svelte/transition";
 import { cubicIn, cubicOut } from "svelte/easing";
 import { afterNavigate, onNavigate } from "$app/navigation";
 import { onMount } from "svelte";
 import { browser } from "$app/environment";
 import type { Snippet } from "svelte";

 // Props using Svelte 5 runes
 let { data, children }: { data: { pathname: string }; children: Snippet } = $props();

 // State
 let mobileMenuOpen = $state(false);
 let isDark = $state(true);

 const currentYear = new Date().getFullYear();

 // Derived state
 let currentRoute = $derived($page.url.pathname);

 // Initialize dark mode from DOM on mount
 onMount(() => {
 isDark = document.documentElement.classList.contains("dark");
 });

 afterNavigate((params: { from: { route: { id: string } } | null; to: { route: { id: string } } | null }) => {
 const isNewPage = params.from && params.to && params.from.route.id !== params.to.route.id;
 const elemPage = document.querySelector("#page");
 if (isNewPage && elemPage !== null) {
 elemPage.scrollTop = 0;
 }
 // Close mobile menu on navigation
 mobileMenuOpen = false;
 });

 function toggleDarkMode() {
 isDark = !isDark;
 if (browser) {
 document.documentElement.classList.toggle("dark", isDark);
 // Persist preference
 localStorage.setItem("theme", isDark ? "dark" : "light");
 }
 }

 function closeMobileMenu() {
 mobileMenuOpen = false;
 }
</script>

<svelte:head>
 <title>wasita.space</title>
 <meta name="description" content="Wasita Mahaphanit — PhD candidate at Dartmouth studying how people navigate uncertainty about other minds through interaction and conversation." />
 <meta property="og:title" content="wasita.space" />
 <meta property="og:description" content="PhD candidate at Dartmouth studying how people navigate uncertainty about other minds through interaction and conversation." />
 <meta property="og:image" content="https://wasita.space/images/og-image.png" />
 <meta property="og:image:width" content="1200" />
 <meta property="og:image:height" content="630" />
 <meta property="og:url" content="https://wasita.space" />
 <meta property="og:type" content="website" />
 <meta name="twitter:card" content="summary_large_image" />
 <meta name="twitter:title" content="wasita.space" />
 <meta name="twitter:description" content="PhD candidate at Dartmouth studying how people navigate uncertainty about other minds through interaction and conversation." />
 <meta name="twitter:image" content="https://wasita.space/images/og-image.png" />
</svelte:head>

<svelte:window onkeydown={(e) => mobileMenuOpen && e.key === "Escape" && closeMobileMenu()} />

<!-- Mobile menu overlay -->
{#if mobileMenuOpen}
 <div class="fixed inset-0 z-50 lg:hidden">
 <button
 class="absolute inset-0 w-full h-full bg-black/70 backdrop-blur-sm"
 onclick={closeMobileMenu}
 aria-label="Close menu"
 ></button>
 <div
 class="absolute right-0 top-0 h-full w-80 p-6"
 role="dialog"
 aria-modal="true"
 tabindex="-1"
 style="background: var(--paper); color: var(--ink); border-left: 1px solid var(--rule);"
 >
 <div class="flex items-center pb-6">
 <h2 class="flex-1 font-bold text-lg font-display">Menu</h2>
 <button
 class="px-3 py-2 rounded-lg hover:opacity-70 transition-all duration-200"
 onclick={closeMobileMenu}
 >
 <Icon icon="mdi:close" class="text-xl " />
 </button>
 </div>
 <ul class="space-y-2">
 <li>
 <a
 class="block py-3 px-4 rounded-lg transition-all duration-200 {currentRoute === '/' ? 'active-link' : 'hover:opacity-70'}"
 href="/"
 onclick={closeMobileMenu}
 >
 Home
 </a>
 </li>
 <li>
 <a
 class="block py-3 px-4 rounded-lg transition-all duration-200 {currentRoute.includes('/about') ? 'active-link' : 'hover:opacity-70'}"
 href="/about"
 onclick={closeMobileMenu}
 >
 About
 </a>
 </li>
 <li>
 <a
 class="block py-3 px-4 rounded-lg transition-all duration-200 {currentRoute.includes('/research') ? 'active-link' : 'hover:opacity-70'}"
 href="/research"
 onclick={closeMobileMenu}
 >
 Research
 </a>
 </li>
 <li>
 <a
 class="block py-3 px-4 rounded-lg transition-all duration-200 {currentRoute.includes('/publications') ? 'active-link' : 'hover:opacity-70'}"
 href="/publications"
 onclick={closeMobileMenu}
 >
 Publications
 </a>
 </li>
 <li>
 <a
 class="block py-3 px-4 rounded-lg transition-all duration-200 {currentRoute.includes('/portfolio') ? 'active-link' : 'hover:opacity-70'}"
 href="/portfolio"
 onclick={closeMobileMenu}
 >
 Portfolio
 </a>
 </li>
 <li>
 <a
 class="block py-3 px-4 rounded-lg transition-all duration-200 {currentRoute.includes('/blog') ? 'active-link' : 'hover:opacity-70'}"
 href="/blog"
 onclick={closeMobileMenu}
 >
 Blog
 </a>
 </li>
 <li>
 <a
 class="block py-3 px-4 rounded-lg transition-all duration-200 {currentRoute.includes('/contact') ? 'active-link' : 'hover:opacity-70'}"
 href="/contact"
 onclick={closeMobileMenu}
 >
 Contact
 </a>
 </li>
 </ul>
 </div>
 </div>
{/if}

<!-- Main layout -->
<div class="h-full flex flex-col overflow-hidden" style="background: var(--paper); color: var(--ink);">
 <!-- Header -->
 <header class="sticky top-0 z-10 backdrop-blur-md" style="background: color-mix(in srgb, var(--paper) 88%, transparent); border-bottom: 1px solid var(--rule);">
 <div class="container mx-auto py-4 px-4 flex items-center justify-between">
 <!-- Logo -->
 <a href="/" class="group no-underline" aria-label="Home">
 <img src="/favicon.png" alt="Wasita" class="w-9 h-9 rounded-full transition-transform duration-200 group-hover:rotate-[-4deg]" style="box-shadow: 0 0 0 2px var(--paper), 0 0 0 3px var(--rule);" />
 </a>

 <!-- Desktop nav + actions -->
 <div class="flex items-center gap-3">
 <!-- Dark mode toggle -->
 <button
 class="cyber-icon-btn flex"
 onclick={toggleDarkMode}
 aria-label="Toggle dark mode"
 >
 <Icon icon={isDark ? "mdi:weather-sunny" : "mdi:weather-night"} class="text-xl" />
 </button>

 <!-- Desktop navigation -->
 <nav class="hidden lg:flex items-center gap-1">
 <a
 class="cyber-nav-link {currentRoute === '/' ? 'active' : ''}"
 href="/"
 >
 Home
 </a>
 <a
 class="cyber-nav-link {currentRoute.includes('/about') ? 'active' : ''}"
 href="/about"
 >
 About
 </a>
 <a
 class="cyber-nav-link {currentRoute.includes('/research') ? 'active' : ''}"
 href="/research"
 >
 Research
 </a>
 <a
 class="cyber-nav-link {currentRoute.includes('/publications') ? 'active' : ''}"
 href="/publications"
 >
 Publications
 </a>
 <a
 class="cyber-nav-link {currentRoute.includes('/portfolio') ? 'active' : ''}"
 href="/portfolio"
 >
 Portfolio
 </a>
 <a
 class="cyber-nav-link {currentRoute.includes('/blog') ? 'active' : ''}"
 href="/blog"
 >
 Blog
 </a>
 <a
 class="cyber-nav-link {currentRoute.includes('/contact') ? 'active' : ''}"
 href="/contact"
 >
 Contact
 </a>
 </nav>

 <!-- Mobile menu button -->
 <button
 class="cyber-icon-btn flex lg:!hidden"
 onclick={() => (mobileMenuOpen = true)}
 aria-label="Open menu"
 >
 <Icon icon="mdi:menu" class="text-2xl" />
 </button>
 </div>
 </div>
 </header>

 <!-- Page content -->
 <main id="page" class="flex-1 overflow-auto">
 {#key data.pathname}
 <div
 class="container px-4 mx-auto"
 in:fly={{ easing: cubicOut, y: 10, duration: 150, delay: 200 }}
 out:fly={{ easing: cubicIn, y: 10, duration: 150 }}
 >
 {@render children()}
 </div>
 {/key}
 </main>

 <!-- Footer -->
 <footer class="py-4" style="border-top: 1px solid var(--rule);">
 <div class="container mx-auto px-4">
 <div class="flex flex-col sm:flex-row items-center justify-between gap-4 py-2">
 <p class="font-mono text-xs uppercase tracking-widest" style="color: var(--ink-faint);">
 Wasita Mahaphanit · {currentYear} · printed in Svelte <span style="color: var(--accent);">&#9829;</span>
 </p>
 <nav class="flex items-center gap-1" aria-label="Social links">
 <a
 class="cyber-icon-btn flex"
 href="https://wasita-mahaphanit-cv.netlify.app"
 target="_blank"
 rel="noreferrer"
 title="CV"
 >
 <Icon icon="academicons:cv-square" class="text-lg" />
 </a>
 <a
 class="cyber-icon-btn flex"
 href="https://scholar.google.com/citations?user=1tZe-1gAAAAJ"
 target="_blank"
 rel="noreferrer"
 title="Google Scholar"
 >
 <Icon icon="academicons:google-scholar-square" class="text-lg" />
 </a>
 <a
 class="cyber-icon-btn flex"
 href="https://bsky.app/profile/wasita.bsky.social"
 target="_blank"
 rel="noreferrer"
 title="Bluesky"
 >
 <Icon icon="simple-icons:bluesky" class="text-lg" />
 </a>
 <a
 class="cyber-icon-btn flex"
 href="https://twitter.com/mahaphanit"
 target="_blank"
 rel="noreferrer"
 title="Twitter"
 >
 <Icon icon="mdi:twitter" class="text-lg" />
 </a>
 <a
 class="cyber-icon-btn flex"
 href="https://linkedin.com/in/wasita-mahaphanit"
 target="_blank"
 rel="noreferrer"
 title="LinkedIn"
 >
 <Icon icon="mdi:linkedin" class="text-lg" />
 </a>
 <a
 class="cyber-icon-btn flex"
 href="https://github.com/wasita"
 target="_blank"
 rel="noreferrer"
 title="GitHub"
 >
 <Icon icon="mdi:github" class="text-lg" />
 </a>
 </nav>
 </div>
 </div>
 </footer>
</div>
