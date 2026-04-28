<!-- blog index — single-column editorial cards, taped covers -->

<script lang="ts">
 let { data } = $props();
</script>

<svelte:head>
 <title>blog · wasita.space</title>
</svelte:head>

<div class="px-4 lg:px-6 pt-12 pb-20 max-w-5xl mx-auto">
 <h1 class="font-display leading-[0.95] mb-12" style="font-size: clamp(3rem, 9vw, 6.5rem);">
 the <span style="color: var(--accent);">musings</span>.
 </h1>

 <div class="space-y-16 max-w-3xl">
 {#each data.posts as post}
 {#if post.meta.visible == true}
 <a
 class="block no-underline group"
 href={post.path}
 >
 <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
 {#if post.meta.cover}
 <div class="md:col-span-1">
 <div class="taped-photo" style="transform: rotate(-2deg);">
 <img
 src={post.meta.cover}
 alt={post.meta.title}
 loading="lazy"
 decoding="async"
 class="block w-full h-44 object-cover"
 />
 </div>
 </div>
 {/if}
 <div class="md:col-span-2">
 <p class="font-mono text-xs mb-2" style="color: var(--ink-faint);">
 {post.meta.date}
 </p>
 <h2 class="font-display mb-3" style="font-size: clamp(1.75rem, 3.5vw, 2.5rem); line-height: 1; color: var(--ink);">
 <span class="group-hover:[background-size:100%_3px]" style="background-image: linear-gradient(var(--accent), var(--accent)); background-repeat: no-repeat; background-position: 0 100%; background-size: 0 3px; transition: background-size 0.3s ease; padding-bottom: 4px;">
 {post.meta.title}
 </span>
 </h2>
 {#if post.meta.excerpt}
 <p class="font-body text-base leading-relaxed" style="color: var(--ink-soft);">
 {post.meta.excerpt}
 </p>
 {/if}
 </div>
 </div>
 </a>
 {/if}
 {/each}
 </div>
</div>
