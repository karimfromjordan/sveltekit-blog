import { codeToHtml } from 'shiki';

class BlockNode {
	children;
	id;
	class;
	style;
	data;
	metadata;

	constructor(params: {
		children: NodeArray;
		id?: string;
		class?: string[];
		style?: Record<string, string>;
		data?: Record<string, string>;
		metadata?: unknown;
	}) {
		this.children = params.children;
		this.id = params.id;
		this.class = params.class;
		this.style = params.style;
		this.data = params.data;
		this.metadata = params.metadata;
	}

	get type() {
		return 'block';
	}
}

class InlineNode {
	text;

	constructor(text: string) {
		this.text = text;
	}

	get type() {
		return 'inline';
	}
}

class Header extends BlockNode {
	aria_label;

	constructor(params: { aria_label?: string }) {
		super(params);
		this.aria_label = params.aria_label;
	}

	get tag() {
		return 'header';
	}
}
class Footer extends BlockNode {
	aria_label;

	constructor(params: { aria_label?: string }) {
		super(params);
		this.aria_label = params.aria_label;
	}

	get tag() {
		return 'footer';
	}
}
class Main extends BlockNode {
	aria_label;

	constructor(params: { aria_label?: string }) {
		super(params);
		this.aria_label = params.aria_label;
	}

	get tag() {
		return 'main';
	}
}
class Article extends BlockNode {
	aria_label;

	constructor(params: { aria_label?: string }) {
		super(params);
		this.aria_label = params.aria_label;
	}

	get tag() {
		return 'article';
	}
}
class Aside extends BlockNode {
	aria_label;

	constructor(params: { aria_label?: string }) {
		super(params);
		this.aria_label = params.aria_label;
	}

	get tag() {
		return 'aside';
	}
}
class Section extends BlockNode {
	aria_label;

	constructor(params: { aria_label?: string }) {
		super(params);
		this.aria_label = params.aria_label;
	}

	get tag() {
		return 'section';
	}
}
class Search extends BlockNode {
	aria_label;

	constructor(params: { aria_label?: string }) {
		super(params);
		this.aria_label = params.aria_label;
	}

	get tag() {
		return 'search';
	}
}
class Details extends BlockNode {
	constructor(params) {
		super(params);
	}

	get tag() {
		return 'div';
	}
}
class Summary extends BlockNode {
	constructor(params) {
		super(params);
	}

	get tag() {
		return 'div';
	}
}
class Div extends BlockNode {
	constructor(params) {
		super(params);
	}

	get tag() {
		return 'div';
	}
}

class Text extends InlineNode {
	constructor(text: string) {
		super(text);
	}
}
class Anchor extends InlineNode {
	href;
	target;
	download;
	class;

	constructor(params: {
		text: string;
		href: string;
		target?: '_blank';
		download?: boolean;
		class?: string[];
	}) {
		super(params.text);

		this.href = params.href;
		this.target = params.target;
		this.download = params.download;
		this.class = params.class;
	}

	get tag() {
		return 'a';
	}
}
class Strong extends InlineNode {
	class;

	constructor(params: { text: string; class?: string[] }) {
		super(params.text);
		this.class = params.class;
	}
	get tag() {
		return 'strong';
	}
}
class Cite extends InlineNode {
	class;

	constructor(params: { text: string; class?: string[] }) {
		super(params.text);
		this.class = params.class;
	}
	get tag() {
		return 'cite';
	}
}
class Code extends InlineNode {
	class;

	constructor(params: { text: string; class?: string[] }) {
		super(params.text);
		this.class = params.class;
	}
	get tag() {
		return 'code';
	}
}
class KBD extends InlineNode {
	class;

	constructor(params: { text: string; class?: string[] }) {
		super(params.text);
		this.class = params.class;
	}
	get tag() {
		return 'kbd';
	}
}

class NodeArray extends Array {
	metadata;

	constructor(params?: { metadata?: unknown }) {
		super();
		this.metadata = params?.metadata;
	}

	header(params) {
		this.push(new Header(params));
		return this;
	}
	footer(params) {
		this.push(new Footer(params));
		return this;
	}
	main(params) {
		this.push(new Main(params));
		return this;
	}
	article(params) {
		this.push(new Article(params));
		return this;
	}
	aside(params) {
		this.push(new Aside(params));
		return this;
	}
	section(params) {
		this.push(new Section(params));
		return this;
	}
	search(params) {
		this.push(new Search(params));
		return this;
	}
	// typography
	h2(params: { children: NodeArray; class?: string; data?: Record<string, string> }) {
		this.push({ tag: 'h2', ...params });
		return this;
	}
	h3(params: { children: NodeArray; class?: string; data?: Record<string, string> }) {
		this.push({ tag: 'h3', ...params });
		return this;
	}
	p(params: { children: NodeArray; class?: string; data?: Record<string, string> }) {
		this.push({ tag: 'p', ...params });
		return this;
	}
	ol(params: { children: NodeArray; class?: string; data?: Record<string, string> }) {
		this.push({ tag: 'ol', ...params });
		return this;
	}
	ul(params: { children: NodeArray; class?: string; data?: Record<string, string> }) {
		this.push({ tag: 'ul', ...params });
		return this;
	}
	li(params: { children: NodeArray; class?: string; data?: Record<string, string> }) {
		this.push({ tag: 'li', ...params });
		return this;
	}
	blockquote(params: {
		children: NodeArray;
		cite?: string;
		class?: string;
		data?: Record<string, string>;
	}) {
		this.push({ tag: 'blockquote', ...params });
		return this;
	}
	details(params) {
		this.push(new Details(params));
		return this;
	}
	summary(params) {
		this.push(new Summary(params));
		return this;
	}
	table(params: { children: Array<NodeArray[]> }) {
		return this;
	}
	div(params) {
		this.push(new Div(params));
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
	note(params) {
		this.push(new Div(params));
		return this;
	}
	tip(params) {
		this.push(new Div(params));
		return this;
	}
	important(params) {
		this.push(new Div(params));
		return this;
	}
	warning(params) {
		this.push(new Div(params));
		return this;
	}
	caution(params) {
		this.push(new Div(params));
		return this;
	}
	// media
	image(params: { src: string; alt: string; class?: string }) {
		this.push({ type: 'block:img', ...params });
		return this;
	}
	youtube(params) {
		return this;
	}
	bluesky(params) {
		return this;
	}
	twitter(params) {
		return this;
	}
	// inline
	text(params) {
		this.push(new Text(params));
		return this;
	}
	a(
		text: string,
		href: `https://${string}`,
		opts?: { target?: '_blank'; download: boolean; class?: string[] }
	) {
		this.push(new Anchor({ text, href, ...opts }));
		return this;
	}
	strong(text: string, opts?: { class?: string[] }) {
		this.push(new Strong({ text, ...opts }));
		return this;
	}
	cite(text: string, opts?: { class?: string[] }) {
		this.push(new Cite({ text, ...opts }));
		return this;
	}
	code(text: string, opts?: { class?: string[] }) {
		this.push(new Code({ text, ...opts }));
		return this;
	}
	kbd(text: string, opts?: { class?: string[] }) {
		this.push(new KBD({ text, ...opts }));
		return this;
	}
}

class Page {
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

	fromJSON() {}

	toHTML() {}
}

const page = new Page({
	h1: 'First page',
	slug: 'first-page',
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
				.a('Svelte', 'https://svelte.dev')
		})
		.h2({
			children: new NodeArray().text('How to use This')
		})
		.p({
			children: new NodeArray().text('To use this repository, you have two options:')
		})
		.ol({
			children: new NodeArray()
				.li({
					children: new NodeArray().a('Use it as a template', 'https://')
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
		.image({
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
						.a('Google', 'https://google.com')
				})
				.precode({ lang: 'js', code: '' })
		})
});

console.log(JSON.stringify(page, null, 2));

export { page };
