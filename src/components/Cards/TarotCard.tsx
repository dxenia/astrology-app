import Button from '../Button/Button.tsx';
import { TarotProps } from '../../types/TarotProps.ts';

const TarotCard: React.FC<TarotProps> = ({
  image,
  name,
  type,
  upright,
  reversed,
  link,
}: TarotProps) => {
  return (
    <div className="flip-card">
      <div className="flip-card__inner">
        <div className="flip-card__front">
          <img src={image} className="flip-card__img" alt={name} />
        </div>
        <div className="flip-card__back">
          <h3 className="flip-card__name">{name}</h3>
          <p className="flip-card__info">Type: {type}</p>
          <p className="flip-card__info">Upright: {upright.join(', ')}</p>
          <p className="flip-card__info">Reversed: {reversed.join(', ')}</p>
          <Button children="Learn More" url={link} target={'_blank'} />
        </div>
      </div>
    </div>
  );
};

export default TarotCard;
