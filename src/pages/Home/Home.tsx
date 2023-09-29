import zodiacWheel from '../../assets/images/zodiac-wheel.png';
import moonPhases from '../../assets/images/moon-phases.png';
import butterfly from '../../assets/images/butterfly.png';
import butterflyTwo from '../../assets/images/butterfly-2.png';
import moth from '../../assets/images/moth.png';

import Heading from '../../components/Heading/Heading';
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
    <div className="home__scroll">
      <section className="home__intro">
        <div className="home__intro--info">
          <h1 className="home__central-heading">lunar☾</h1>
          <h3 className="home__heading">Astrology in your pocket.</h3>
          <p className="home__intro--subheading">
            Welcome to the mystical world of Lunar, your gateway to unlocking
            the secrets of the cosmos and discovering the hidden truths that lie
            within the Tarot cards.
          </p>
          <Button
            children="Learn More →"
            url={'/about'}
            target={'_self'}
            className="home__intro--button"
          />
        </div>
        <img src={zodiacWheel} className="home__intro--img"></img>
      </section>
      <section className="home__main">
        <h3 className="home__heading">What can you find on Lunar?</h3>
        <ul className="home__main--info">
          <li className="home__main--item">
            <img src={moth} className="home__main--icon"></img>
            <Heading element="h4">Zodiac Signs</Heading>
            <p>
              Dive into the cosmic mysteries of astrology on our website.
              Explore your birth chart, discover the secrets of your sun, moon,
              and rising signs, and gain insights into your life's path based on
              the movements of celestial bodies. Unlock the power of the stars
              and navigate your destiny with our expert astrologers.
            </p>
          </li>
          <li className="home__main--item">
            <img src={butterfly} className="home__main--icon"></img>
            <Heading element="h4">Tarot Cards</Heading>
            <p>
              Unveil the enigmatic world of tarot on our website. Experience the
              art of divination through tarot card readings, learn the symbolism
              behind each card, and receive guidance on love, career, and
              spirituality. Our skilled tarot readers are here to help you
              uncover the hidden wisdom within the cards.
            </p>
          </li>
          <li className="home__main--item">
            <img src={butterflyTwo} className="home__main--icon"></img>
            <Heading element="h4">Numerology</Heading>
            <p>
              Unlock the mystical significance of numbers with our numerology
              resources. Explore the vibrations and energies associated with
              your name and birthdate, delve into the secrets of numerological
              calculations, and gain profound insights into your life's purpose.
              Join us on this journey of self-discovery.
            </p>
          </li>
        </ul>
        <img src={moonPhases} className="home__main--img"></img>
      </section>
      <section className="form__section">
        <div className="form__wrapper">
          <article>
            <Heading element="h3" className="form__info">
              Curious about your zodiac sign?
            </Heading>
            <p>Sign up for our newsletter!</p>
          </article>
          <SubscribeForm onSubmit={handleSubmit} />
        </div>
      </section>
    </div>
  );
}
