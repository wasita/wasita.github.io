<script lang="ts">
 let { data } = $props();
</script>

<svelte:head>
 <title>{data.title} · wasita.space</title>
</svelte:head>

<article class="px-6 lg:px-12 pt-8 pb-20 max-w-3xl mx-auto">
 <p class="font-mono text-xs tracking-widest uppercase mb-2" style="color: var(--ink-faint);">
 wasita.space &nbsp;/&nbsp; blog &nbsp;/&nbsp; {data.date}
 </p>
 <h1 class="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.0] mb-8" style="color: var(--ink);">
 {data.title}
 </h1>

 {#if data.cover}
 <div class="mb-12 flex justify-center">
 <div class="taped-photo" style="max-width: 480px;">
 <img src={data.cover} alt={data.title} class="block w-full h-auto object-cover" />
 </div>
 </div>
 {/if}

 <div class="prose prose-lg max-w-none dropcap font-body
              prose-headings:font-display prose-headings:font-normal
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-2xl
              prose-p:leading-relaxed prose-p:my-4
              prose-blockquote:font-body prose-blockquote:not-italic
              prose-blockquote:pl-5 prose-blockquote:my-8 prose-blockquote:text-xl
              prose-img:my-8 prose-img:mx-auto
              prose-strong:font-semibold
              prose-code:font-mono prose-code:text-sm
              dark:prose-invert"
        style="--tw-prose-body: var(--ink); --tw-prose-headings: var(--ink); --tw-prose-bold: var(--ink); --tw-prose-links: var(--accent); --tw-prose-quotes: var(--accent); --tw-prose-quote-borders: var(--accent); --tw-prose-invert-body: var(--ink); --tw-prose-invert-headings: var(--ink);">
 <data.content />
 </div>

 <hr class="mt-16 mb-8" style="border-color: var(--rule);" />

 <div class="flex items-center justify-between text-sm">
 <a href="/blog" class="font-mono uppercase tracking-widest text-xs no-underline" style="color: var(--ink-soft);">
 ← all musings
 </a>
 <p class="margin-note">— wasita</p>
 </div>
</article>
