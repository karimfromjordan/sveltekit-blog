import { codeToHtml } from 'shiki';

class BlockNode {
	children;
	metadata;
	// HTML attributes
	attributes?: Record<string, unknown> = {
		id: undefined,
		class: undefined,
		style: undefined,
		data: undefined
	};

	constructor(params: {
		children: NodeArray;
		metadata?: unknown;
		attributes?: Record<string, unknown>;
	}) {
		this.children = params.children;
		this.metadata = params.metadata;
		this.attributes = params.attributes;
	}
	get kind() {
		return 'block';
	}
	toObject() {
		return {
			kind: this.kind,
			children: this.children,
			attributes: this.attributes
		};
	}
}

class InlineNode {
	text;

	attributes?: Record<string, unknown>;

	constructor(params: { text: string; attributes?: Record<string, unknown> }) {
		this.text = params.text;
		this.attributes = params.attributes;
	}
	get kind() {
		return 'inline';
	}
	toObject() {
		return {
			kind: this.kind,
			text: this.text,
			attributes: this.attributes
		};
	}
}

class Header extends BlockNode {
	constructor(params: { children: NodeArray; class?: string[]; aria_label?: string }) {
		super({
			children: params.children,
			attributes: {
				class: params.class,
				aria_label: params.aria_label
			}
		});
	}
	get tag() {
		return 'header';
	}
	toJSON() {
		return { ...super.toObject(), tag: this.tag };
	}
}
class Footer extends BlockNode {
	constructor(params: { children: NodeArray; class?: string[]; aria_label?: string }) {
		super({
			children: params.children,
			attributes: {
				class: params.class,
				aria_label: params.aria_label
			}
		});
	}
	get tag() {
		return 'footer';
	}
	toJSON() {
		return { ...super.toObject(), tag: this.tag };
	}
}
class Main extends BlockNode {
	constructor(params: { children: NodeArray; class?: string[]; aria_label?: string }) {
		super({
			children: params.children,
			attributes: {
				class: params.class,
				aria_label: params.aria_label
			}
		});
	}
	get tag() {
		return 'main';
	}
	toJSON() {
		return { ...super.toObject(), tag: this.tag };
	}
}
class Article extends BlockNode {
	constructor(params: { children: NodeArray; class?: string[]; aria_label?: string }) {
		super({
			children: params.children,
			attributes: {
				class: params.class,
				aria_label: params.aria_label
			}
		});
	}
	get tag() {
		return 'article';
	}
	toJSON() {
		return { ...super.toObject(), tag: this.tag };
	}
}
class Aside extends BlockNode {
	constructor(params: { children: NodeArray; class?: string[]; aria_label?: string }) {
		super({
			children: params.children,
			attributes: {
				class: params.class,
				aria_label: params.aria_label
			}
		});
	}
	get tag() {
		return 'aside';
	}
	toJSON() {
		return { ...super.toObject(), tag: this.tag };
	}
}
class Section extends BlockNode {
	constructor(params: { children: NodeArray; class?: string[]; aria_label?: string }) {
		super({
			children: params.children,
			attributes: {
				class: params.class,
				aria_label: params.aria_label
			}
		});
	}
	get tag() {
		return 'section';
	}
	toJSON() {
		return { ...super.toObject(), tag: this.tag };
	}
}
class Search extends BlockNode {
	constructor(params: { children: NodeArray; class?: string[]; aria_label?: string }) {
		super({
			children: params.children,
			attributes: {
				class: params.class,
				aria_label: params.aria_label
			}
		});
	}
	get tag() {
		return 'search';
	}
	toJSON() {
		return { ...super.toObject(), tag: this.tag };
	}
}
class Details extends BlockNode {
	constructor(params: { children: NodeArray; class?: string[] }) {
		super({
			children: params.children,
			attributes: {
				class: params.class
			}
		});
	}
	get tag() {
		return 'details';
	}
	toJSON() {
		return { ...super.toObject(), tag: this.tag };
	}
}
class Summary extends BlockNode {
	constructor(params: { children: NodeArray; class?: string[] }) {
		super({
			children: params.children,
			attributes: {
				class: params.class
			}
		});
	}
	get tag() {
		return 'summary';
	}
	toJSON() {
		return { ...super.toObject(), tag: this.tag };
	}
}
class Div extends BlockNode {
	constructor(params: { children: NodeArray; class?: string[] }) {
		super({
			children: params.children,
			attributes: {
				class: params.class
			}
		});
	}
	get tag() {
		return 'div';
	}
	toJSON() {
		return { ...super.toObject(), tag: this.tag };
	}
}
class H1 extends BlockNode {
	constructor(params: { children: NodeArray; class?: string[] }) {
		const id = params.children
			?.map((node) => node.text)
			.join('')
			.toLowerCase()
			.replaceAll(' ', '-');

		super({
			children: params.children,
			attributes: {
				id,
				class: params.class
			}
		});
	}
	get tag() {
		return 'h1';
	}
	toJSON() {
		return { ...super.toObject(), tag: this.tag };
	}
}
class H2 extends BlockNode {
	constructor(params: { children: NodeArray; class?: string[] }) {
		const id = params.children
			?.map((node) => node.text)
			.join('')
			.toLowerCase()
			.replaceAll(' ', '-');

		super({
			children: params.children,
			attributes: {
				id,
				class: params.class
			}
		});
	}
	get tag() {
		return 'h1';
	}
	toJSON() {
		return { ...super.toObject(), tag: this.tag };
	}
}
class H3 extends BlockNode {
	constructor(params: { children: NodeArray; class?: string[] }) {
		const id = params.children
			?.map((node) => node.text)
			.join('')
			.toLowerCase()
			.replaceAll(' ', '-');

		super({
			children: params.children,
			attributes: {
				id,
				class: params.class
			}
		});
	}
	get tag() {
		return 'h1';
	}
	toJSON() {
		return { ...super.toObject(), tag: this.tag };
	}
}
class Paragraph extends BlockNode {
	constructor(params: { children: NodeArray; class?: string[] }) {
		super({
			children: params.children,
			attributes: {
				class: params.class
			}
		});
	}
	get tag() {
		return 'p';
	}
	toJSON() {
		return { ...super.toObject(), tag: this.tag };
	}
}
class OrderedList extends BlockNode {
	constructor(params: { children: NodeArray; class?: string[] }) {
		super({
			children: params.children,
			attributes: {
				class: params.class
			}
		});
	}
	get tag() {
		return 'ol';
	}
	toJSON() {
		return { ...super.toObject(), tag: this.tag };
	}
}
class UnorderedList extends BlockNode {
	constructor(params: { children: NodeArray; class?: string[] }) {
		super({
			children: params.children,
			attributes: {
				class: params.class
			}
		});
	}
	get tag() {
		return 'ul';
	}
	toJSON() {
		return { ...super.toObject(), tag: this.tag };
	}
}
class ListItem extends BlockNode {
	constructor(params: { children: NodeArray; class?: string[] }) {
		super({
			children: params.children,
			attributes: {
				class: params.class
			}
		});
	}
	get tag() {
		return 'li';
	}
	toJSON() {
		return { ...super.toObject(), tag: this.tag };
	}
}

class Text extends InlineNode {
	constructor(text: string) {
		super({ text });
	}
	toJSON() {
		return super.toObject();
	}
}
class Anchor extends InlineNode {
	constructor(params: {
		text: string;
		href: string;
		target?: '_blank';
		download?: boolean;
		class?: string[];
	}) {
		super({
			text: params.text,
			attributes: {
				class: params.class,
				href: params.href,
				target: params.target,
				download: params.download
			}
		});
	}
	get tag() {
		return 'a';
	}
	toJSON() {
		return { ...super.toObject(), tag: this.tag };
	}
}
class Strong extends InlineNode {
	constructor(params: { text: string; class?: string[] }) {
		super({
			text: params.text,
			attributes: {
				class: params.class
			}
		});
	}
	get tag() {
		return 'strong';
	}
	toJSON() {
		return { ...super.toObject(), tag: this.tag };
	}
}
class Cite extends InlineNode {
	constructor(params: { text: string; class?: string[] }) {
		super({
			text: params.text,
			attributes: {
				class: params.class
			}
		});
	}
	get tag() {
		return 'cite';
	}
	toJSON() {
		return { ...super.toObject(), tag: this.tag };
	}
}
class Code extends InlineNode {
	constructor(params: { text: string; class?: string[] }) {
		super({
			text: params.text,
			attributes: {
				class: params.class
			}
		});
	}
	get tag() {
		return 'code';
	}
	toJSON() {
		return { ...super.toObject(), tag: this.tag };
	}
}
class KBD extends InlineNode {
	constructor(params: { text: string; class?: string[] }) {
		super({
			text: params.text,
			attributes: {
				class: params.class
			}
		});
	}
	get tag() {
		return 'kbd';
	}
	toJSON() {
		return { ...super.toObject(), tag: this.tag };
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
	h1(params) {
		this.push(new H1(params));
		return this;
	}
	h2(params) {
		this.push(new H2(params));
		return this;
	}
	h3(params) {
		this.push(new H3(params));
		return this;
	}
	p(params) {
		this.push(new Paragraph(params));
		return this;
	}
	ol(params) {
		this.push(new OrderedList(params));
		return this;
	}
	ul(params) {
		this.push(new UnorderedList(params));
		return this;
	}
	li(params) {
		this.push(new ListItem(params));
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
		this.push({ kind: 'block:code', ...params });
		return this;
	}
	note(params) {
		this.push(new Div({ ...params, class: [...(params.class ?? []), 'note'] }));
		return this;
	}
	tip(params) {
		this.push(new Div({ ...params, class: [...(params.class ?? []), 'tip'] }));
		return this;
	}
	important(params) {
		this.push(new Div({ ...params, class: [...(params.class ?? []), 'important'] }));
		return this;
	}
	warning(params) {
		this.push(new Div({ ...params, class: [...(params.class ?? []), 'warning'] }));
		return this;
	}
	caution(params) {
		this.push(new Div({ ...params, class: [...(params.class ?? []), 'caution'] }));
		return this;
	}
	// media
	image(params: { src: string; alt: string; class?: string }) {
		this.push({ kind: 'block:img', ...params });
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
	node;
	variables;
	metadata;

	constructor(params: {
		node: BlockNode;
		variables?: Record<string, unknown>;
		metadata?: Record<string, unknown>;
	}) {
		this.node = params.node;
		this.variables = params.variables;
		this.metadata = params.metadata;
	}

	fromJSON() {}

	toHTML() {}
}

const page = new Page({
	node: new Article({
		children: new NodeArray()
			.p({
				class: ['text-white'],
				children: new NodeArray()
					.text(
						`This repository contains a GitHub workflow with a build job that builds
						your SvelteKit app into a very minimal systemd portable service and a
						deploy job that can upload and start the container on your server.
						The image built by the build job only contains your SvelteKit app,
						a Node.js executable and glibc++. The total size of the final image
						is approximately 37 MB. `
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
				children: new NodeArray().p({
					children: new NodeArray()
						.text('systemd portable services')
						.a('Google', 'https://google.com')
				})
			})
	})
});

export { page };
