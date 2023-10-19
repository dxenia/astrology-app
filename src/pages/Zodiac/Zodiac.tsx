import owlHead from '../../assets/images/owl-head.webp';
import useFetch from '../../hooks/useFetch';
import ZodiacCard from '../../components/ZodiacCard/ZodiacCard.tsx';
import Loading from '../../components/Loading/Loading.tsx';
import { ZodiacProps } from '../../types/Zodiac.types.ts';

import './Zodiac.css';

function Zodiac() {
  const url = 'https://jps-tarot-api.azurewebsites.net/api/Zodiac/Get';
  const { data: signs, error, loading } = useFetch<ZodiacProps[]>(url);

  if (error) {
    console.log(`Error: ${error.message}`);
  }

  return (
    <section className="zodiac">
      <h1>Astrology</h1>
      {error && <div>{error?.message}</div>}
      {loading && <Loading />}
      <p className="description">
        Astrology is an ancient and complex system of divination that has been
        practiced for thousands of years. Its origins can be traced back to
        various civilizations throughout history, including Mesopotamia, Egypt,
        and Greece. The Western zodiac, also known as the tropical zodiac, is
        based on the position of the Sun relative to the twelve zodiac signs at
        the time of a person's birth. Each sign is associated with specific
        personality traits and characteristics.
      </p>
      <img src={owlHead} className="astrology__image" alt="Owl headed man" />
      <div className="astrology__list">
        {signs?.map((sign) => (
          <ZodiacCard key={sign.id} sign={sign} />
        ))}
      </div>
    </section>
  );
}

export default Zodiac;
