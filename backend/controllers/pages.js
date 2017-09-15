const express = require('express');
const router = express.Router();
const pages = require('../db/pages');

router.get('/', (req, res, next) => {
	return pages.getPages(req.query.pageId)
	.then(result => {
		return res.json(result);
	})
})

router.post('/', (req, res, next) => {
	return pages.createPage(req.body)
	.then(result => {
		return res.json(result);
	})
});

module.exports = router;
