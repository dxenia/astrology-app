import useFetch from '../../hooks/useFetch.tsx';
import { ZodiacProps } from '../../types/ZodiacProps.ts';
import { useParams } from 'react-router-dom';
import './ZodiacSignDetails.css';

function ZodiacSignDetails() {
  const { id } = useParams();
  const url = `https://jps-tarot-api.azurewebsites.net/api/Zodiac/GetById/${id}`;

  const { data: sign, error, loading } = useFetch<ZodiacProps>(url);

  console.log(sign);

  if (error) {
    console.log(`Error: ${error.message}`);
  }

  return (
    <>
      <div>
        <h2>Astrology</h2>
        {error && <div>{error?.message}</div>}
        {loading && <div>is loading </div>}
        <div>
          <h3>{sign?.name}</h3>
        </div>
      </div>
    </>
  );
}

export default ZodiacSignDetails;
