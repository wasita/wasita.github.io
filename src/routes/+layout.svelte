<script lang="ts">
  import { page } from "$app/stores";
  import "$lib/theme.css";
  import "../app.postcss";
  import Icon from "@iconify/svelte";
  import { fly, fade } from "svelte/transition";
  import { cubicIn, cubicOut } from "svelte/easing";
  import { afterNavigate } from "$app/navigation";
  import { browser } from "$app/environment";

  let currentYear = new Date().getFullYear();
  let mobileMenuOpen = false;
  let darkMode = browser ? document.documentElement.classList.contains("dark") : false;

  afterNavigate((params: any) => {
    const isNewPage: boolean =
      params.from && params.to && params.from.route.id !== params.to.route.id;
    const elemPage = document.querySelector("#page");
    if (isNewPage && elemPage !== null) {
      elemPage.scrollTop = 0;
    }
    mobileMenuOpen = false;
  });

  function toggleDarkMode() {
    darkMode = !darkMode;
    if (browser) {
      document.documentElement.classList.toggle("dark", darkMode);
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    }
  }

  // Initialize dark mode from localStorage
  if (browser) {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      darkMode = true;
    }
  }

  $: currentRoute = $page.url.pathname;
  export let data;
</script>

<svelte:head>
  <title>wasita.space</title>
</svelte:head>

<!-- Mobile menu drawer -->
{#if mobileMenuOpen}
  <div
    class="fixed inset-0 z-50 lg:hidden"
    transition:fade={{ duration: 200 }}
  >
    <!-- Backdrop -->
    <button
      class="absolute inset-0 bg-black/50 backdrop-blur-sm"
      on:click={() => (mobileMenuOpen = false)}
      aria-label="Close menu"
    ></button>

    <!-- Menu panel -->
    <nav
      class="absolute right-0 top-0 h-full w-full max-w-sm bg-surface-100 dark:bg-surface-800 p-6 shadow-xl"
      transition:fly={{ x: 300, duration: 300, easing: cubicOut }}
    >
      <div class="flex items-center pb-6">
        <h2 class="flex-1 pl-4 font-bold text-lg">Menu</h2>
        <button
          class="btn btn-icon btn-glass"
          on:click={() => (mobileMenuOpen = false)}
          aria-label="Close menu"
        >
          <Icon icon="mdi:close" class="text-xl" />
        </button>
      </div>

      <ul class="space-y-2">
        <li>
          <a
            class="btn btn-xl {currentRoute === '/' ? 'btn-glass-primary' : 'btn-glass'}"
            href="/"
          >
            Home
          </a>
        </li>
        <li>
          <a
            class="btn btn-xl {currentRoute.includes('/about') ? 'btn-glass-primary' : 'btn-glass'}"
            href="/about"
          >
            About
          </a>
        </li>
        <li>
          <a
            class="btn btn-xl {currentRoute.includes('/research') ? 'btn-glass-primary' : 'btn-glass'}"
            href="/research"
          >
            Research
          </a>
        </li>
        <li>
          <a
            class="btn btn-xl {currentRoute.includes('/portfolio') ? 'btn-glass-primary' : 'btn-glass'}"
            href="/portfolio"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            class="btn btn-xl {currentRoute.includes('/blog') ? 'btn-glass-primary' : 'btn-glass'}"
            href="/blog"
          >
            Blog
          </a>
        </li>
        <li>
          <a
            class="btn btn-xl {currentRoute.includes('/contact') ? 'btn-glass-primary' : 'btn-glass'}"
            href="/contact"
          >
            Contact
          </a>
        </li>
      </ul>

      <hr class="my-6 divider" />

      <ul class="grid grid-cols-3 gap-2">
        <li>
          <a
            class="btn btn-soft hover:btn-soft-primary"
            href="https://wasita-mahaphanit-cv.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="academicons:cv-square" class="text-3xl" />
          </a>
        </li>
        <li>
          <a
            class="btn btn-soft hover:btn-soft-primary"
            href="https://scholar.google.com/citations?user=1tZe-1gAAAAJ"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="academicons:google-scholar-square" class="text-3xl" />
          </a>
        </li>
        <li>
          <a
            class="btn btn-soft hover:btn-soft-primary"
            href="https://bsky.app/profile/wasita.bsky.social"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="simple-icons:bluesky" class="text-3xl" />
          </a>
        </li>
        <li>
          <a
            class="btn btn-soft hover:btn-soft-primary"
            href="https://twitter.com/mahaphanit"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="mdi:twitter" class="text-3xl" />
          </a>
        </li>
        <li>
          <a
            class="btn btn-soft hover:btn-soft-primary"
            href="https://linkedin.com/in/wasita-mahaphanit"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="mdi:linkedin" class="text-3xl" />
          </a>
        </li>
        <li>
          <a
            class="btn btn-soft hover:btn-soft-primary"
            href="https://github.com/wasita"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="mdi:github" class="text-3xl" />
          </a>
        </li>
      </ul>
    </nav>
  </div>
{/if}

<!-- Main layout -->
<div class="flex flex-col h-full bg-surface-50 dark:bg-surface-900 text-surface-900 dark:text-white">
  <!-- Header -->
  <header class="sticky top-0 z-10 bg-surface-50/80 dark:bg-surface-900/80 backdrop-blur-xl">
    <nav class="container mx-auto flex items-center justify-between py-4 px-4">
      <!-- Logo -->
      <a href="/">
        <img src="/favicon.png" alt="Wasita" class="w-12 h-12 avatar" />
      </a>

      <!-- Right side -->
      <div class="flex items-center gap-2">
        <!-- Dark mode toggle -->
        <button
          class="btn btn-sm btn-soft"
          on:click={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {#if darkMode}
            <Icon icon="mdi:weather-sunny" class="text-xl" />
          {:else}
            <Icon icon="mdi:weather-night" class="text-xl" />
          {/if}
        </button>

        <!-- Desktop nav -->
        <div class="hidden lg:flex items-center gap-2">
          <a
            class="btn btn-sm {currentRoute === '/' ? 'btn-glass-primary' : 'btn-glass'}"
            href="/"
          >
            Home
          </a>
          <a
            class="btn btn-sm {currentRoute.includes('/about') ? 'btn-glass-primary' : 'btn-glass'}"
            href="/about"
          >
            About
          </a>
          <a
            class="btn btn-sm {currentRoute.includes('/research') ? 'btn-glass-primary' : 'btn-glass'}"
            href="/research"
          >
            Research
          </a>
          <a
            class="btn btn-sm {currentRoute.includes('/portfolio') ? 'btn-glass-primary' : 'btn-glass'}"
            href="/portfolio"
          >
            Portfolio
          </a>
          <a
            class="btn btn-sm {currentRoute.includes('/blog') ? 'btn-glass-primary' : 'btn-glass'}"
            href="/blog"
          >
            Blog
          </a>
          <a
            class="btn btn-sm {currentRoute.includes('/contact') ? 'btn-glass-primary' : 'btn-glass'}"
            href="/contact"
          >
            Contact
          </a>

          <div class="h-6 divider-vertical mx-2"></div>

          <a
            class="btn btn-sm btn-soft hover:btn-soft-primary"
            href="https://wasita-mahaphanit-cv.netlify.app"
            target="_blank"
            rel="noreferrer"
            aria-label="CV"
          >
            <Icon icon="academicons:cv-square" class="text-xl" />
          </a>
          <a
            class="btn btn-sm btn-soft hover:btn-soft-primary"
            href="https://scholar.google.com/citations?user=1tZe-1gAAAAJ"
            target="_blank"
            rel="noreferrer"
            aria-label="Google Scholar"
          >
            <Icon icon="academicons:google-scholar-square" class="text-xl" />
          </a>
          <a
            class="btn btn-sm btn-soft hover:btn-soft-primary"
            href="https://bsky.app/profile/wasita.bsky.social"
            target="_blank"
            rel="noreferrer"
            aria-label="Bluesky"
          >
            <Icon icon="simple-icons:bluesky" class="text-xl" />
          </a>
          <a
            class="btn btn-sm btn-soft hover:btn-soft-primary"
            href="https://twitter.com/mahaphanit"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <Icon icon="mdi:twitter" class="text-xl" />
          </a>
          <a
            class="btn btn-sm btn-soft hover:btn-soft-primary"
            href="https://linkedin.com/in/wasita-mahaphanit"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Icon icon="mdi:linkedin" class="text-xl" />
          </a>
          <a
            class="btn btn-sm btn-soft hover:btn-soft-primary"
            href="https://github.com/wasita"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Icon icon="mdi:github" class="text-xl" />
          </a>
        </div>

        <!-- Mobile menu button -->
        <button
          class="btn btn-icon btn-soft lg:hidden"
          on:click={() => (mobileMenuOpen = true)}
          aria-label="Open menu"
        >
          <Icon icon="mdi:menu" class="text-2xl" />
        </button>
      </div>
    </nav>
  </header>

  <!-- Main content -->
  <main id="page" class="flex-1 overflow-y-auto">
    {#key data.pathname}
      <div
        class="container px-4 mx-auto"
        in:fly={{ easing: cubicOut, y: 10, duration: 150, delay: 200 }}
        out:fly={{ easing: cubicIn, y: 10, duration: 150 }}
      >
        <slot />
      </div>
    {/key}
  </main>

  <!-- Footer -->
  <footer class="container mx-auto">
    <div class="flex items-center justify-center p-4 mx-4 my-4 rounded-xl">
      <p>
        Wasita Mahaphanit &copy; {currentYear} | Built with
        <span class="text-purple-400 text-xl">&hearts;</span> ft. Svelte & Tailwind
      </p>
    </div>
  </footer>
</div>
