import '../styles/index.css';
import Layout from '../components/layout';

function DiscordLogs({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default DiscordLogs;
