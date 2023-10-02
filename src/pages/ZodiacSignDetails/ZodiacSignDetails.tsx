import useFetch from '../../hooks/useFetch';
import { ZodiacProps } from '../../types/ZodiacProps.ts';
import { useParams, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading/Loading.tsx';
import './ZodiacSignDetails.css';

function ZodiacSignDetails() {
  const { id } = useParams();
  const url = `https://jps-tarot-api.azurewebsites.net/api/Zodiac/GetById/${id}`;

  const { data: sign, error, loading } = useFetch<ZodiacProps>(url);

  console.log(sign);

  if (error) {
    console.log(`Error: ${error.message}`);
  }

  const navigate = useNavigate();

  return (
    <div className="card__details">
      {error && <div>{error?.message}</div>}
      {loading && <Loading />}

      <div>
        <h1>{sign?.name}</h1>
        <img src={sign?.image} alt={sign?.name}></img>
        <span> | {sign?.dates}</span>

        <button
          className="card__details--back-btn"
          onClick={() => navigate(-1)}
        >
          Go back to Zodiac Page
        </button>
        <ul>
          <li>
            Celestial body: {sign?.ruler.type}, {sign?.ruler.name}
            <img src={sign?.ruler.image}></img>
          </li>
          <li>Transition consistency: {sign?.ruler.transition}.</li>
          <li>
            The ruler of the sign is characterised by the following keywords:{' '}
            {sign?.ruler.keywords?.join(', ')}.
          </li>
        </ul>
        <ul>
          <li>
            <h3>Positive Traits</h3> {sign?.positiveTraits?.join(', ')}
          </li>
          <li>
            <h3>Negative Traits</h3> {sign?.negativeTraits?.join(', ')}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ZodiacSignDetails;
