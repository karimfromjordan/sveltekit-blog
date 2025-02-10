class NodeArray extends Array {
	// Block nodes
	p(params: { children: NodeArray; class?: string }) {
		this.push({ type: 'block:p', ...params });
		return this;
	}
	h2(params: { children: NodeArray; class?: string }) {
		this.push({ type: 'block:h2', ...params });
		return this;
	}
	h3(params: { children: NodeArray; class?: string }) {
		this.push({ type: 'block:h3', ...params });
		return this;
	}
	precode(params: {
		lang: 'js' | 'html' | 'svelte';
		code: string;
		copy?: string;
		line_numbers?: boolean;
		highlight?: number[];
		file_name?: string;
	}) {
		this.push({ type: 'block:code', ...params });
		return this;
	}
	img(params: { src: string; alt: string; class?: string }) {
		this.push({ type: 'block:img', ...params });
		return this;
	}
	ol(params: { children: NodeArray; class?: string }) {
		this.push({ type: 'block:ol', ...params });
		return this;
	}
	ul(params: { children: NodeArray; class?: string }) {
		this.push({ type: 'block:ul', ...params });
		return this;
	}
	li(params: { children: NodeArray | NodeArray; class?: string }) {
		this.push({ type: 'block:li', ...params });
		return this;
	}
	blockquote(params: { children: NodeArray; cite?: string }) {
		return this;
	}
	table(params: { header: (NodeArray | NodeArray)[]; data: Array<NodeArray[]> }) {
		return this;
	}
	note(params: { children: NodeArray }) {
		this.push({ type: 'block:note', ...params });
		return this;
	}
	tip(params: { children: NodeArray }) {
		this.push({ type: 'block:tip', ...params });
		return this;
	}
	important(params: { children: NodeArray }) {
		this.push({ type: 'block:important', ...params });
		return this;
	}
	warning(params: { children: NodeArray }) {
		this.push({ type: 'block:warning', ...params });
		return this;
	}
	caution(params: { children: NodeArray }) {
		this.push({ type: 'block:caution', ...params });
		return this;
	}
	details(params: { children: NodeArray }) {
		this.push({ type: 'block:details', ...params });
		return this;
	}
	summary(params: { children: NodeArray }) {
		this.push({ type: 'block:summary', ...params });
		return this;
	}
	// Inline nodes
	text(text: string) {
		this.push(text);
		return this;
	}
	link(text: string, href: `https://${string}`, opts?: { class?: string }) {
		this.push({ type: 'inline:link', text, href, ...opts });
		return this;
	}
	strong(text: string, opts?: { class?: string }) {
		this.push({ type: 'inline:strong', text, ...opts });
		return this;
	}
	cite(text: string, opts?: { class?: string }) {
		this.push({ type: 'inline:cite', text, ...opts });
		return this;
	}
	code(text: string, opts?: { class?: string }) {
		this.push({ type: 'inline:code', text, ...opts });
		return this;
	}
	kbd(text: string, opts?: { class?: string }) {
		this.push({ type: 'inline:kbd', text, ...opts });
		return this;
	}
}

class Post {
	h1 = '';
	slug: string;
	description?: string = undefined;
	hero_img?: string = undefined;
	published_at?: string = undefined;
	updated_at?: string = undefined;

	nodes = new NodeArray();

	constructor(params: {
		h1: string;
		slug: string;
		description?: string;
		hero_img?: string;
		published_at?: string;
		updated_at?: string;
		nodes?: NodeArray;
	}) {
		this.h1 = params.h1;
		this.slug = params.slug;
		this.description = params.description;
		this.hero_img = params.hero_img;
		this.published_at = params.published_at;
		this.updated_at = params.updated_at;

		if (params.nodes) {
			this.nodes = params.nodes;
		}
	}
}

const post = new Post({
	h1: 'First post',
	slug: 'first-post',
	nodes: new NodeArray()
		.p({
			class: 'text-white',
			children: new NodeArray()
				.text(
					`This repository contains a GitHub workflow with a build job that builds
					your SvelteKit app into a very minimal systemd portable service and a
					deploy job that can upload and start the container on your server.
					The image built by the build job only contains your SvelteKit app,
					a Node.js executable and glibc++. The total size of the final image
					is approximately 37 MB.`
				)
				.link('Svelte', 'https://svelte.dev')
		})
		.h2({
			children: new NodeArray().text('How to use This')
		})
		.p({
			children: new NodeArray().text('To use this repository, you have two options:').
		})
		.ol({
			children: new NodeArray()
				.li({
					children: new NodeArray().link('Use it as a template', 'https://')
				})
				.li({
					children: new NodeArray().text('Start from scratch:').ul({
						children: new NodeArray()
							.li({
								children: new NodeArray().text('Create a new SvelteKit project using')
							})
							.li({
								children: new NodeArray().text('Create a new SvelteKit project using')
							})
					})
				})
		})
		.img({
			src: '',
			alt: ''
		})
		.precode({
			lang: 'js',
			code: 'console.log("Hello")'
		})
		.h2({
			children: new NodeArray().text('The best JavaScript frameworks')
		})
		.ol({
			children: new NodeArray()
				.li({
					children: new NodeArray().text('Svelte')
				})
				.li({
					children: new NodeArray().text('Vue')
				})
				.li({
					children: new NodeArray().text('Solid')
				})
		})
		.note({
			children: new NodeArray()
				.p({
					children: new NodeArray()
						.text('systemd portable services')
						.link('Google', 'https://google.com')
				})
				.precode({ lang: 'js', code: '' })
		})
});

console.log(JSON.stringify(post, null, 2));

export { post };
