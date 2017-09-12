const express = require('express');
const router = express.Router();
const Promise = require('bluebird');
const users = require('../db/users');

router.post('/', (req, res, next) => {
	return users.createUser(req.body.user)
	.then(result => {
		return {'success': true};
	})
});

router.get('/login', (req, res, next) => {
	return users.login(req.query)
	.then(result => {
		return {'success': result}
	})
})

module.exports = router;
