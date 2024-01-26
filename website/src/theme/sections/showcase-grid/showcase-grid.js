import React, { Fragment, useEffect, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { ShowcaseCard, CtaImageButton } from '@infinum/docusaurus-theme';
import { EsOpenSource } from '../os-projects';

const shuffleArray = (array) => array.map(value => ({ value, sort: Math.random() }))
	.sort((a, b) => a.sort - b.sort)
	.map(({ value }) => value);

export default function ShowcaseGrid(props) {
	const {
		privateType,
	} = props;

	const headingTitle = privateType ? 'Infinum showcase' : 'Showcase';
	const headingSubtitle = privateType ? "See all the awesome websites built by Infinum's WordPress team." : 'See the awesome websites people are building with Eightshift Boilerplate.';
	const ctaTitle = privateType ? "Let's get in touch" : (<span>Want to add your <br /> project to the list?</span>);
	const ctaSubtitle = privateType ? 'Contact us' : 'Open an issue on GitHub';
	const ctaUrl = privateType ? 'https://infinum.com/contact/' : 'https://github.com/infinum/eightshift-docs/issues';

	const privateData = [
		{
			image: useBaseUrl('img/showcase/tarisio.webp'),
			label: 'Tarisio',
			desc: 'Tarisio is a web-based auction house specializing in stringed instruments and bows. Its online auctions provide a global marketplace for fine violin sales.',
			link: 'https://tarisio.com/',
		},
		{
			image: useBaseUrl('img/showcase/t2.webp'),
			label: 'T2 auctions',
			desc: 'Auctions for the Violin Trade.',
			link: 'https://t2-auctions.com/',
		},
		{
			image: useBaseUrl('img/showcase/rasco.webp'),
			label: 'Rasco',
			desc: 'One of the leading manufacturers of municipal equipment in Europe: we produce snow ploughs (snowplow), spreaders, crane mowers and vehicle upgrades.',
			link: 'https://rasco.hr/',
		},
		{
			image: useBaseUrl('img/showcase/lynx.webp'),
			label: 'Lynx',
			desc: 'LYNX is a 2m³ vacuum road sweeper exceeding expectations. Modern design, functionality, power and ease of use for clean streets.',
			link: 'https://lynx.rasco.hr/',
		},
		{
			image: useBaseUrl('img/showcase/hak.webp'),
			label: 'HAK Revija',
			desc: 'HAK news portal.',
			link: 'https://revijahak.hr/',
		},
		{
			image: useBaseUrl('img/showcase/crveninosovi.webp'),
			label: 'Crveni nosovi',
			desc: 'Our mission is to restore the feeling of joy, happiness and optimism in difficult life circumstances.',
			link: 'https://www.crveninosovi.hr/',
		},
		{
			image: useBaseUrl('img/showcase/vcfa.webp'),
			label: 'VCFA',
			desc: 'Learn with accomplished teachers and artistic colleagues from around the world. You’ll create new work, refine your vision, and enhance your critical and creative skills.',
			link: 'https://vcfa.edu/',
		},
		{
			image: useBaseUrl('img/showcase/go.webp'),
			label: 'Malta Go',
			desc: 'GO is Malta’s leading communications services company. As the first quad play provider in Malta we provide mobile, fixed line, internet and TV services to more than 500,000 customers.',
			link: 'https://www.go.com.mt/',
		},
	];

	const publicData = [
		{
			image: useBaseUrl('img/showcase/infinum-learn.webp'),
			label: 'Infinum Learn',
			desc: 'Courses that will make your onboarding and work at Infinum as easy as possible.',
			link: 'https://learn.infinum.com/',
		},
		{
			image: useBaseUrl('img/showcase/infinum.webp'),
			label: 'Infinum Web',
			desc: 'An independent design and development agency with offices in the US and Europe. We create beautiful apps people love to use.',
			link: 'https://infinum.com/',
		},
		{
			image: useBaseUrl('img/showcase/solplanet.webp'),
			label: 'Solplanet',
			desc: 'The power of the sun is the future of our planet. Solplanet makes solar for everybody. Easy-to-install, reliable and user-friendly inverters.',
			link: 'https://solplanet.net/',
		},
		{
			image: useBaseUrl('img/showcase/academy.webp'),
			label: 'Infinum Academy',
			desc: 'Learn how to build apps. For free. No practical experience? No problem. People who build apps every day are teaching how to create software from scratch. By the end of the course, you will have built your very own app.',
			link: 'https://academy.infinum.com/',
		},
		{
			image: useBaseUrl('img/showcase/raise-the-bar.webp'),
			label: 'Raise The Bar',
			desc: 'Coca-Cola HBC is helps to align the skills and knowledge in tourism and hospitality through Raise the Bar education program.',
			link: 'https://raisethebar.hr/',
		},
		{
			image: useBaseUrl('img/showcase/d66.webp'),
			label: 'D66',
			desc: 'Democrats 66 is a social-liberal political party in the Netherlands. Its name originates from the year in which it was founded.',
			link: 'https://d66.nl/',
		},
		{
			image: useBaseUrl('img/showcase/tvornica-snova.webp'),
			label: 'Tvornica Snova',
			desc: 'Personalized books will allow each child to become the protagonist of their own story.',
			link: 'https://tvornicasnova.hr/',
		},
		{
			image: useBaseUrl('img/showcase/cormeum.webp'),
			label: 'Cormeum App',
			desc: 'Heart failure management just got easier. The Cormeum app helps heart failure patients and their providers track what’s important.',
			link: 'https://cormeumapp.com/',
		},
		{
			image: useBaseUrl('img/showcase/immunicom.webp'),
			label: 'Immunicom',
			desc: 'Immunicom’s Immunopheresis™ is designed to empower patients to best live their lives while receiving revolutionary cancer treatment.',
			link: 'https://immunicom.com/',
		},
		{
			image: useBaseUrl('img/showcase/productive.webp'),
			label: 'Productive',
			desc: 'Productive is a one-stop shop for agencies of all types and sizes. Start now and get a strong grip on operations and profitability.',
			link: 'https://productive.io/',
		},
		{
			image: useBaseUrl('img/showcase/saferinternet.webp'),
			label: 'UK Safer Internet Centre',
			desc: 'Welcome to the UK Safer Internet Centre, where you can find online safety tips, advice and resources to help children and young people stay safe online.',
			link: 'https://saferinternet.org.uk/',
		},
		{
			image: useBaseUrl('img/showcase/greenwichvillage.webp'),
			label: 'Greenwich Village',
			desc: 'The Village Alliance has been a leading advocate for the Greenwich Village community for nearly thirty years.',
			link: 'https://greenwichvillage.nyc/',
		},
		{
			image: useBaseUrl('img/showcase/biller.webp'),
			label: 'Biller',
			desc: 'Let\'s make buying easier, by empowering your business buyers to use Buy Now, Pay Later. Add Biller to your checkout and watch your conversion increase.',
			link: 'https://biller.ai/',
		},
		{
			image: useBaseUrl('img/showcase/dept.webp'),
			label: 'DEPT®',
			desc: 'Pioneering tech and marketing to help brands stay ahead.',
			link: 'https://www.deptagency.com/',
		},
		{
			image: useBaseUrl('img/showcase/infobip.webp'),
			label: 'Infobip',
			desc: 'Croatian IT and telecommunications company, offering omnichannel communications, contact center, chatbot, customer engagement, and customer data platforms as well as identity and security.',
			link: 'https://www.infobip.com/',
		},
	];

	const itemsData = privateType ? [...publicData, ...privateData] : publicData;

	// https://reactjs.org/docs/react-dom.html#hydrate
	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		setIsClient(true)
	}, []);

	const items = shuffleArray(itemsData).map((item, index) => {
		const {
			image,
			label,
			link,
			desc,
		} = item;

		return (
			<ShowcaseCard
				key={index}
				url={link}
				imageUrl={image}
				imageAlt={label}
				title={label}
				description={desc}
			/>
		)
	});

	return (
		// key={isClient ? 1 : 2} will trigger a rerender of the whole subtree and the images will be aligned with text
		<Fragment key={isClient ? 1 : 2}>
			<h1 className='es-big-title es-h-center'>{headingTitle}</h1>
			<p className='es-big-subtitle es-text-center es-h-center'>{headingSubtitle}</p>

			<div className='es-showcase-grid'>
				{items}
			</div>

			<CtaImageButton
				title={ctaTitle}
				buttonLabel={ctaSubtitle}
				buttonUrl={ctaUrl}
				imageUrl='/img/showcase/cta.svg'
			/>

			<EsOpenSource gray />
		</Fragment>
	);
}
