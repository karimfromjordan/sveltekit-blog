import type { PageServerLoad } from './$types';

import { page } from '$lib/content/Page';

export const load: PageServerLoad = async (event) => {
	return {
		page: JSON.parse(JSON.stringify(page))
	};
};
