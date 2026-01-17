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
</svelte:head>

<!-- Mobile menu overlay -->
{#if mobileMenuOpen}
  <div
    class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm lg:hidden"
    onclick={closeMobileMenu}
    onkeydown={(e) => e.key === "Escape" && closeMobileMenu()}
    role="button"
    tabindex="0"
  >
    <div
      class="absolute right-0 top-0 h-full w-80 bg-gray-100 dark:bg-[#0a0a0f] dark:border-l dark:border-purple-500/30 text-black dark:text-white p-6"
      onclick={(e) => e.stopPropagation()}
      onkeydown={() => {}}
      role="dialog"
      aria-modal="true"
      tabindex="-1"
    >
      <div class="flex items-center pb-6">
        <h2 class="flex-1 font-bold text-lg text-black dark:text-purple-300">Menu</h2>
        <button
          class="px-3 py-2 rounded-lg bg-gray-200 dark:bg-purple-900/30 dark:border dark:border-purple-500/50 hover:bg-gray-300 dark:hover:bg-purple-900/50 transition-all duration-200"
          onclick={closeMobileMenu}
        >
          <Icon icon="mdi:close" class="text-xl dark:text-purple-300" />
        </button>
      </div>
      <ul class="space-y-2">
        <li>
          <a
            class="block py-3 px-4 rounded-lg transition-all duration-200 {currentRoute === '/' ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-purple-500/25' : 'hover:bg-gray-200 dark:hover:bg-purple-900/30 dark:hover:border-l-2 dark:hover:border-pink-400'}"
            href="/"
            onclick={closeMobileMenu}
          >
            Home
          </a>
        </li>
        <li>
          <a
            class="block py-3 px-4 rounded-lg transition-all duration-200 {currentRoute.includes('/about') ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-purple-500/25' : 'hover:bg-gray-200 dark:hover:bg-purple-900/30 dark:hover:border-l-2 dark:hover:border-pink-400'}"
            href="/about"
            onclick={closeMobileMenu}
          >
            About
          </a>
        </li>
        <li>
          <a
            class="block py-3 px-4 rounded-lg transition-all duration-200 {currentRoute.includes('/research') ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-purple-500/25' : 'hover:bg-gray-200 dark:hover:bg-purple-900/30 dark:hover:border-l-2 dark:hover:border-pink-400'}"
            href="/research"
            onclick={closeMobileMenu}
          >
            Research
          </a>
        </li>
        <li>
          <a
            class="block py-3 px-4 rounded-lg transition-all duration-200 {currentRoute.includes('/portfolio') ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-purple-500/25' : 'hover:bg-gray-200 dark:hover:bg-purple-900/30 dark:hover:border-l-2 dark:hover:border-pink-400'}"
            href="/portfolio"
            onclick={closeMobileMenu}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            class="block py-3 px-4 rounded-lg transition-all duration-200 {currentRoute.includes('/blog') ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-purple-500/25' : 'hover:bg-gray-200 dark:hover:bg-purple-900/30 dark:hover:border-l-2 dark:hover:border-pink-400'}"
            href="/blog"
            onclick={closeMobileMenu}
          >
            Blog
          </a>
        </li>
        <li>
          <a
            class="block py-3 px-4 rounded-lg transition-all duration-200 {currentRoute.includes('/contact') ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-purple-500/25' : 'hover:bg-gray-200 dark:hover:bg-purple-900/30 dark:hover:border-l-2 dark:hover:border-pink-400'}"
            href="/contact"
            onclick={closeMobileMenu}
          >
            Contact
          </a>
        </li>
      </ul>
      <hr class="my-6 border-gray-300 dark:border-purple-500/30" />
      <ul class="grid grid-cols-3 gap-2">
        <li>
          <a
            class="flex items-center justify-center px-3 py-2 rounded-lg border border-gray-300 dark:border-cyan-500/30 dark:hover:border-cyan-400 dark:hover:bg-cyan-900/20 transition-all duration-200"
            href="https://wasita-mahaphanit-cv.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="academicons:cv-square" class="text-2xl dark:text-cyan-300" />
          </a>
        </li>
        <li>
          <a
            class="flex items-center justify-center px-3 py-2 rounded-lg border border-gray-300 dark:border-cyan-500/30 dark:hover:border-cyan-400 dark:hover:bg-cyan-900/20 transition-all duration-200"
            href="https://scholar.google.com/citations?user=1tZe-1gAAAAJ"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="academicons:google-scholar-square" class="text-2xl dark:text-cyan-300" />
          </a>
        </li>
        <li>
          <a
            class="flex items-center justify-center px-3 py-2 rounded-lg border border-gray-300 dark:border-cyan-500/30 dark:hover:border-cyan-400 dark:hover:bg-cyan-900/20 transition-all duration-200"
            href="https://bsky.app/profile/wasita.bsky.social"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="simple-icons:bluesky" class="text-2xl dark:text-cyan-300" />
          </a>
        </li>
        <li>
          <a
            class="flex items-center justify-center px-3 py-2 rounded-lg border border-gray-300 dark:border-cyan-500/30 dark:hover:border-cyan-400 dark:hover:bg-cyan-900/20 transition-all duration-200"
            href="https://twitter.com/mahaphanit"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="mdi:twitter" class="text-2xl dark:text-cyan-300" />
          </a>
        </li>
        <li>
          <a
            class="flex items-center justify-center px-3 py-2 rounded-lg border border-gray-300 dark:border-cyan-500/30 dark:hover:border-cyan-400 dark:hover:bg-cyan-900/20 transition-all duration-200"
            href="https://linkedin.com/in/wasita-mahaphanit"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="mdi:linkedin" class="text-2xl dark:text-cyan-300" />
          </a>
        </li>
        <li>
          <a
            class="flex items-center justify-center px-3 py-2 rounded-lg border border-gray-300 dark:border-cyan-500/30 dark:hover:border-cyan-400 dark:hover:bg-cyan-900/20 transition-all duration-200"
            href="https://github.com/wasita"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="mdi:github" class="text-2xl dark:text-cyan-300" />
          </a>
        </li>
      </ul>
    </div>
  </div>
{/if}

<!-- Main layout -->
<div class="h-full flex flex-col overflow-hidden bg-white dark:bg-[#0a0a0f] text-black dark:text-gray-100">
  <!-- Header -->
  <header class="sticky top-0 z-10 bg-gray-50/90 dark:bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-gray-200 dark:border-purple-900/30">
    <div class="container mx-auto py-4 px-4 flex items-center justify-between">
      <!-- Logo -->
      <a href="/" class="group">
        <img src="/favicon.png" alt="Wasita" class="w-10 h-10 rounded-full transition-all duration-300 group-hover:ring-2 group-hover:ring-pink-500 dark:group-hover:ring-cyan-400 dark:group-hover:shadow-lg dark:group-hover:shadow-cyan-500/30" />
      </a>

      <!-- Desktop nav + actions -->
      <div class="flex items-center gap-3">
        <!-- Dark mode toggle -->
        <button
          class="cyber-icon-btn flex"
          onclick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          <Icon icon={isDark ? "mdi:weather-sunny" : "mdi:weather-night"} class="text-xl dark:text-cyan-300" />
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
          <span class="text-purple-500/50 dark:text-purple-400/30 mx-2">//</span>
          <a
            class="cyber-icon-btn flex"
            href="https://wasita-mahaphanit-cv.netlify.app"
            target="_blank"
            rel="noreferrer"
            title="CV"
          >
            <Icon icon="academicons:cv-square" class="text-lg dark:text-cyan-300" />
          </a>
          <a
            class="cyber-icon-btn flex"
            href="https://scholar.google.com/citations?user=1tZe-1gAAAAJ"
            target="_blank"
            rel="noreferrer"
            title="Google Scholar"
          >
            <Icon icon="academicons:google-scholar-square" class="text-lg dark:text-cyan-300" />
          </a>
          <a
            class="cyber-icon-btn flex"
            href="https://bsky.app/profile/wasita.bsky.social"
            target="_blank"
            rel="noreferrer"
            title="Bluesky"
          >
            <Icon icon="simple-icons:bluesky" class="text-lg dark:text-cyan-300" />
          </a>
          <a
            class="cyber-icon-btn flex"
            href="https://twitter.com/mahaphanit"
            target="_blank"
            rel="noreferrer"
            title="Twitter"
          >
            <Icon icon="mdi:twitter" class="text-lg dark:text-cyan-300" />
          </a>
          <a
            class="cyber-icon-btn flex"
            href="https://linkedin.com/in/wasita-mahaphanit"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <Icon icon="mdi:linkedin" class="text-lg dark:text-cyan-300" />
          </a>
          <a
            class="cyber-icon-btn flex"
            href="https://github.com/wasita"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            <Icon icon="mdi:github" class="text-lg dark:text-cyan-300" />
          </a>
        </nav>

        <!-- Mobile menu button -->
        <button
          class="cyber-icon-btn flex lg:!hidden"
          onclick={() => (mobileMenuOpen = true)}
          aria-label="Open menu"
        >
          <Icon icon="mdi:menu" class="text-2xl dark:text-cyan-300" />
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
  <footer class="py-4 border-t border-gray-200 dark:border-purple-900/30">
    <div class="container mx-auto">
      <div class="flex items-center justify-center p-4 mx-4 rounded-xl">
        <p class="text-gray-600 dark:text-gray-400">
          Wasita Mahaphanit &copy; {currentYear} | Built with
          <span class="text-pink-500 dark:text-pink-400 text-xl">&#9829;</span> ft. Svelte & Tailwind
        </p>
      </div>
    </div>
  </footer>
</div>
