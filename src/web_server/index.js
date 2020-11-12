const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const PUBLIC_PATH = path.join(__dirname, 'public');

function init() {
	app.use(express.static(PUBLIC_PATH));

	app.get('/', (req, res) => {
		res.send('Hello World!');
	});

	app.listen(port, () => {
		console.log(`Server listening at http://localhost:${port}`);
	});
}

module.exports = {
	init
};
