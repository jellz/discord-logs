//    Copyright (C) 2020 Daniel Gulic
// 		See LICENSE file

import express from 'express';
import nextapp from './nextapp';
import { parseLogs } from './util';
import { Sequelize, STRING, Model } from 'sequelize';
import { randomBytes } from 'crypto';

// Connect to DB
export const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: 'src/server/database.sqlite',
});

class Log extends Model {}
Log.init(
	{
		parsed: {
			type: STRING,
			allowNull: false,
		},
		id: {
			type: STRING,
			primaryKey: true,
		},
	},
	{ sequelize }
);
Log.sync();
export { Log };

// Setup web server
const port = parseInt(process.env.PORT, 10) || 3000;
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', require('./routes/api').default);
app.use('/', require('./routes/app').default);

// Prepare with nextapp
(async () => {
	try {
		await nextapp.prepare();
		app.listen(port);
		console.log(`server listening on port ${port}`);
	} catch (err) {
		console.error(err.message);
	}
})();
