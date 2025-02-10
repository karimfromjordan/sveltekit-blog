class Nodes {
	list: unknown[] = [];

	// Block nodes
	p(params: { nodes: Nodes; class?: string }) {
		this.list.push({ type: 'block:p', ...params });
		return this;
	}
	h2(params: { nodes: Nodes; class?: string }) {
		this.list.push({ type: 'block:h2', ...params });
		return this;
	}
	h3(params: { nodes: Nodes; class?: string }) {
		this.list.push({ type: 'block:h3', ...params });
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
		this.list.push({ type: 'block:code', ...params });
		return this;
	}
	img(params: { src: string; alt: string; class?: string }) {
		this.list.push({ type: 'block:img', ...params });
		return this;
	}
	ol(params: { nodes: Nodes; class?: string }) {
		this.list.push({ type: 'block:ol', ...params });
		return this;
	}
	ul(params: { nodes: Nodes; class?: string }) {
		this.list.push({ type: 'block:ul', ...params });
		return this;
	}
	li(params: { nodes: Nodes | Nodes; class?: string }) {
		this.list.push({ type: 'block:li', ...params });
		return this;
	}
	blockquote(params: { nodes: Nodes; cite?: string }) {
		return this;
	}
	table(params: { header: (Nodes | Nodes)[]; data: Array<Nodes[]> }) {
		return this;
	}
	note(params: { nodes: Nodes }) {
		this.list.push({ type: 'block:note', ...params });
		return this;
	}
	tip(params: { nodes: Nodes }) {
		this.list.push({ type: 'block:tip', ...params });
		return this;
	}
	important(params: { nodes: Nodes }) {
		this.list.push({ type: 'block:important', ...params });
		return this;
	}
	warning(params: { nodes: Nodes }) {
		this.list.push({ type: 'block:warning', ...params });
		return this;
	}
	caution(params: { nodes: Nodes }) {
		this.list.push({ type: 'block:caution', ...params });
		return this;
	}
	details(params: { nodes: Nodes }) {
		this.list.push({ type: 'block:details', ...params });
		return this;
	}
	summary(params: { nodes: Nodes }) {
		this.list.push({ type: 'block:summary', ...params });
		return this;
	}
	// Inline nodes
	text(text: string) {
		this.list.push(text);
		return this;
	}
	link(text: string, href: `https://${string}`, opts?: { class?: string }) {
		this.list.push({ type: 'inline:link', text, href, ...opts });
		return this;
	}
	strong(text: string, opts?: { class?: string }) {
		this.list.push({ type: 'inline:strong', text, ...opts });
		return this;
	}
	cite(text: string, opts?: { class?: string }) {
		this.list.push({ type: 'inline:cite', text, ...opts });
		return this;
	}
	code(text: string, opts?: { class?: string }) {
		this.list.push({ type: 'inline:code', text, ...opts });
		return this;
	}
	kbd(text: string, opts?: { class?: string }) {
		this.list.push({ type: 'inline:kbd', text, ...opts });
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

	nodes = new Nodes();

	constructor(params: {
		h1: string;
		slug: string;
		description?: string;
		hero_img?: string;
		published_at?: string;
		updated_at?: string;
		nodes?: Nodes;
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

	toJSON() {}
}

const post = new Post({
	h1: 'First post',
	slug: 'first-post',
	nodes: new Nodes()
		.p({
			class: 'text-white',
			nodes: new Nodes()
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
			nodes: new Nodes().text('How to use This')
		})
		.p({
			nodes: new Nodes().text('To use this repository, you have two options:')
		})
		.ol({
			nodes: new Nodes()
				.li({
					nodes: new Nodes().link('Use it as a template', 'https://')
				})
				.li({
					nodes: new Nodes().text('Start from scratch:').ul({
						nodes: new Nodes()
							.li({
								nodes: new Nodes().text('Create a new SvelteKit project using')
							})
							.li({
								nodes: new Nodes().text('Create a new SvelteKit project using')
							})
					})
				})
		})
		.img({
			src: '',
			alt: ''
		})
		.code({
			lang: 'js',
			code: 'console.log("Hello")'
		})
		.h2({
			nodes: new Nodes().text('The best JavaScript frameworks')
		})
		.ol({
			nodes: new Nodes()
				.li({
					nodes: new Nodes().text('Svelte')
				})
				.li({
					nodes: new Nodes().text('Vue')
				})
				.li({
					nodes: new Nodes().text('Solid')
				})
		})
		.note({
			nodes: new Nodes()
				.p({
					nodes: new Nodes().text('systemd portable services').link('Google', 'https://google.com')
				})
				.code({ lang: 'js', code: '' })
		})
});
