//    Copyright (C) 2020 Daniel Gulic
// 		See LICENSE file

import express from 'express';
import { randomBytes } from 'crypto';
import { parseLogs } from '../util';
import { Log } from '../server';

const router = express.Router();

router.post('/format', async (req, res) => {
	const { content } = req.body;
	if (!content || content.trim().length < 1)
		return res
			.status(400)
			.json({ error: 'You need to provide chat logs (content)' });
	try {
		const parsedLogs = parseLogs(content.trim());
		const id = randomBytes(4).toString('hex');
		let log = await Log.create({
			id,
			parsed: JSON.stringify(parsedLogs),
		});
		log.parsed = JSON.parse(log.parsed);
		res.status(201).json({ id: log.id, log });
	} catch (err) {
		res.status(400).json({ error: 'Invalid logs' });
	}
});

router.get('/logs/:id', async (req, res) => {
	const { id } = req.params;
	if (!id)
		return res.status(400).json({ error: 'You need to provide a log ID (id)' });
	const log = await Log.findByPk(id);
	if (!log) return res.status(404).json({ error: 'Unknown log' });
	log.parsed = JSON.parse(log.parsed);
	res.json({ id, log });
});

export default router;
