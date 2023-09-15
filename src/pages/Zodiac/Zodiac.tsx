import './Zodiac.css';
import useFetch from '../../hooks/useFetch.tsx';
import { ZodiacProps } from '../../types/ZodiacProps.ts';
import ZodiacCard from '../../components/ZodiacCard/ZodiacCard.tsx';

function Zodiac() {
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
          {(data ?? []).map((card: ZodiacProps, index: number) => (
            <ZodiacCard key={index} sign={card} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Zodiac;
