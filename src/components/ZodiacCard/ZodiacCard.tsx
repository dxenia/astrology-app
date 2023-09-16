import { Link } from 'react-router-dom';

import Heading from '../Heading/Heading';
import type { ZodiacCardProps } from './ZodiacCard.types';

import './ZodiacCard.css';

function ZodiacCard({ sign }: ZodiacCardProps) {
  return (
    <Link to={`/zodiac/${sign.id}`} className="card__link">
      <div className="card__item">
        <Heading element="h3">{sign.name}</Heading>
        <img src={sign.image} alt={sign.name} className="card__item--img" />
        <span>Dates: {sign.dates}</span>
      </div>
    </Link>
  );
}

export default ZodiacCard;
