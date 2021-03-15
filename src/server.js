import sirv from 'sirv';
import express from "express";
import session from "express-session"
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV, SESSION_SECRET } = process.env;
const dev = NODE_ENV === 'development';
const app = express();
app.use(
		express.json(),
		express.urlencoded({extended:true}),
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		session({
			secret : SESSION_SECRET || "ngobar",
			resave : true,
			saveUninitialized : true,
			cookie : {
				maxAge : 31536000
			}
		}),

		sapper.middleware({
			session : (req, res)=>({
				// HTTP_TUOTA_API,
				// API_KEY_TOUTA,
				// auth : true
				// TOKEN,
				username : req.session.username,
				auth : req.session.auth,
				uid : req.session.uid
			})

		})
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
