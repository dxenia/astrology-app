import useFetch from '../hooks/useFetch.tsx';
import { AstrologyProps } from '../types/AstrologyProps.ts';
import AstrologyCard from '../components/Cards/AstrologyCard.tsx';

const AstrologyList = () => {
  const url = 'https://jps-tarot-api.azurewebsites.net/api/Zodiac/Get';

  const { data, loading, error } = useFetch(url);

  if (error) {
    console.log(`Error: ${error.message}`);
  }

  return (
    <>
      <div>
        <h2>Astrology</h2>
        {loading && (
          <div className="loading">Loading data, please hang on...</div>
        )}
        <div className="astrology__list">
          {(data ?? []).map((card: AstrologyProps, index: number) => (
            <AstrologyCard
              key={index}
              name={card.name}
              image={card.image}
              dates={card.dates}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AstrologyList;
