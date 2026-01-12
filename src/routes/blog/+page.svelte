<!-- blog page layout
	currently displays each blog post as a card with 2 columns
-->

<script lang="ts">
  let { data } = $props();
</script>

<h1 class="pt-4 pb-8 font-bold">Blog</h1>
<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
  {#each data.posts as post}
    {#if post.meta.visible == true}
      <a
        class="mx-auto my-4 overflow-hidden card bg-surface-100-800-token card-hover lg:mx-4"
        href={post.path}
      >
        <header>
          <img
            src={post.meta.cover}
            class="object-cover w-full h-48"
            alt="Post"
          />
        </header>
        <div class="p-4 space-y-4">
          <h4 data-toc-ignore="" class="font-bold">{post.meta.title}</h4>
          <article>
            <p>
              {post.meta.excerpt}
            </p>
          </article>
        </div>
        <footer>
          <hr class="opacity-50" />
          <div class="flex items-center justify-end p-4 space-x-4">
            <div class="flex items-center justify-between flex-auto align">
              <small>Last updated: {post.meta.date}</small>
            </div>
          </div>
        </footer>
      </a>
    {/if}
  {/each}
</div>
