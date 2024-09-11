import { v4 } from 'uuid';

export const CARDS_INFO = [
	{
		id: v4(),
		icon: '/assets/images/icon-sedans.svg',
		title: 'SEDANS',
		text: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
		color: 'orange',
		position: 'first'
	},
	{
		id: v4(),
		icon: '/assets/images/icon-suvs.svg',
		title: 'SUVS',
		text: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
		color: 'blue'
	},
	{
		id: v4(),
		icon: '/assets/images/icon-luxury.svg',
		title: 'LUXURY',
		text: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
		color: 'green',
		position: 'last'
	}
];
