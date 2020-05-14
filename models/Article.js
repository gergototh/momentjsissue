/* eslint-disable linebreak-style */

const keystone = require('keystone');
const Types = keystone.Field.Types;

const Article = new keystone.List('Article', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
	label: 'Articles',
	singular: 'Article',
	plural: 'Articles',
});

Article.add({
	title: { type: String, required: true, initial: true },
	description: {
		description: {
			brief: { type: Types.Html, wysiwyg: true },
			extended: { type: Types.Html, wysiwyg: true },
		},
	},
	publishedAt: { type: Date, default: Date.now },
});

Article.defaultColumns = 'title|80%, publishedAt|20%';
Article.defaultSort = '-publishedAt';
Article.register();
