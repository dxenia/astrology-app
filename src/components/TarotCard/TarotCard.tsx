import Button from '../Button/Button.tsx';
import { TarotCardProps } from './TarotCard.types.ts';

import './TarotCard.css';

function TarotCard({ card }: TarotCardProps) {
  return (
    <div className="flip-card">
      <div className="flip-card__inner">
        <div className="flip-card__front">
          <img src={card.image} className="flip-card__img" alt={card.name} />
        </div>
        <div className="flip-card__back">
          <h2 className="flip-card__name">{card.name}</h2>
          <p className="flip-card__info">Type: {card.type}</p>
          <p className="flip-card__info">Upright: {card.upright.join(', ')}</p>
          <p className="flip-card__info">
            Reversed: {card.reversed.join(', ')}
          </p>
          <Button
            children="Learn More"
            url={card.link}
            target={'_blank'}
            className="flip-card__button"
          />
        </div>
      </div>
    </div>
  );
}

export default TarotCard;
