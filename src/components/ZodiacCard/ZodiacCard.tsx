import { Link } from 'react-router-dom';
import type { ZodiacCardProps } from './ZodiacCard.types';

import './ZodiacCard.css';

function ZodiacCard({ sign }: ZodiacCardProps) {
  return (
    <Link to={`/characters/${sign.elementId}`} className="character-card">
      <div className="image-container">
        <img src={sign.image} alt={sign.name} className="character-image" />
        <h2>{sign.name}</h2>
      </div>
    </Link>
  );
}

export default ZodiacCard;
