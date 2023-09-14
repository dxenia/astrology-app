import { AstrologyProps } from '../../types/AstrologyProps';

const AstrologyCard: React.FC<AstrologyProps> = ({
  name,
  image,
  dates,
}: AstrologyProps) => {
  return (
    <div className="card__item">
      <h3>{name}</h3>
      <img src={image} width="100rem" className="temp_img"></img>
      <p>Dates: {dates}</p>
    </div>
  );
};

export default AstrologyCard;
