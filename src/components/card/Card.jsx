import styles from './card.module.css';

const Card = ({ icon, title, text, color, position }) => {
	const cardColor = 'card-' + color;
	const cardPosition = 'card-' + position;
	const cardStyles = `${styles.card} ${styles[cardColor]} ${styles[cardPosition]}`;
	const cardIconStyles = styles['card-icon'];
	const cardTitleStyles = styles['card-title'];
	const cardTextStyles = styles['card-text'];
	const cardButtonStyles = styles['card-button'];
	return (
		<div className={cardStyles}>
			<img className={cardIconStyles} src={icon} alt='Car icon' />
			<h2 className={cardTitleStyles}>{title}</h2>
			<p className={cardTextStyles}>{text}</p>
			<button className={cardButtonStyles}>Learn More</button>
		</div>
	);
};

export default Card;
