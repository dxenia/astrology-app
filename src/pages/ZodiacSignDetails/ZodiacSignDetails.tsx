import useFetch from '../../hooks/useFetch.tsx';
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

      <button className="card__details--back-btn" onClick={() => navigate(-1)}>
        Back
      </button>
      <div>
        <h2>{sign?.name}</h2>
        <img src={sign?.image} alt={sign?.name}></img>
        <span> | {sign?.dates}</span>

        <h3>Ruler</h3>
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
        <h3>Modality</h3>
        <h3>Traits</h3>
        <ul>
          <li>
            <h4>Positive Traits</h4> {sign?.positiveTraits?.join(', ')}
          </li>
          <li>
            <h4>Negative Traits</h4> {sign?.negativeTraits?.join(', ')}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ZodiacSignDetails;
