//    Copyright (C) 2020 Daniel Gulic
// 		See LICENSE file

import { useState } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { BounceLoader, BarLoader } from 'react-spinners';
import { getUniqueNameColour } from '../../server/util';
import Header from '../../components/header';

const fetcher = async (id: string) => {
	// check session storage saved log -> if saved.id === id, return that
	// this means when a user creates a log, then they go to view it, they won't have to wait for it to load
	const createdLog = window.sessionStorage.getItem('createdLog');
	if (createdLog) {
		const json = JSON.parse(createdLog);
		if (json.log.id === id) return json;
	}
	const res = await fetch(`/api/logs/${id}`);
	return res.json();
};

interface Message {
	author: string;
	time: string;
	content: string;
}

export default function ViewLog() {
	const router = useRouter();
	const { id } = router.query;

	let colourStore: Map<string, string> = new Map();

	// const [error, setError] = useState(null);
	const { data } = useSWR(id, fetcher);

	let once = false;
	while (data && data.log && !once) {
		once = true;
		data.log.parsed.forEach((m: Message) => {
			if (!colourStore.has(m.author))
				colourStore.set(m.author, getUniqueNameColour(colourStore, m.author));
		});
		console.log(colourStore);
	}

	return (
		<div>
			<div className='container mx-auto px-16 py-8'>
				<Header />
				{!data && <BarLoader width={200} />}
				{data && data.error && (
					<h2 className='text-red-700'>Error: {data.error}</h2>
				)}
				{data && data.log && once && (
					<div>
						{data.log.parsed.map((m: Message) => (
							<div key={m.author + m.content + m.time} className='my-1'>
								<h2
									style={{
										color: colourStore.get(m.author),
									}}
								>
									<span className='font-bold text-lg'>{m.author}</span>{' '}
									<span className='text-gray-500 text-xs'>{m.time}</span>
								</h2>
								<p>
									{m.content.split('\n').map(s => (
										<span key={s}>
											{s}
											<br />
										</span>
									))}
								</p>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
