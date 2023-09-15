import type { ZodiacCardProps } from './ZodiacCard.types';

import './ZodiacCard.css';

function ZodiacCard({ sign }: ZodiacCardProps) {
  console.log(sign);
  return (
    <div className="image-container">
      <img src={sign.image} alt={sign.name} className="character-image" />
      <h2>{sign.name}</h2>
    </div>
  );
}

export default ZodiacCard;
