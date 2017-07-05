const express = require('express');
const router  = express.Router();

router
.get('/', (req, res) => {
	port = process.env.PORT
	res.render('index', {
			port: port
	});
})

module.exports = router;