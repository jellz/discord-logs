import Header from './header';
import Head from 'next/head';

export default function Layout({ children, title = 'Discord Logs' }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
				<meta property='og:title' content='Discord Logs' />
				<meta
					property='og:description'
					content='This is a free service for you to share your Discord chat logs and make
					them look nice'
				/>
				<meta
					name='description'
					content='This is a free service for you to share your Discord chat logs and make
					them look nice'
				/>
				<meta property='og:url' content='https://discordlogs.jlz.fun' />
			</Head>
			{children}
		</div>
	);
}
