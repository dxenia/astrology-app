import './Zodiac.css';
import useFetch from '../../hooks/useFetch.tsx';
import { ZodiacProps } from '../../types/ZodiacProps.ts';
import ZodiacCard from '../../components/ZodiacCard/ZodiacCard.tsx';
import Loading from '../../components/Loading/Loading.tsx';

function Zodiac() {
  const url = 'https://jps-tarot-api.azurewebsites.net/api/Zodiac/Get';
  const { data: signs, error, loading } = useFetch<ZodiacProps[]>(url);
  // const foo= useState(GlobalStateContext)

  console.log(signs);

  if (error) {
    console.log(`Error: ${error.message}`);
  }

  return (
    <>
      <div>
        <h2>Astrology</h2>
        {error && <div>{error?.message}</div>}
        {loading && <Loading />}
        <div className="astrology__list">
          {signs?.map((sign) => (
            <ZodiacCard key={sign.id} sign={sign} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Zodiac;
