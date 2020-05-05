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
					content='This is a free service to format your Discord chat logs to make it look nicer =)'
				/>
				<meta
					name='description'
					content='This is a free service to format your Discord chat logs to make it look nicer =)'
				/>
				<meta property='og:url' content='https://discordlogs.jlz.fun' />
			</Head>
			{children}
		</div>
	);
}
