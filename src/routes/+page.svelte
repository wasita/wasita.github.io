<script lang="ts">
 type Post = { meta: { title: string; date: string; excerpt?: string; visible?: boolean }; path: string };
 let { data }: { data: { posts: Post[] } } = $props();

 let latestPost = $derived(data.posts.find((p) => p.meta.visible === true));
 let drafts = $derived(data.posts.filter((p) => p.meta.visible !== true));
</script>

<!-- Home / hero — album-cover scale, asymmetric -->
<div class="px-4 lg:px-6 pt-12 pb-16 max-w-6xl mx-auto">
 <div class="grid grid-cols-12 gap-0 lg:gap-1">
 <!-- Headline: spans most of the row -->
 <div class="col-span-12 lg:col-span-9 order-2 lg:order-1">
 <h1 class="font-display mb-0" style="font-size: clamp(3rem, 10vw, 8rem); line-height: 1.05;">
 hi, I'm<br />
 <span style="color: var(--accent); position: relative; display: inline-block;">
 Wasita<span class="sparkle" aria-hidden="true" style="position: absolute; top: -0.05em; right: -0.45em; width: 0.3em; height: 0.3em;"></span><span class="sparkle" aria-hidden="true" style="position: absolute; bottom: 0.15em; left: -0.25em; width: 0.22em; height: 0.22em;"></span></span><span class="saturn-orb" aria-hidden="true" style="width: 0.55em; height: 0.55em; margin-left: 0.05em; vertical-align: 0.15em;"></span><span class="sparkle" aria-hidden="true" style="width: 0.18em; height: 0.18em; margin-left: 0.05em; vertical-align: 0.55em;"></span>.
 </h1>
 </div>

 <!-- Portrait: smaller column, hangs into the headline area -->
 <div class="col-span-12 lg:col-span-3 order-1 lg:order-2 relative flex lg:block justify-center">
 <div class="relative" style="lg:margin-top: -1rem;">
 <div class="taped-photo" style="transform: rotate(-3.5deg);">
 <img
 src="/images/wasi_icon.jpg"
 alt="wasita"
 class="block w-44 h-44 md:w-56 md:h-56 lg:w-full lg:h-auto object-cover"
 />
 </div>
 <div class="absolute -bottom-7 -right-3 sticky-note">
 <span class="cyber-pulse" style="vertical-align: middle; margin-right: 6px;"></span>
 status: dissertating
 </div>
 </div>
 </div>

 <!-- Subtitle: left-aligned under the headline -->
 <div class="col-span-12 lg:col-span-9 order-3 mt-4 lg:mt-6">
 <p class="font-body text-xl lg:text-2xl leading-tight" style="color: var(--ink-soft);">
 PhD candidate studying how people navigate uncertainty about<br />
 other minds through interaction and conversation.
 </p>
 </div>
 </div>
</div>

<!-- Latest musings — same alignment + padding as hero so the column reads continuous -->
{#if latestPost || drafts.length > 0}
 <section class="px-4 lg:px-6 pb-20 max-w-6xl mx-auto">
 <h2 class="font-display mb-6 lg:mb-8" style="font-size: clamp(2.25rem, 5vw, 3.5rem); line-height: 1; color: var(--ink);">
 latest <span style="color: var(--accent);">musings</span><span class="star" aria-hidden="true" style="width: 0.5em; height: 0.5em; margin-left: 0.2em; vertical-align: 0.5em;"></span>
 </h2>

 <div class="max-w-3xl">
 {#if latestPost}
 <a href="/{latestPost.path}" class="block mb-6 no-underline group">
 <p class="font-mono text-xs mb-2" style="color: var(--ink-faint);">
 {latestPost.meta.date}
 </p>
 <h3 class="font-display mb-3" style="font-size: clamp(1.75rem, 3.5vw, 2.5rem); line-height: 1; color: var(--ink);">
 <span class="group-hover:[background-size:100%_3px]" style="background-image: linear-gradient(var(--accent), var(--accent)); background-repeat: no-repeat; background-position: 0 100%; background-size: 0 3px; transition: background-size 0.3s ease; padding-bottom: 4px;">
 {latestPost.meta.title}
 </span>
 </h3>
 {#if latestPost.meta.excerpt}
 <p class="font-body text-lg leading-relaxed" style="color: var(--ink-soft);">
 {latestPost.meta.excerpt}
 </p>
 {/if}
 </a>
 {/if}

 {#if drafts.length > 0}
 <p class="font-body text-sm leading-relaxed mt-4" style="color: var(--ink-soft);">
 <span class="font-marker text-lg" style="color: var(--accent); margin-right: 0.5rem;">↳ in the works:</span>
 {#each drafts as d, i}<em style="color: var(--ink);">{d.meta.title}</em><span class="font-marker" style="color: var(--ink-faint); margin-left: 0.3rem; font-size: 0.95rem;">(draft)</span>{#if i < drafts.length - 1}{', '}{/if}{/each}
 </p>
 {/if}
 </div>
 </section>
{/if}
