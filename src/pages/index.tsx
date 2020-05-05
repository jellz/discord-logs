import { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/header';

export default function Index() {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [content, setContent] = useState('');

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
		setContent(e.target.value.trim());

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(content);
		if (content.length < 1) return alert('You need to provide chat logs');
		setLoading(true);
		const res = await fetch('/api/format', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ content }),
		});
		const json = await res.json();
		if (!res.ok) {
			alert(
				`Something went wrong while formatting logs: ${res.status} ${
					json ? json.error : ''
				}`
			);
			return setLoading(false);
		}
		window.sessionStorage.setItem('createdLog', JSON.stringify(json));
		router.push(`/log/${json.id}`);
	};

	return (
		<div>
			<div className='container mx-auto px-16 py-8'>
				<Header />
				<form onSubmit={handleSubmit}>
					<textarea
						data-gramm={false}
						spellCheck={false}
						maxLength={100000}
						minLength={1}
						onChange={handleChange}
						value={content}
						className='
							appearance-none
							block 
							w-full 
							bg-gray-200 
							text-gray-700 
							border 
							border-gray-200 
							rounded 
							py-3 
							px-4 
							mb-3
							main-textarea
							leading-tight 
							focus:outline-none 
							focus:bg-white 
							focus:border-red-600
						'
						id='main-textarea'
						placeholder='Paste your chat logs here'
					/>
					<span className='inline-flex rounded-md shadow-sm'>
						<button
							type='submit'
							className={`
								inline-flex 
								items-center 
								px-4 
								py-2 
								border 
								border-transparent 
								text-sm 
								leading-5 
								font-medium 
								rounded-md 
								text-white 
								bg-red-600 
								hover:bg-red-500 
								focus:outline-none 
								focus:border-red-700 
								focus:shadow-outline-red 
								active:bg-red-700 
								transition 
								ease-in-out 
								duration-150
								${loading ? 'opacity-50 cursor-not-allowed' : ''}
							`}
						>
							{loading ? 'Formatting...' : 'Format!'}
						</button>
					</span>
				</form>
			</div>
		</div>
	);
}
