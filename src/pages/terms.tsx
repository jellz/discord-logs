import Header from '../components/header';

export default function Terms() {
	return (
		<div>
			<div className='container mx-auto px-16 py-8'>
				<Header />
				<div className='my-3'>
					<h3 className='text-2xl text-black font-bold'>Terms of Service</h3>
					<p>
						These terms of service ("Terms") apply to your access and use of
						Discord Logs (the "Service"). Please read them carefully.
					</p>
					<div className='my-3'>
						<h4 className='text-xl text-black font-bold'>
							1. Acceptance of these Terms
						</h4>
						<p>
							By accessing this web site, you are agreeing to be bound by these
							web site Terms and Conditions of Use, all applicable laws and
							regulations, and agree that you are responsible for compliance
							with any applicable local laws. If you do not agree with any of
							these terms, you are prohibited from using or accessing this site.
							The materials contained in this web site are protected by
							applicable copyright and trade mark law.
						</p>
					</div>

					<div className='my-3'>
						<h4 className='text-xl text-black font-bold'>
							2. Hyperlinks and Third Party Content
						</h4>
						<p>
							Discord Logs has not reviewed all of the sites linked to its
							Internet web site and is not responsible for the contents of any
							such linked site. The inclusion of any link does not imply
							endorsement by Discord Logs of the site. Use of any such linked
							web site is at the user's own risk.
						</p>
					</div>

					<div className='my-3'>
						<h4 className='text-xl text-black font-bold'>3. Disclaimer</h4>
						<p>
							The materials on this web site are provided "as is". Discord Logs
							makes no warranties, expressed or implied, and hereby disclaims
							and negates all other warranties, including without limitation,
							implied warranties or conditions of merchantability, fitness for a
							particular purpose, or non-infringement of intellectual property
							or other violation of rights. Further, Discord Logs does not
							warrant or make any representations concerning the accuracy,
							likely results, or reliability of the use of the materials on its
							Internet web site or otherwise relating to such materials or on
							any sites linked to this site.
						</p>
					</div>

					<div className='my-3'>
						<h4 className='text-xl text-black font-bold'>4. Limitations</h4>
						<p>
							In no event shall Discord Logs or its suppliers be liable for any
							damages (including, without limitation, damages for loss of data
							or profit, or due to business interruption,) arising out of the
							use or inability to use the materials on Discord Logs's Internet
							site, even if Discord Logs or a Discord Logs authorized representative
							has been notified orally or in writing of the possibility of such
							damage. Because some jurisdictions do not allow limitations on
							implied warranties, or limitations of liability for consequential
							or incidental damages, these limitations may not apply to you.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
