class Post {
	h1 = '';
	slug: string;
	description?: string = undefined;
	hero_img?: string = undefined;
	published_at?: string = undefined;
	updated_at?: string = undefined;

	content: unknown[] = [];

	constructor(params: {
		h1: string;
		slug: string;
		description?: string;
		hero_img?: string;
		published_at?: string;
		updated_at?: string;
	}) {
		this.h1 = params.h1;
		this.slug = params.slug;
		this.description = params.description;
		this.hero_img = params.hero_img;
		this.published_at = params.published_at;
		this.updated_at = params.updated_at;
	}

	toJSON() {}

	p(params: { text: string | (string | unknown)[]; class?: string }) {
		this.content.push({ type: 'p', ...params });
		return this;
	}
	h2(params: { text: string; class?: string }) {
		this.content.push({ type: 'h2', ...params });
		return this;
	}
	h3(params: { text: string; class?: string }) {
		this.content.push({ type: 'h3', ...params });
		return this;
	}
	code(params: {
		lang: 'js' | 'html' | 'svelte';
		code: string;
		line_numbers?: boolean;
		highlight?: number[];
		file_name?: string;
	}) {
		this.content.push({ type: 'code', ...params });
		return this;
	}
	img(params: { src: string; alt: string; class?: string }) {
		this.content.push({ type: 'img', ...params });
		return this;
	}
	ol(params: { items: any; class?: string }) {
		this.content.push({ type: 'ol', ...params });
		return this;
	}
	ul(params: { items: any; class?: string }) {
		this.content.push({ type: 'ul', ...params });
		return this;
	}
	quote(params: { text: string; author?: string; href?: string }) {
		return this;
	}
	table(params: { header: string[]; data: Array<string[]> }) {
		return this;
	}
	note(params: { text: string }) {
		this.content.push({ type: 'note', ...params });
		return this;
	}
	tip(params: { text: string }) {
		this.content.push({ type: 'tip', ...params });
		return this;
	}
	important(params: { text: string }) {
		this.content.push({ type: 'important', ...params });
		return this;
	}
	warning(params: { text: string }) {
		this.content.push({ type: 'warning', ...params });
		return this;
	}
	caution(params: { text: string }) {
		this.content.push({ type: 'caution', ...params });
		return this;
	}
}

function link(text: string, href: `https://${string}`, opts?: { class?: string }) {
	return { type: 'inline:link', text, href, ...opts };
}

function strong(text: string, opts?: { class?: string }) {
	return { type: 'inline:strong', text, ...opts };
}

export { Post, link, strong };

const post = new Post({ h1: 'First post' })
	.p({
		class: 'text-white',
		text: ['This is a paragraph', link('Google', 'https://google.com')]
	})
	.code({
		lang: 'js',
		code: 'console.log("Hello")'
	});
