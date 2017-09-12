const express = require('express');
const router = express.Router();
const Promise = require('bluebird');
const users = require('../db/users');

router.post('/', (req, res, next) => {
	return users.createUser(res)
	.then(result => {
		return res.json(result[0]);
	})
});

module.exports = router;
