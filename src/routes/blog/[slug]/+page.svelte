<script lang="ts">
  let { data } = $props();
</script>

<article class="prose dark:prose-invert mx-auto">
  <div
    class="card text-center bg-cover"
    style="background-image: url({data.cover});"
  >
    <div class="w-full h-full px-12 bg-surface-800 bg-opacity-80">
      <h1 class="pt-20 pb-4 font-bold text-white">{data.title}</h1>
      <p class="pb-20 text-white">Published: {data.date}</p>
    </div>
  </div>
  <data.content />
</article>
