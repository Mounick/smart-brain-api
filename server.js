const express = require('express');

const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db =knex({
	client: 'pg',
	connection: {
		host : '127.0.0.1',
		user : 'postgres',
		password : 'anjurounick',
		database : 'smart-brain'

	}

});





const app = express();




app.use(bodyParser.json());
app.use(cors())
app.get('/', (req, res) =>{res.send(database.users);})

app.post('/signin', (res, req) => {signin.handleSignin(res, req, db, bcrypt)})

app.post('/register', (res, req) => {register.handleRegister(res, req, db, bcrypt)})
	

app.get('/profile/:id',(res, req) => {profile.handleProfileGet(res, req, db)} )

app.put('/image',(res, req) => {profile.handleImage(res, req, db)} )






app.listen(3000, () => {
	console.log('app is running on port 3000');
}) 