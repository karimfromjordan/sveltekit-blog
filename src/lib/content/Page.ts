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

interface HeaderParams {
	children: NodeArray;
	class?: string[];
	aria_label?: string;
}
class Header extends BlockNode {
	constructor(params: HeaderParams) {
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

interface FooterParams {
	children: NodeArray;
	class?: string[];
	aria_label?: string;
}
class Footer extends BlockNode {
	constructor(params: FooterParams) {
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

interface MainParams {
	children: NodeArray;
	class?: string[];
	aria_label?: string;
}
class Main extends BlockNode {
	constructor(params: MainParams) {
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

interface ArticleParams {
	children: NodeArray;
	class?: string[];
	aria_label?: string;
}
class Article extends BlockNode {
	constructor(params: ArticleParams) {
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

interface AsideParams {
	children: NodeArray;
	class?: string[];
	aria_label?: string;
}
class Aside extends BlockNode {
	constructor(params: AsideParams) {
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

interface SectionParams {
	children: NodeArray;
	class?: string[];
	aria_label?: string;
}
class Section extends BlockNode {
	constructor(params: SectionParams) {
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

interface SearchParams {
	children: NodeArray;
	class?: string[];
	aria_label?: string;
}
class Search extends BlockNode {
	constructor(params: SearchParams) {
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

interface DetailsParams {
	children: NodeArray;
	class?: string[];
}
class Details extends BlockNode {
	constructor(params: DetailsParams) {
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

interface SummaryParams {
	children: NodeArray;
	class?: string[];
}
class Summary extends BlockNode {
	constructor(params: SummaryParams) {
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

interface DivParams {
	children: NodeArray;
	class?: string[];
}
class Div extends BlockNode {
	constructor(params: DivParams) {
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

interface H1Params {
	children: NodeArray;
	class?: string[];
}
class H1 extends BlockNode {
	constructor(params: H1Params) {
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

interface H2Params {
	children: NodeArray;
	class?: string[];
}
class H2 extends BlockNode {
	constructor(params: H2Params) {
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

interface H3Params {
	children: NodeArray;
	class?: string[];
}
class H3 extends BlockNode {
	constructor(params: H3Params) {
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

interface ParagraphParams {
	children: NodeArray;
	class?: string[];
}
class Paragraph extends BlockNode {
	constructor(params: ParagraphParams) {
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

interface OrderedListParams {
	children: NodeArray;
	reversed?: boolean;
	start?: number;
	type?: 'a' | 'A' | 'i' | 'I' | '1';
	class?: string[];
}
class OrderedList extends BlockNode {
	constructor(params: OrderedListParams) {
		super({
			children: params.children,
			attributes: {
				class: params.class,
				reversed: params.reversed,
				start: params.start,
				type: params.type
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

interface UnorderedListParams {
	children: NodeArray;
	class?: string[];
}
class UnorderedList extends BlockNode {
	constructor(params: UnorderedListParams) {
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

interface ListItemParams {
	children: NodeArray;
	class?: string[];
	value?: number;
}
class ListItem extends BlockNode {
	constructor(params: ListItemParams) {
		super({
			children: params.children,
			attributes: {
				class: params.class,
				value: params.value
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

interface BlockquoteParams {
	children: NodeArray;
	cite?: string;
	class?: string[];
}
class Blockquote extends BlockNode {
	constructor(params: BlockquoteParams) {
		super({
			children: params.children,
			attributes: {
				cite: params.cite,
				class: params.class
			}
		});
	}
	get tag() {
		return 'blockquote';
	}
	toJSON() {
		return { ...super.toObject(), tag: this.tag };
	}
}

interface CaptionParams {
	children: NodeArray;
	class?: string[];
}
class Caption extends BlockNode {
	constructor(params: CaptionParams) {
		super({
			children: params.children,
			attributes: {
				class: params.class
			}
		});
	}
	get tag() {
		return 'caption';
	}
	toJSON() {
		return { ...super.toObject(), tag: this.tag };
	}
}

interface TableParams {
	children: NodeArray;
	class?: string[];
}
class Table extends BlockNode {
	constructor(params: TableParams) {
		super({
			children: params.children,
			attributes: {
				class: params.class
			}
		});
	}
	get tag() {
		return 'table';
	}
	toJSON() {
		return { ...super.toObject(), tag: this.tag };
	}
}

interface TableHeadParams {
	children: NodeArray;
	class?: string[];
}
class TableHead extends BlockNode {
	constructor(params: TableHeadParams) {
		super({
			children: params.children,
			attributes: {
				class: params.class
			}
		});
	}
	get tag() {
		return 'thead';
	}
	toJSON() {
		return { ...super.toObject(), tag: this.tag };
	}
}

interface TableFootParams {
	children: NodeArray;
	class?: string[];
}
class TableFoot extends BlockNode {
	constructor(params: TableFootParams) {
		super({
			children: params.children,
			attributes: {
				class: params.class
			}
		});
	}
	get tag() {
		return 'tfoot';
	}
	toJSON() {
		return { ...super.toObject(), tag: this.tag };
	}
}

interface TableBodyParams {
	children: NodeArray;
	class?: string[];
}
class TableBody extends BlockNode {
	constructor(params: TableBodyParams) {
		super({
			children: params.children,
			attributes: {
				class: params.class
			}
		});
	}
	get tag() {
		return 'tbody';
	}
	toJSON() {
		return { ...super.toObject(), tag: this.tag };
	}
}

interface TableRowParams {
	children: NodeArray;
	class?: string[];
}
class TableRow extends BlockNode {
	constructor(params: TableRowParams) {
		super({
			children: params.children,
			attributes: {
				class: params.class
			}
		});
	}
	get tag() {
		return 'tr';
	}
	toJSON() {
		return { ...super.toObject(), tag: this.tag };
	}
}

interface TableHeaderParams {
	children: NodeArray;
	class?: string[];
	colspan?: number;
	rowspan?: number;
	scope?: 'row' | 'col' | 'rowgroup' | 'colgroup';
}
class TableHeader extends BlockNode {
	constructor(params: TableHeaderParams) {
		super({
			children: params.children,
			attributes: {
				colspan: params.colspan,
				rowspan: params.rowspan,
				scope: params.scope,
				class: params.class
			}
		});
	}
	get tag() {
		return 'th';
	}
	toJSON() {
		return { ...super.toObject(), tag: this.tag };
	}
}

interface TableDataCellParams {
	children: NodeArray;
	class?: string[];
	colspan?: number;
	rowspan?: number;
}
class TableDataCell extends BlockNode {
	constructor(params: TableDataCellParams) {
		super({
			children: params.children,
			attributes: {
				colspan: params.colspan,
				rowspan: params.rowspan,
				class: params.class
			}
		});
	}
	get tag() {
		return 'td';
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

interface AnchorParams {
	text: string;
	href: string;
	target?: '_blank';
	download?: boolean;
	class?: string[];
}
class Anchor extends InlineNode {
	constructor(params: AnchorParams) {
		super({
			text: params.text,
			attributes: {
				href: params.href,
				target: params.target,
				download: params.download,
				class: params.class
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

interface StrongParams {
	text: string;
	class?: string[];
}
class Strong extends InlineNode {
	constructor(params: StrongParams) {
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

interface SpanSParams {
	text: string;
	class?: string[];
}
class Span extends InlineNode {
	constructor(params: SpanSParams) {
		super({
			text: params.text,
			attributes: {
				class: params.class
			}
		});
	}
	get tag() {
		return 'span';
	}
	toJSON() {
		return { ...super.toObject(), tag: this.tag };
	}
}

interface CiteParams {
	text: string;
	class?: string[];
}
class Cite extends InlineNode {
	constructor(params: CiteParams) {
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

interface CodeParams {
	text: string;
	class?: string[];
}
class Code extends InlineNode {
	constructor(params: CodeParams) {
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

interface KBDParams {
	text: string;
	class?: string[];
}
class KBD extends InlineNode {
	constructor(params: KBDParams) {
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

	header(params: HeaderParams) {
		this.push(new Header(params));
		return this;
	}
	footer(params: FooterParams) {
		this.push(new Footer(params));
		return this;
	}
	main(params: MainParams) {
		this.push(new Main(params));
		return this;
	}
	article(params: ArticleParams) {
		this.push(new Article(params));
		return this;
	}
	aside(params: AsideParams) {
		this.push(new Aside(params));
		return this;
	}
	section(params: SectionParams) {
		this.push(new Section(params));
		return this;
	}
	search(params: SearchParams) {
		this.push(new Search(params));
		return this;
	}
	// typography
	h1(params: H1Params) {
		this.push(new H1(params));
		return this;
	}
	h2(params: H2Params) {
		this.push(new H2(params));
		return this;
	}
	h3(params: H3Params) {
		this.push(new H3(params));
		return this;
	}
	p(params: ParagraphParams) {
		this.push(new Paragraph(params));
		return this;
	}
	ol(params: OrderedListParams) {
		this.push(new OrderedList(params));
		return this;
	}
	ul(params: UnorderedListParams) {
		this.push(new UnorderedList(params));
		return this;
	}
	li(params: ListItemParams) {
		this.push(new ListItem(params));
		return this;
	}
	blockquote(params: BlockquoteParams) {
		this.push(new Blockquote(params));
		return this;
	}
	details(params: DetailsParams) {
		this.push(new Details(params));
		return this;
	}
	summary(params: SummaryParams) {
		this.push(new Summary(params));
		return this;
	}
	table(params: TableParams) {
		this.push(new Table(params));
		return this;
	}
	thead(params: TableHeadParams) {
		this.push(new TableHead(params));
		return this;
	}
	tfoot(params: TableFootParams) {
		this.push(new TableFoot(params));
		return this;
	}
	tbody(params: TableBodyParams) {
		this.push(new TableBody(params));
		return this;
	}
	tr(params: TableRowParams) {
		this.push(new TableRow(params));
		return this;
	}
	th(params: TableHeaderParams) {
		this.push(new TableHeader(params));
		return this;
	}
	td(params: TableDataCellParams) {
		this.push(new TableDataCell(params));
		return this;
	}
	div(params: DivParams) {
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
	span(text: string, opts?: { class?: string[] }) {
		this.push(new Span({ text, ...opts }));
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
		node?: BlockNode;
		variables?: Record<string, unknown>;
		metadata?: Record<string, unknown>;
	}) {
		this.node = params.node;
		this.variables = params.variables;
		this.metadata = params.metadata;
	}

	fromJSON() {}
}

const page = new Page({
	node: new Article({
		children: new NodeArray()
			.p({
				class: ['text-white', 'bg-black'],
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
			.table({
				children: new NodeArray()
					.thead({
						children: new NodeArray().tr({
							children: new NodeArray()
								.th({ children: new NodeArray().text('Student ID') })
								.th({ children: new NodeArray().text('Name') })
								.th({ children: new NodeArray().text('Major') })
								.th({ children: new NodeArray().text('Credits') })
						})
					})
					.tbody({
						children: new NodeArray()
							.tr({
								children: new NodeArray()
									.td({ children: new NodeArray().text('3741255') })
									.td({ children: new NodeArray().text('3741255') })
									.td({ children: new NodeArray().text('3741255') })
									.td({ children: new NodeArray().text('3741255') })
							})
							.tr({
								children: new NodeArray()
									.td({ children: new NodeArray().text('3741255') })
									.td({ children: new NodeArray().text('3741255') })
									.td({ children: new NodeArray().text('3741255') })
									.td({ children: new NodeArray().text('3741255') })
							})
							.tr({
								children: new NodeArray()
									.td({ children: new NodeArray().text('3741255') })
									.td({ children: new NodeArray().text('3741255') })
									.td({ children: new NodeArray().text('3741255') })
									.td({ children: new NodeArray().text('3741255') })
							})
							.tr({
								children: new NodeArray()
									.td({ children: new NodeArray().text('3741255') })
									.td({ children: new NodeArray().text('3741255') })
									.td({ children: new NodeArray().text('3741255') })
									.td({ children: new NodeArray().text('3741255') })
							})
					})
			})
			.note({
				children: new NodeArray().p({
					children: new NodeArray()
						.text('systemd portable services ')
						.a('Google', 'https://google.com')
				})
			})
	})
});

export { page };
