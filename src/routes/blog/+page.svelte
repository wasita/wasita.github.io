<!-- blog page layout
	currently displays each blog post as a card with 2 columns
-->

<script>
	export let data;
</script>

<h1 class="pt-4 pb-8 font-bold">Blog</h1>
<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
	{#each data.posts as post}
		<a class="mx-auto my-4 overflow-hidden card bg-surface-100-800-token card-hover lg:mx-4" href={post.path}>
			<header>
				<img src={post.meta.cover} class="object-cover w-full h-48" alt="Post" />
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
					<!-- <figure
						class="flex items-center justify-center w-8 overflow-hidden font-semibold rounded-full avatar aspect-square text-surface-50 isolate bg-surface-400-500-token"
						data-testid="avatar">
						<img
							class="object-cover w-full h-full avatar-image"
							src="/images/wasi_icon.jpg"
							alt=""
							style="" />
					</figure> -->
					<div class="flex items-center justify-between flex-auto align">
						<!-- <h6 class="font-bold">Wasita</h6> -->
						<small>{post.meta.date}</small>
					</div>
				</div>
			</footer>
		</a>
	{/each}
</div>
