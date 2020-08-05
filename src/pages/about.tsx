//    Copyright (C) 2020 Daniel Gulic
// 		See LICENSE file

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
					<a id='how'>
						<h3 className='text-2xl text-black font-bold'>How does it work?</h3>
					</a>
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
					<a id='contact'>
						<h3 className='text-2xl text-black font-bold'>Contact</h3>
					</a>
					<p>
						You can contact me on Discord (daniel#0004) or{' '}
						<a className='underline' href='mailto:danielgulic@gmail.com'>
							by email
						</a>
						.
					</p>
				</div>
				<div className='my-3'>
					<a id='code'>
						<h3 className='text-2xl text-black font-bold'>Code</h3>
					</a>
					<p>
						The code for this website is free and open-source on GitHub{' '}
						<a
							className='text-blue-500 hover:text-blue-800'
							href='https://github.com/jellz/discord-logs'
						>
							here
						</a>
						. It is licensed under GPL v3.
					</p>
				</div>
				<div className='my-3'>
					<a id='API'>
						<h3 className='text-2xl text-black font-bold'>API</h3>
					</a>
					<p>
						An API is provided for bots and other automations to POST messages
						and receive a link to a formatted log.
						<br />
						<br />
						Endpoint
						<pre>POST /api/format?auto=true</pre>
						<br />
						Body (JSON)
						<pre>{`{
  "messages": [
    {
      "author": "Author Name",
      "date": 1596632366621,
      "content": "This is the message content"
    },
    {
      "author": "Another Author Name",
      "date": 1596632928459,
      "content": "Another message"
    }
  ]
}
						`}</pre>
						<br />
						You can also GET logs by their ID<pre>GET /api/logs/:id</pre>
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
