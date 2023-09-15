import '../Tarot/Tarot.css';
import useFetch from '../../hooks/useFetch.tsx';
import TarotCard from '../../components/Cards/TarotCard.tsx';
import { TarotProps } from '../../types/TarotProps.ts';

export default function Tarot() {
  const url = 'https://jps-tarot-api.azurewebsites.net/api/Tarot/Get';
  const { data, loading, error } = useFetch(url);

  if (error) {
    console.log(`Error: ${error.message}`);
  }

  return (
    <div>
      <h2>Tarot Cards</h2>
      {loading && (
        <div className="loading">Loading data, please hang on...</div>
      )}
      <div className="card__list">
        {(data ?? []).map((card: TarotProps, index: number) => (
          <TarotCard
            key={index}
            image={card.image}
            name={card.name}
            type={card.type}
            upright={card.upright}
            reversed={card.reversed}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
}
