<script lang="ts">
 type Post = { meta: { title: string; date: string; excerpt?: string; visible?: boolean }; path: string };
 let { data }: { data: { posts: Post[] } } = $props();

 let latestPost = $derived(data.posts.find((p) => p.meta.visible === true));
 let drafts = $derived(data.posts.filter((p) => p.meta.visible !== true));
</script>

<!-- Home / hero -->
<div class="px-6 lg:px-12 pt-10 pb-12 max-w-5xl mx-auto">
 <div class="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
 <div class="lg:flex-1">
 <h1 class="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] mb-5">
 Hi, I'm <span style="color: var(--accent);">Wasita</span>.
 </h1>
 <p class="font-body text-xl lg:text-2xl leading-snug" style="color: var(--ink-soft);">
 PhD candidate studying how people navigate uncertainty about other minds through interaction and conversation.
 </p>
 </div>

 <!-- Portrait + sticky-note -->
 <div class="relative lg:flex-shrink-0">
 <div class="taped-photo">
 <img
 src="/images/wasi_icon.jpg"
 alt="wasita"
 class="block w-56 h-56 md:w-64 md:h-64 object-cover"
 />
 </div>
 <div class="absolute -bottom-6 -right-4 sticky-note">
 <span class="cyber-pulse" style="vertical-align: middle; margin-right: 6px;"></span>
 status: dissertating
 </div>
 </div>
 </div>
</div>

<!-- Latest musings -->
{#if latestPost || drafts.length > 0}
 <section class="px-6 lg:px-12 pb-16 max-w-5xl mx-auto">
 <h2 class="font-display text-2xl mb-6 pb-2" style="border-bottom: 1px solid var(--rule);">
 Latest musings
 </h2>

 {#if latestPost}
 <a href="/{latestPost.path}" class="block mb-6 no-underline group">
 <p class="font-mono text-xs uppercase tracking-widest mb-1" style="color: var(--ink-faint);">
 {latestPost.meta.date}
 </p>
 <h3 class="font-display text-2xl lg:text-3xl mb-2 leading-tight">
 <span class="group-hover:[background-size:100%_2px]" style="background-image: linear-gradient(var(--accent), var(--accent)); background-repeat: no-repeat; background-position: 0 100%; background-size: 0 2px; transition: background-size 0.25s ease; padding-bottom: 2px;">
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
 <p class="font-mono text-sm leading-relaxed" style="color: var(--ink-soft);">
 <span class="margin-note" style="margin-right: 0.5rem;">↳ in the works:</span>
 {#each drafts as d, i}<em class="font-body" style="color: var(--ink);">{d.meta.title}</em>{#if i < drafts.length - 1}{', '}{/if}{/each}
 </p>
 {/if}
 </section>
{/if}
