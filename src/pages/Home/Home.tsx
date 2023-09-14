import zodiacWheel from '../../assets/images/zodiac-wheel.png';
import moonPhases from '../../assets/images/moon-phases.png';

import Button from '../../components/Button/Button';

import './Home.css';

export default function Home() {
  return (
    <div className="home__scroll">
      <section className="home__intro">
        <div className="home__intro--info">
          <h1 className="home__heading">lunar☾</h1>
          <h3 className="home__intro--heading">Astrology in your pocket.</h3>
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
        <img src={moonPhases} className="home__main--img"></img>
        <h3 className="home__main--heading">
          What can you find on our website?
        </h3>
        <div className="home__main--info">
          <article className="home__main--item">
            Learn About Zodiac Signs: "Embark on a celestial journey to explore
            the profound world of Zodiac signs. Dive deep into the unique
            characteristics, traits, and mysteries of each astrological sign.
            Discover how the alignment of the stars at your birth shapes your
            personality and influences your life's path. Our comprehensive
            resources and insightful articles will guide you through the
            captivating realm of astrology, helping you understand yourself and
            the people around you like never before."
          </article>
          <article className="home__main--item">
            Learn About Tarot Cards: "Unlock the ancient wisdom of Tarot cards
            and delve into the intriguing art of divination. Explore the
            symbolism, meanings, and interpretations of each Tarot card in our
            extensive library. Whether you're a beginner or an experienced Tarot
            enthusiast, our educational content and expert insights will deepen
            your understanding of this mystical practice. Gain valuable insights
            into your past, present, and future as you navigate the enchanting
            world of Tarot cards."
          </article>
          <article className="home__main--item">
            Get a Card Reading: "Experience the magic of a personalized Tarot
            card reading right at your fingertips. Connect with our skilled and
            intuitive readers who will provide you with a one-of-a-kind Tarot
            card reading session. Seek answers to your burning questions, gain
            clarity on life's dilemmas, or simply receive guidance and
            inspiration. Our readings are designed to empower you, offering
            profound insights and a deeper connection to your spiritual journey.
            Let the Tarot unveil the secrets of your destiny today."
          </article>
        </div>
      </section>
    </div>
  );
}
