<!-- blog page layout
	currently displays each blog post as a card with 2 columns
-->

<script lang="ts">
  let { data } = $props();
</script>

<h1 class="pt-4 pb-8 font-bold text-2xl lg:text-3xl cyber-heading">
  <span class="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">Blog</span>
</h1>
<div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
  {#each data.posts as post}
    {#if post.meta.visible == true}
      <a
        class="group block overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 hover:shadow-[0_0_12px_rgba(34,211,238,0.3),0_0_24px_rgba(167,139,250,0.2),0_0_36px_rgba(232,121,249,0.15)] hover:scale-[1.02] transition-all duration-200"
        href={post.path}
      >
        <header>
          <img
            src={post.meta.cover}
            alt="Post"
            loading="lazy"
            decoding="async"
            class="object-cover w-full h-48"
          />
        </header>
        <div class="p-4 space-y-2">
          <h4 class="font-bold text-lg">{post.meta.title}</h4>
          <p class="text-gray-600 dark:text-gray-300 text-sm">
            {post.meta.excerpt}
          </p>
        </div>
        <footer class="px-4 pb-4">
          <hr class="opacity-30 mb-3" />
          <small class="text-gray-500 dark:text-gray-400">Last updated: {post.meta.date}</small>
        </footer>
      </a>
    {/if}
  {/each}
</div>
