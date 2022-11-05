const express = require('express');
const app = express();
const methodOverride = require('method-override');
const { render } = require('ejs');
const session = require('express-session');
require('dotenv').config();
const PORT = process.env.PORT;
const SESSION_SECRET = process.env.SESSION_SECRET;
app.use(
	session({
		secret: SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
	})
);

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const mfwController = require('./controllers/mfwController.js');

app.use('/', mfwController);

app.get('/', (req, res) => {
	res.send('<h1>Welcome to Freshipe!</h1>');
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
