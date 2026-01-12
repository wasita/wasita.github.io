<script lang="ts">
  let { data } = $props();
</script>

<article class="prose prose-lg dark:prose-invert max-w-4xl mx-auto px-4">
  <div
    class="rounded-xl text-center bg-cover mb-8 overflow-hidden"
    style="background-image: url({data.cover});"
  >
    <div class="w-full h-full px-8 py-16 bg-gray-900/80">
      <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">{data.title}</h1>
      <p class="text-gray-200">Published: {data.date}</p>
    </div>
  </div>
  <data.content />
</article>
