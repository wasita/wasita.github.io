import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

interface PostMetadata {
	title: string;
	date: string;
	excerpt?: string;
	published?: boolean;
	coverImage?: string;
}

interface PostModule {
	metadata: PostMetadata;
}

const fetchPosts = async () => {
	const allPostFiles = import.meta.glob<PostModule>('$lib/blog/*.md');

	const allPosts = await Promise.all(
		Object.entries(allPostFiles).map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(9, -3);

			return { meta: metadata, path: postPath };
		})
	);

	return allPosts;
};

export const GET: RequestHandler = async ({ params }) => {
	const allPosts = await fetchPosts();
	const sortedPosts = allPosts.sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());
	const amount = params.amount;
	if (params.amount === 'all') {
		return json(sortedPosts);
	}
	const posts = amount ? sortedPosts.slice(0, Number(amount)) : sortedPosts;
	return json(posts);
}
