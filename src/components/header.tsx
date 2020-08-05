import Link from 'next/link';

export default function Header() {
	return (
		<div>
			<Link href='/'>
				<a>
					<h2 className='title'>Discord Logs</h2>
				</a>
			</Link>
			<p>
				This is a free service for you to share your Discord chat logs and make
				them look nice
			</p>
			<ul className='flex mb-3'>
				<li className='mr-6'>
					<Link href='/about'>
						<a className='text-blue-500 hover:text-blue-800'>learn more</a>
					</Link>
				</li>
				{/* <li className='mr-6'>
					<Link href='/terms'>
						<a className='text-blue-500 hover:text-blue-800'>terms</a>
					</Link>
				</li> */}
			</ul>
			{/* <br /> */}
		</div>
	);
}
