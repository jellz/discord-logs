import Header from '../components/header';

export default function About() {
	return (
		<div>
			<div className='container mx-auto px-16 py-8'>
				<Header />
				Discord Logs is a small tool that you can use to format
				copied-and-pasted Discord messages to share. Discord Logs was created by{' '}
				<a className='text-blue-500 hover:text-blue-800' href='https://jlz.fun'>
					jellz
				</a>{' '}
				in ~1 day.
				<div className='my-3'>
					<h3 className='text-2xl text-black font-bold'>How does it work?</h3>
					<p>
						You just need to go to your Discord client (supports web and
						desktop) and copy any amount of messages, make sure to include the
						authors and timestamps in your selection. Then, go to Discord Logs
						and paste your selection and click Format. You will be brought to a
						page with your formatted messages. You can also share the URL with
						other people and they will be able to see the logs.
					</p>
				</div>

				<div className='my-3'>
					<h3 className='text-2xl text-black font-bold'>Contact</h3>
					<p>
						You can contact me on Discord (daniel#0004) or <a className='underline' href='mailto:danielgulic@gmail.com'>by email</a>.
					</p>
				</div>

				<div className='my-3'>
					<h3 className='text-2xl text-black font-bold'>Credits</h3>
					<p>
						<ul className='list-disc'>
							<li>
								Thanks to{' '}
								<a
									className='text-blue-500 hover:text-blue-800'
									href='https://ronthecookie.me'
								>
									Ron
								</a>{' '}
								for helping me with the algorithm
							</li>
							<li>
								Thanks to{' '}
								<a
									className='text-blue-500 hover:text-blue-800'
									href='https://github.com/robertwestbury'
								>
									Robert
								</a>{' '}
								for designing a button
							</li>
							<li>
								Website created by{' '}
								<a
									className='text-blue-500 hover:text-blue-800'
									href='https://jlz.fun'
								>
									Daniel (jellz)
								</a>
							</li>
						</ul>
					</p>
				</div>
			</div>
		</div>
	);
}
