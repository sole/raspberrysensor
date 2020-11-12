const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const WEBSITE_PATH = path.join(__dirname, 'website');

app.use(express.static(WEBSITE_PATH));
	
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
