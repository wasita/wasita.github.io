<script lang="ts">
  import { page } from "$app/stores";
  import "../app.css";
  import { Avatar } from "@skeletonlabs/skeleton-svelte";
  import Icon from "@iconify/svelte";
  import { fly } from "svelte/transition";
  import { cubicIn, cubicOut } from "svelte/easing";
  import { afterNavigate } from "$app/navigation";
  import type { Snippet } from "svelte";

  // Props using Svelte 5 runes
  let { data, children }: { data: { pathname: string }; children: Snippet } = $props();

  // State
  let mobileMenuOpen = $state(false);
  let isDark = $state(true);

  const currentYear = new Date().getFullYear();

  // Derived state
  let currentRoute = $derived($page.url.pathname);

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
    document.documentElement.classList.toggle("dark", isDark);
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
    class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden"
    onclick={closeMobileMenu}
    onkeydown={(e) => e.key === "Escape" && closeMobileMenu()}
    role="button"
    tabindex="0"
  >
    <div
      class="absolute right-0 top-0 h-full w-80 bg-surface-100 dark:bg-surface-800 p-6"
      onclick={(e) => e.stopPropagation()}
      onkeydown={() => {}}
      role="dialog"
      aria-modal="true"
      tabindex="-1"
    >
      <div class="flex items-center pb-6">
        <h2 class="flex-1 font-bold text-lg">Menu</h2>
        <button
          class="btn preset-filled-surface-500"
          onclick={closeMobileMenu}
        >
          <Icon icon="mdi:close" class="text-xl" />
        </button>
      </div>
      <ul class="space-y-2">
        <li>
          <a
            class="block py-3 px-4 rounded-lg transition-colors {currentRoute === '/' ? 'bg-primary-500 text-white' : 'hover:bg-surface-200 dark:hover:bg-surface-700'}"
            href="/"
            onclick={closeMobileMenu}
          >
            Home
          </a>
        </li>
        <li>
          <a
            class="block py-3 px-4 rounded-lg transition-colors {currentRoute.includes('/about') ? 'bg-primary-500 text-white' : 'hover:bg-surface-200 dark:hover:bg-surface-700'}"
            href="/about"
            onclick={closeMobileMenu}
          >
            About
          </a>
        </li>
        <li>
          <a
            class="block py-3 px-4 rounded-lg transition-colors {currentRoute.includes('/research') ? 'bg-primary-500 text-white' : 'hover:bg-surface-200 dark:hover:bg-surface-700'}"
            href="/research"
            onclick={closeMobileMenu}
          >
            Research
          </a>
        </li>
        <li>
          <a
            class="block py-3 px-4 rounded-lg transition-colors {currentRoute.includes('/portfolio') ? 'bg-primary-500 text-white' : 'hover:bg-surface-200 dark:hover:bg-surface-700'}"
            href="/portfolio"
            onclick={closeMobileMenu}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            class="block py-3 px-4 rounded-lg transition-colors {currentRoute.includes('/blog') ? 'bg-primary-500 text-white' : 'hover:bg-surface-200 dark:hover:bg-surface-700'}"
            href="/blog"
            onclick={closeMobileMenu}
          >
            Blog
          </a>
        </li>
        <li>
          <a
            class="block py-3 px-4 rounded-lg transition-colors {currentRoute.includes('/contact') ? 'bg-primary-500 text-white' : 'hover:bg-surface-200 dark:hover:bg-surface-700'}"
            href="/contact"
            onclick={closeMobileMenu}
          >
            Contact
          </a>
        </li>
      </ul>
      <hr class="my-6 border-surface-300 dark:border-surface-600" />
      <ul class="grid grid-cols-3 gap-2">
        <li>
          <a
            class="btn preset-outlined-surface-500 w-full"
            href="https://wasita-mahaphanit-cv.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="academicons:cv-square" class="text-2xl" />
          </a>
        </li>
        <li>
          <a
            class="btn preset-outlined-surface-500 w-full"
            href="https://scholar.google.com/citations?user=1tZe-1gAAAAJ"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="academicons:google-scholar-square" class="text-2xl" />
          </a>
        </li>
        <li>
          <a
            class="btn preset-outlined-surface-500 w-full"
            href="https://bsky.app/profile/wasita.bsky.social"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="simple-icons:bluesky" class="text-2xl" />
          </a>
        </li>
        <li>
          <a
            class="btn preset-outlined-surface-500 w-full"
            href="https://twitter.com/mahaphanit"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="mdi:twitter" class="text-2xl" />
          </a>
        </li>
        <li>
          <a
            class="btn preset-outlined-surface-500 w-full"
            href="https://linkedin.com/in/wasita-mahaphanit"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="mdi:linkedin" class="text-2xl" />
          </a>
        </li>
        <li>
          <a
            class="btn preset-outlined-surface-500 w-full"
            href="https://github.com/wasita"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="mdi:github" class="text-2xl" />
          </a>
        </li>
      </ul>
    </div>
  </div>
{/if}

<!-- Main layout -->
<div class="h-full flex flex-col overflow-hidden">
  <!-- Header -->
  <header class="sticky top-0 z-10 bg-surface-50 dark:bg-surface-900 backdrop-blur-xl">
    <div class="container mx-auto py-4 px-4 flex items-center justify-between">
      <!-- Logo -->
      <a href="/">
        <Avatar src="/favicon.png" name="Wasita" class="size-10" />
      </a>

      <!-- Desktop nav + actions -->
      <div class="flex items-center gap-3">
        <!-- Dark mode toggle -->
        <button
          class="btn preset-outlined-surface-500 size-10 p-0"
          onclick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          <Icon icon={isDark ? "mdi:weather-sunny" : "mdi:weather-night"} class="text-xl" />
        </button>

        <!-- Desktop navigation -->
        <nav class="hidden lg:flex items-center gap-2">
          <a
            class="btn btn-sm {currentRoute === '/' ? 'preset-filled-primary-500' : 'preset-outlined-surface-500'}"
            href="/"
          >
            Home
          </a>
          <a
            class="btn btn-sm {currentRoute.includes('/about') ? 'preset-filled-primary-500' : 'preset-outlined-surface-500'}"
            href="/about"
          >
            About
          </a>
          <a
            class="btn btn-sm {currentRoute.includes('/research') ? 'preset-filled-primary-500' : 'preset-outlined-surface-500'}"
            href="/research"
          >
            Research
          </a>
          <a
            class="btn btn-sm {currentRoute.includes('/portfolio') ? 'preset-filled-primary-500' : 'preset-outlined-surface-500'}"
            href="/portfolio"
          >
            Portfolio
          </a>
          <a
            class="btn btn-sm {currentRoute.includes('/blog') ? 'preset-filled-primary-500' : 'preset-outlined-surface-500'}"
            href="/blog"
          >
            Blog
          </a>
          <a
            class="btn btn-sm {currentRoute.includes('/contact') ? 'preset-filled-primary-500' : 'preset-outlined-surface-500'}"
            href="/contact"
          >
            Contact
          </a>
          <hr class="h-6 border-l border-surface-300 dark:border-surface-600 mx-1" />
          <a
            class="btn btn-sm preset-outlined-surface-500"
            href="https://wasita-mahaphanit-cv.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="academicons:cv-square" class="text-lg" />
          </a>
          <a
            class="btn btn-sm preset-outlined-surface-500"
            href="https://scholar.google.com/citations?user=1tZe-1gAAAAJ"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="academicons:google-scholar-square" class="text-lg" />
          </a>
          <a
            class="btn btn-sm preset-outlined-surface-500"
            href="https://bsky.app/profile/wasita.bsky.social"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="simple-icons:bluesky" class="text-lg" />
          </a>
          <a
            class="btn btn-sm preset-outlined-surface-500"
            href="https://twitter.com/mahaphanit"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="mdi:twitter" class="text-lg" />
          </a>
          <a
            class="btn btn-sm preset-outlined-surface-500"
            href="https://linkedin.com/in/wasita-mahaphanit"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="mdi:linkedin" class="text-lg" />
          </a>
          <a
            class="btn btn-sm preset-outlined-surface-500"
            href="https://github.com/wasita"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="mdi:github" class="text-lg" />
          </a>
        </nav>

        <!-- Mobile menu button -->
        <button
          class="btn preset-outlined-surface-500 lg:hidden"
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
  <footer class="py-4">
    <div class="container mx-auto">
      <div class="flex items-center justify-center p-4 mx-4 rounded-xl">
        <p>
          Wasita Mahaphanit &copy; {currentYear} | Built with
          <span class="text-purple-400 text-xl">&#9829;</span> ft. Svelte & Tailwind
        </p>
      </div>
    </div>
  </footer>
</div>
