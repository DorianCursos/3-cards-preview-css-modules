import Card from './components/card/Card';
import Cards from './components/cards/Cards';
import { CARDS_INFO } from './constants/cards-info';

const App = () => {
	return (
		<div>
			<h1>Curso de React - Práctica 1</h1>
			<Cards>
				{CARDS_INFO.map(card => (
					<Card key={card.id} {...card} />
				))}
			</Cards>
		</div>
	);
};

export default App;
