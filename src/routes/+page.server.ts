import type { PageServerLoad } from './$types';

import { post } from '$lib/content/post';

export const load: PageServerLoad = async (event) => {
	return {
		post: JSON.stringify(post)
	};
};
