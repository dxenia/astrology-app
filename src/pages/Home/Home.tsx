import zodiacWheel from '../../assets/images/zodiac-wheel.png';
import moonPhases from '../../assets/images/moon-phases.png';
import butterfly from '../../assets/images/butterfly.png';
import butterflyTwo from '../../assets/images/butterfly-2.png';
import moth from '../../assets/images/moth.png';

import Button from '../../components/Button/Button';
import {
  FormData,
  SubscribeForm,
} from '../../components/SubscribeForm/SubscribeForm';

import './Home.css';

export default function Home() {
  const handleSubmit = (formData: FormData) => {
    console.log(formData);
    alert('Your subscription request has been submitted!');
  };

  return (
    <div className="home">
      <section className="home__first-section">
        <div className="home__info">
          <h1 className="home__logo">lunar☾</h1>
          <h2 className="home__heading">Astrology in your pocket.</h2>
          <p className="home__subheading">
            Welcome to the mystical world of Lunar, your gateway to unlocking
            the secrets of the cosmos and discovering the hidden truths that lie
            within the Tarot cards.
          </p>
          <Button
            as="link"
            children="Learn More →"
            url={'/about'}
            target={'_self'}
            className="home__button"
          />
        </div>
        <img
          src={zodiacWheel}
          className="home__img--first-section invert"
          alt="Zodiac Wheel"
        ></img>
      </section>

      <section className="home__second-section">
        <h2>What can you find on Lunar?</h2>
        <ul className="home__list">
          <li className="home__list-item">
            <img src={moth} className="home__icon invert"></img>
            <h3>Zodiac Signs</h3>
            <p>
              Dive into the cosmic mysteries of astrology on our website.
              Explore your birth chart, discover the secrets of your sun, moon,
              and rising signs, and gain insights into your life's path based on
              the movements of celestial bodies. Unlock the power of the stars
              and navigate your destiny with our expert astrologers.
            </p>
          </li>
          <li className="home__list-item">
            <img src={butterfly} className="home__icon invert"></img>
            <h3>Tarot Cards</h3>
            <p>
              Unveil the enigmatic world of tarot on our website. Experience the
              art of divination through tarot card readings, learn the symbolism
              behind each card, and receive guidance on love, career, and
              spirituality. Our skilled tarot readers are here to help you
              uncover the hidden wisdom within the cards.
            </p>
          </li>
          <li className="home__list-item">
            <img src={butterflyTwo} className="home__icon"></img>
            <h3>Numerology</h3>
            <p>
              Unlock the mystical significance of numbers with our numerology
              resources. Explore the vibrations and energies associated with
              your name and birthdate, delve into the secrets of numerological
              calculations, and gain profound insights into your life's purpose.
              Join us on this journey of self-discovery.
            </p>
          </li>
        </ul>
        <img src={moonPhases} className="home__img--second-section"></img>
      </section>

      <section className="home__third-section">
        <div className="home__form-wrapper">
          <article>
            <h2 className="home__heading--third-section">
              Curious about your zodiac sign?
            </h2>
            <h3 className="home__sub-heading--third-section">
              Sign up for our newsletter!
            </h3>
          </article>
          <SubscribeForm onSubmit={handleSubmit} />
        </div>
      </section>
    </div>
  );
}
