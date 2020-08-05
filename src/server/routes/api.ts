//    Copyright (C) 2020 Daniel Gulic
// 		See LICENSE file

import express from 'express';
import { randomBytes } from 'crypto';
import { parseLogs, Message, pad } from '../util';
import { Log } from '../server';
import * as yup from 'yup';

const router = express.Router();

const autoMessageSchema = yup
	.array()
	.of(
		yup.object().shape({
			author: yup.string().required(),
			date: yup.number().required(),
			content: yup.string().required(),
		})
	)
	.required();

router.post('/format', async (req, res) => {
	// Check if request is using special API or if it is just from the normal client
	const auto =
		req.query.auto === undefined ||
		req.query.auto.toString().toLowerCase() === 'false'
			? false
			: true;
	if (!auto) {
		const { content }: { content: string } = req.body;
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
	} else {
		const { messages } = req.body;
		if (!messages)
			return res
				.status(400)
				.json({ error: 'You need to provide a list of messages (messages)' });
		if (!autoMessageSchema.isValidSync(messages))
			return res.status(400).json({ error: 'Invalid element' });
		const msgs: Message[] = [];
		messages.forEach(m => {
			const date = new Date(+m.date);
			const today = new Date();
			const isToday =
				date.getFullYear() === today.getFullYear() &&
				date.getMonth() === today.getMonth() &&
				date.getDate() === today.getDate();
			const yesterday = (d => new Date(d.setDate(d.getDate() - 1)))(new Date());
			const isYesterday =
				date.getFullYear() === yesterday.getFullYear() &&
				date.getMonth() === yesterday.getMonth() &&
				date.getDate() === yesterday.getDate();
			const time = isYesterday
				? `Yesterday at ${pad(date.getHours())}:${pad(date.getMinutes())}`
				: isToday
				? `Today at ${pad(date.getHours())}:${pad(date.getMinutes())}`
				: `${pad(date.getDate())}/${pad(
						date.getMonth()
				  )}/${date.getFullYear()}`;
			msgs.push({
				author: m.author,
				content: m.content,
				time,
			});
		});
		const id = randomBytes(4).toString('hex');
		let log = await Log.create({
			id,
			parsed: JSON.stringify(msgs),
		});
		log.parsed = JSON.parse(log.parsed);
		res.status(201).json({ id: log.id, log });
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
