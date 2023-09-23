import './CardReading.css';
import useFetch from '../../hooks/useFetch';
import { TarotProps } from '../../types/TarotProps';
import Loading from '../../components/Loading/Loading';
import TarotCard from '../../components/TarotCard/TarotCard';

export default function CardReading() {
  const url = 'https://jps-tarot-api.azurewebsites.net/api/Tarot/GetShuffled';
  const { data: cards, loading, error } = useFetch<TarotProps[]>(url);

  if (error) {
    console.log(`Error: ${error.message}`);
  }

  const handleRerenderClick = () => {
    window.location.reload();
  };

  return (
    <div>
      <h2>Tarot Card Reading</h2>
      <p className="reading--description">
        The history of tarot card reading is marked by a blend of traditional
        playing card origins and the overlay of esoteric and mystical
        interpretations. Today, tarot cards are used by individuals for a wide
        range of purposes, including personal insight, meditation,
        self-discovery, and entertainment. The practice continues to evolve and
        adapt in response to changing beliefs and cultural contexts.
      </p>
      {error && <div>{error?.message}</div>}
      {loading && <Loading />}
      <div className="card__list--reading">
        {' '}
        <div className="card__list--reading">
          {cards?.slice(0, 3).map((card) => (
            <TarotCard key={card.id} card={card} />
          ))}
        </div>
      </div>
      <button onClick={handleRerenderClick}>Generate a new reading</button>
    </div>
  );
}
