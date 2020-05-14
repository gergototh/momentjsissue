const keystone = require('keystone');
const Article = keystone.list('Article');

exports = module.exports = (req, res) => {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.moment = require('moment');
	// locals.moment.locale('hu');

	locals.data = {
		articles: [],
	};

	view.on('init', (next) => {
		Article.model.find().exec((err, results) => {
			locals.data.articles = results;
			next(err);
		});
	});

	// Render the view
	view.render('index');
};
