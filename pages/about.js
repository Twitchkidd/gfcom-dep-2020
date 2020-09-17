import { Layout } from '../components';

export default function About() {
	return (
		<Layout>
			<h2>About Me</h2>
			<p>
				Hi! Thanks for stopping by, my name is Gareth Field, I'm a runner and
				developer living in Connecticut with my dog Dawa, who is the best good
				boy in the whole wide world, yes he is. He has received pets.
			</p>
			<p>
				This website was build with Next.js, a React framework/tool/thingamabob,
				and is a work is progress, please excuse some temporary jankiness.
				Please find the most recent interesting stuff using the Google Sheets
				API in{' '}
				<a
					href='https://github.com/Twitchkidd/gfcom/blob/main/lib/virtualGarageSale.js'
					alt='the file that does the data grabbing'>
					/lib/virtualGarageSale.js
				</a>{' '}
				and{' '}
				<a href='https://github.com/Twitchkidd/gfcom/blob/main/pages/virtual-garage-sale.js'>
					/pages/virtual-garage-sale.js,
				</a>{' '}
				also you can check out{' '}
				<a
					href='https://github.com/Twitchkidd/gfcom/tree/oldSchool'
					alt='branch of code repository that still used Gatsby'>
					the old version in Gatsby here,
				</a>{' '}
				and while you're on my GitHub, check out the Python program for
				batch-renaming branches:{' '}
				<a
					href='https://github.com/Twitchkidd/master-blaster'
					alt='master-blaster code repository'>
					master-blaster
				</a>
			</p>
		</Layout>
	);
}
