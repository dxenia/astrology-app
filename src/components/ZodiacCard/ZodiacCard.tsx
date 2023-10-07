import { Link } from 'react-router-dom';

import type { ZodiacCardProps } from '../../types/Zodiac.types';

import './ZodiacCard.css';

function ZodiacCard({ sign }: ZodiacCardProps) {
  return (
    <Link to={`/zodiac/${sign.id}`} className="card__link">
      <div className="button--shadow shadow card__item">
        <h2>{sign.name}</h2>
        <img src={sign.image} alt={sign.name} className="card__img" />
        <span>Dates: {sign.dates}</span>
      </div>
    </Link>
  );
}

export default ZodiacCard;
