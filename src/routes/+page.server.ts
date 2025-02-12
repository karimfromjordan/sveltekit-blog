import type { PageServerLoad } from './$types';

import { page } from '$lib/content/Page';

console.log(JSON.stringify(page, null, 2));

export const load: PageServerLoad = async (event) => {
	return {
		page: JSON.parse(JSON.stringify(page))
	};
};
