import type { ZodiacCardProps } from './ZodiacCard.types';
import { Link } from 'react-router-dom';

import './ZodiacCard.css';

function ZodiacCard({ sign }: ZodiacCardProps) {
  console.log(sign);
  return (
    <Link to={`/zodiac/${sign.id}`}>
      <div className="image-container">
        <img src={sign.image} alt={sign.name} className="character-image" />
        <h2>{sign.name}</h2>
      </div>
    </Link>
  );
}

export default ZodiacCard;
