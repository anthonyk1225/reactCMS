const express = require('express');
const router = express.Router();
const users = require('../db/users');

router.get('/', (req, res, next) => {
	if (req.session.user){
		return users.getUser(req.session)
		.then(result => {
			return res.json(result);
		})
	} else {
		return res.json({'success': false});
	}
})

router.post('/', (req, res, next) => {
	return users.createUser(req.body.user)
	.then(result => {
		return res.json(result);
	})
});

router.get('/login', (req, res, next) => {
	return users.login(req.query)
	.then(result => {
		if (result.success){
			req.session.user = result.user.token;
		}
		return res.json({'success': result.success});
	})
});

router.get('/logout', (req, res, next) => {
	req.session.destroy();
	return res.json({'success': true});
});

module.exports = router;
