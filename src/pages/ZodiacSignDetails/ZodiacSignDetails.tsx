import { useParams, useNavigate } from 'react-router-dom';

import snake from '../../assets/images/snake.png';
import useFetch from '../../hooks/useFetch';
import Button from '../../components/Button/Button.tsx';
import Loading from '../../components/Loading/Loading.tsx';
import { ZodiacProps } from '../../types/Zodiac.types.ts';
import './ZodiacSignDetails.css';

function ZodiacSignDetails() {
  const { id } = useParams();
  const url = `https://jps-tarot-api.azurewebsites.net/api/Zodiac/GetById/${id}`;

  const { data: sign, error, loading } = useFetch<ZodiacProps>(url);


  if (error) {
    console.log(`Error: ${error.message}`);
  }

  const navigate = useNavigate();

  return (
    <section className="page">
      {error && <div>{error?.message}</div>}
      {loading && <Loading />}

      <div className="card-details">
        <div className="card-details__heading">
          <h1>{sign?.name}</h1>

          <img src={sign?.image} alt={sign?.name} className="invert"></img>
          <span> {sign?.dates}</span>
        </div>
        <ul>
          <li>
            <h3>Ruler:</h3>
            {sign?.ruler.name}
            <img src={sign?.ruler.image} className="invert"></img>
          </li>
          <li>
            <h3>Transition consistency:</h3> {sign?.ruler.transition}.
          </li>
          <li>
            <h3>Relevant keywords of the planet:</h3>{' '}
            {sign?.ruler.keywords?.join(', ')}.
          </li>

          <li>
            <h3>Sign's Positive Traits</h3> {sign?.positiveTraits?.join(', ')}
          </li>
          <li>
            <h3>Sign's Negative Traits</h3> {sign?.negativeTraits?.join(', ')}
          </li>
        </ul>
        <img src={snake} className="snake-img invert" alt="Snake" />
        <Button
          className="card__details__back-btn"
          onClick={() => navigate(-1)}
        >
          Go back to Zodiac Page
        </Button>
      </div>
    </section>
  );
}

export default ZodiacSignDetails;
