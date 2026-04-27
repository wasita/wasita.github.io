<script lang="ts">
 type Post = { meta: { title: string; date: string; excerpt?: string; visible?: boolean }; path: string };
 let { data }: { data: { posts: Post[] } } = $props();

 let latestPost = $derived(data.posts.find((p) => p.meta.visible === true));
 let drafts = $derived(data.posts.filter((p) => p.meta.visible !== true));
</script>

<!-- Home / hero — album-cover scale, asymmetric -->
<div class="px-6 lg:px-12 pt-12 pb-16 max-w-6xl mx-auto">
 <div class="grid grid-cols-12 gap-6 lg:gap-10">
 <!-- Headline: spans most of the row -->
 <div class="col-span-12 lg:col-span-9 order-2 lg:order-1">
 <h1 class="font-display leading-[0.85] mb-0" style="font-size: clamp(4rem, 14vw, 11rem);">
 hi, I'm<br />
 <span style="color: var(--accent);">Wasita</span>.
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

 <!-- Subtitle hung in the margin under the portrait, offset right -->
 <div class="col-span-12 lg:col-start-5 lg:col-span-7 order-3 mt-6 lg:mt-10">
 <p class="font-body text-xl lg:text-2xl leading-tight" style="color: var(--ink-soft);">
 PhD candidate studying how people navigate uncertainty about other minds through interaction and conversation.
 </p>
 </div>
 </div>
</div>

<!-- Latest musings — overlapping label treatment -->
{#if latestPost || drafts.length > 0}
 <section class="px-6 lg:px-12 pb-20 max-w-6xl mx-auto">
 <h2 class="font-display leading-[0.85] mb-8" style="font-size: clamp(3rem, 8vw, 6rem); color: var(--ink);">
 latest <span style="color: var(--accent);">musings</span>
 </h2>

 <div class="grid grid-cols-12 gap-6">
 {#if latestPost}
 <a href="/{latestPost.path}" class="col-span-12 lg:col-span-8 lg:col-start-3 block mb-2 no-underline group">
 <p class="font-mono text-xs mb-2" style="color: var(--ink-faint);">
 {latestPost.meta.date}
 </p>
 <h3 class="font-display mb-3 leading-[0.95]" style="font-size: clamp(2rem, 5vw, 3.5rem);">
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
 <div class="col-span-12 lg:col-span-8 lg:col-start-3 mt-4 pt-4" style="border-top: 1px solid var(--rule);">
 <p class="font-body text-sm leading-relaxed" style="color: var(--ink-soft);">
 <span class="font-marker text-lg" style="color: var(--accent); margin-right: 0.5rem;">↳ in the works:</span>
 {#each drafts as d, i}<em style="color: var(--ink);">{d.meta.title}</em>{#if i < drafts.length - 1}{', '}{/if}{/each}
 </p>
 </div>
 {/if}
 </div>
 </section>
{/if}
