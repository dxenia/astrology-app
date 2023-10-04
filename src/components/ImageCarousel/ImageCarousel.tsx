import { useRef } from 'react';

import carouselOne from '../../assets/images/carousel-1.gif';
import carouselTwo from '../../assets/images/carousel-2.gif';
import carouselThree from '../../assets/images/carousel-3.gif';

import './ImageCarousel.css';

interface CarouselProps {
  lifePathNumber: number;
  expressionNumber: number;
  soulUrgeNumber: number;
}

export default function Carousel({
  lifePathNumber,
  expressionNumber,
  soulUrgeNumber,
}: CarouselProps) {
  const listRef = useRef<HTMLUListElement>(null);

  function scrollToIndex(index: number) {
    if (listRef.current) {
      const imgNodes = listRef.current.querySelectorAll('li > img');
      if (imgNodes.length > index) {
        imgNodes[index].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  }

  return (
    <div className="carousel">
      <span>
        Your results are ready. Press the buttons below to discover them:
      </span>
      <nav className="box__buttons">
        {/* NOTE: OnClickButton component is not used below to improve UX */}
        <button onClick={() => scrollToIndex(0)}>Life Path Number</button>
        <button onClick={() => scrollToIndex(1)}>Expression Number</button>
        <button onClick={() => scrollToIndex(2)}>Soul Urge Number</button>
      </nav>
      <div>
        <ul ref={listRef} className="box__ul">
          <li>
            {lifePathNumber !== 0 && (
              <span className="results">
                Your life path number is: {lifePathNumber}
              </span>
            )}
            <img src={carouselOne} alt="Abstract face" />
          </li>
          <li>
            {expressionNumber !== 0 && (
              <span className="results">
                Your expression number is: {expressionNumber}
              </span>
            )}
            <img src={carouselTwo} alt="Abstract face" />
          </li>
          <li>
            {soulUrgeNumber !== 0 && (
              <span className="results">
                Your soul urge number is: {soulUrgeNumber}
              </span>
            )}
            <img src={carouselThree} alt="Abstract face" />
          </li>
        </ul>
      </div>
    </div>
  );
}
