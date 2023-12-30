<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<h1 class="pt-4 pb-8 font-bold">i like building stuff</h1>
<div class="p-16 my-2 border rounded-xl border-surface-300 dark:border-surface-700 bg-surface-100 dark:bg-surface-800">
	<div class="items-center block lg:flex">
		<img src="https://brown-ccv.github.io/honeycomb-docs/img/hexagon-regular.svg" alt="honeycomb" class="w-full lg:w-1/4" />
		<div class="flex-1">
			<div class="block lg:pl-12">
				<h2 class="font-bold">honeycomb</h2>
				<h3>developer (2019-2021)</h3>
				<div class="py-2">
					<span class="chip variant-soft-error">
						<span><Icon icon="mdi:react" /></span>
						<span>react</span>
					</span>
					<span class="chip variant-soft-tertiary">
						<span><Icon icon="logos:electron" /></span>
						<span>electron</span>
					</span>
					<span class="chip variant-soft-warning">
						<span><Icon icon="mdi:firebase" /></span>
						<span>firebase</span>
					</span>
				</div>
				<p>
					honeycomb: a template for reproducible psychophysiological tasks for clinic, laboratory, and home use.
				</p>
				<p class="mt-2">
					Provenza, N.R., Gelin, L.F.F., <span class="font-bold">Mahaphanit, W.,</span> McGrath, M.C., Dastin-van Rijn, E.M., Fan, Y., Dhar, R., Frank, M.J., Restrepo, M.I., Goodman, W.K. and Borton, D.A., 2021. Honeycomb: a template for reproducible psychophysiological tasks for clinic, laboratory, and home use. Brazilian Journal of Psychiatry, 44, pp.147-155.
				</p>
				<div class="mt-4">
					<a
						class="btn variant-glass-primary"
						href="https://brown-ccv.github.io/honeycomb-docs/"
						target="_blank"
						rel="noreferrer">visit honeycomb</a>
					<a
						class="btn variant-glass-surface"
						href="https://github.com/brown-ccv/honeycomb"
						target="_blank"
						rel="noreferrer">github repo</a>
				</div>
			</div>
		</div>
	</div>
</div>