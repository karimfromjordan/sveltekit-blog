class Post {
	h1 = '';
	slug: string;
	description?: string = undefined;
	hero_img?: string = undefined;
	published_at?: string = undefined;
	updated_at?: string = undefined;

	blocks = new BlockList();

	constructor(params: {
		h1: string;
		slug: string;
		description?: string;
		hero_img?: string;
		published_at?: string;
		updated_at?: string;
		blocks?: BlockList;
	}) {
		this.h1 = params.h1;
		this.slug = params.slug;
		this.description = params.description;
		this.hero_img = params.hero_img;
		this.published_at = params.published_at;
		this.updated_at = params.updated_at;

		if (params.blocks) {
			this.blocks = params.blocks;
		}
	}

	toJSON() {}
}

class BlockList {
	blocks: unknown[] = [];

	p(params: { inlines: InlineList; class?: string }) {
		this.blocks.push({ type: 'block:p', ...params });
		return this;
	}
	h2(params: { inlines: InlineList; class?: string }) {
		this.blocks.push({ type: 'block:h2', ...params });
		return this;
	}
	h3(params: { inlines: InlineList; class?: string }) {
		this.blocks.push({ type: 'block:h3', ...params });
		return this;
	}
	code(params: {
		lang: 'js' | 'html' | 'svelte';
		code: string;
		line_numbers?: boolean;
		highlight?: number[];
		file_name?: string;
	}) {
		this.blocks.push({ type: 'block:code', ...params });
		return this;
	}
	img(params: { src: string; alt: string; class?: string }) {
		this.blocks.push({ type: 'block:img', ...params });
		return this;
	}
	ol(params: { items: InlineList[]; class?: string }) {
		this.blocks.push({ type: 'block:ol', ...params });
		return this;
	}
	ul(params: { items: InlineList[]; class?: string }) {
		this.blocks.push({ type: 'block:ul', ...params });
		return this;
	}
	quote(params: { inlines: InlineList; author?: string; href?: string }) {
		return this;
	}
	table(params: { header: InlineList[]; data: Array<InlineList[]> }) {
		return this;
	}
	note(params: { blocks: BlockList }) {
		this.blocks.push({ type: 'block:note', ...params });
		return this;
	}
	tip(params: { blocks: BlockList }) {
		this.blocks.push({ type: 'block:tip', ...params });
		return this;
	}
	important(params: { blocks: BlockList }) {
		this.blocks.push({ type: 'block:important', ...params });
		return this;
	}
	warning(params: { blocks: BlockList }) {
		this.blocks.push({ type: 'block:warning', ...params });
		return this;
	}
	caution(params: { blocks: BlockList }) {
		this.blocks.push({ type: 'block:caution', ...params });
		return this;
	}
}

class InlineList {
	inlines: unknown[] = [];

	text(text: string) {
		this.inlines.push(text);
		return this;
	}
	link(text: string, href: `https://${string}`, opts?: { class?: string }) {
		this.inlines.push({ type: 'inline:link', text, href, ...opts });
		return this;
	}
	strong(text: string, opts?: { class?: string }) {
		this.inlines.push({ type: 'inline:strong', text, ...opts });
		return this;
	}
}

const post = new Post({
	h1: 'First post',
	slug: 'first-post',
	blocks: new BlockList()
		.p({
			class: 'text-white',
			inlines: new InlineList()
				.text('Svelte is a major JavaScript framework with a great community. Check it our at')
				.link('Svelte', 'https://svelte.dev')
		})
		.code({
			lang: 'js',
			code: 'console.log("Hello")'
		})
});
