import Button from '../Button/Button.tsx';
import { TarotCardProps } from '../../types/Tarot.types.ts';

import './MagicCard.css';

function getRandomBoolean() {
  return Math.random() < 0.5;
}

function TarotCard({ card }: TarotCardProps) {
  const uprightReversed = getRandomBoolean();

  return (
    <div className="flip-card">
      <div className="flip-card__inner">
        <div className="flip-card__front magic-card glow">
          <span>?</span>
        </div>
        <div className="flip-card__back">
          <h2 className="flip-card__name">{card.name}</h2>
          <div className="flip-card__info">
            <p>
              This card is
              {uprightReversed ? ' reversed' : ' upright'}.
            </p>
            <p>
              Reflect on the following keywords: {''}
              {uprightReversed
                ? card.reversed.join(', ')
                : card.upright.join(', ')}
            </p>
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
