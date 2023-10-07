import Button from '../Button/Button.tsx';
import { TarotCardProps } from '../../types/Tarot.types.ts';

import './FlipCard.css';

function TarotCard({ card }: TarotCardProps) {
  return (
    <div className="flip-card">
      <div className="flip-card__inner">
        <div className="flip-card__front">
          <img src={card.image} className="flip-card__img" alt={card.name} />
        </div>
        <div className="flip-card__back">
          <h2 className="flip-card__name">{card.name}</h2>
          <div className="flip-card__info">
            <p>Type: {card.type}</p>
            <p>Upright: {card.upright.join(', ')}</p>
            <p>Reversed: {card.reversed.join(', ')}</p>
          </div>
          <Button
            as="link"
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
