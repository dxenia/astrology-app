import useFetch from '../hooks/useFetch';
import { TarotProps } from '../types/TarotProps';
import Loading from './Loading/Loading';
import TarotCard from './TarotCard/TarotCard';

export default function GenerateCards() {
  const url = 'https://jps-tarot-api.azurewebsites.net/api/Tarot/GetShuffled';
  const { data: cards, loading, error } = useFetch<TarotProps[]>(url);

  if (error) {
    console.log(`Error: ${error.message}`);
  }

  return (
    <div>
      {' '}
      {error && <div>{error?.message}</div>}
      {loading && <Loading />}
      <div className="card__list">
        {' '}
        <div className="card__list">
          {cards?.slice(0, 3).map((card) => (
            <TarotCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
