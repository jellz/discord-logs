//    Copyright (C) 2020 Daniel Gulic
// 		See LICENSE file

const MESSAGE_REGEX = /(.+)((?:Today|Yesterday) at \d+:\d+(?: PM|AM)?|\d{2}\/\d{2}\/\d+)/;

export interface Message {
	author: string;
	time: string;
	lines?: string[];
	content?: string;
}

export function pad(n: number) {
	return n < 10 ? '0' + n : n;
}

export function parseLogs(data: string) {
	const lines = data.split('\n');
	const items: Message[] = [];

	let message: Message;

	const moveOntoNext = () => {
		message.content = message.lines.join('\n');
		delete message.lines;
		items.push(message);
		message = null;
	};

	for (const line of lines) {
		const res = MESSAGE_REGEX.exec(line);
		if (res) {
			if (message) moveOntoNext();
			const [author, time] = res.slice(1);
			message = { author, time, lines: [] };
		} else message.lines.push(line);
	}

	if (message) moveOntoNext();

	return items;
}

const randomHSL = () => {
	return 'hsla(' + ~~(360 * Math.random()) + ',' + '70%,' + '60%,1)';
};

export function getUniqueNameColour(store: Map<string, string>, name: string) {
	const existing = store.get(name);
	if (existing) return existing;
	const values = Array.from(store.values());
	const getNewColour = () => {
		let newColour = randomHSL();
		if (values.includes(newColour)) getNewColour();
		else {
			return newColour;
		}
	};
	return getNewColour();
}
