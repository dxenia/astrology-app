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
          <Heading element="h1">lunar☾</Heading>
          <Heading element="h3" className="home__intro--heading">
            Astrology in your pocket.
          </Heading>
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
        <Heading element="h3" className="home__main--heading">
          What can you find on Lunar?
        </Heading>
        <ul className="home__main--info">
          <li className="home__main--item">
            <img src={moth} className="home__main--icon"></img>
            <Heading element="h4">Zodiac Signs</Heading>
            <p>
              Embark on a celestial journey to explore the profound world of
              Zodiac signs. Dive deep into the unique characteristics, traits,
              and mysteries of each astrological sign. Discover how the
              alignment of the stars at your birth shapes your personality and
              influences your life's path. Our comprehensive resources and
              insightful articles will guide you through the captivating realm
              of astrology, helping you understand yourself and the people
              around you like never before.
            </p>
          </li>
          <li className="home__main--item">
            <img src={butterfly} className="home__main--icon"></img>
            <Heading element="h4">Tarot Cards</Heading>
            <p>
              Unlock the ancient wisdom of Tarot cards and delve into the
              intriguing art of divination. Explore the symbolism, meanings, and
              interpretations of each Tarot card in our extensive library.
              Whether you're a beginner or an experienced Tarot enthusiast, our
              educational content and expert insights will deepen your
              understanding of this mystical practice. Gain valuable insights
              into your past, present, and future as you navigate the enchanting
              world of Tarot cards.
            </p>
          </li>
          <li className="home__main--item">
            <img src={butterflyTwo} className="home__main--icon"></img>
            <Heading element="h4">Card Reading</Heading>
            <p>
              Experience the magic of a personalized Tarot card reading right at
              your fingertips. Connect with our skilled and intuitive readers
              who will provide you with a one-of-a-kind Tarot card reading
              session. Seek answers to your burning questions, gain clarity on
              life's dilemmas, or simply receive guidance and inspiration. Our
              readings are designed to empower you, offering profound insights
              and a deeper connection to your spiritual journey. Let the Tarot
              unveil the secrets of your destiny today.
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
