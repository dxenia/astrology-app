import { useRef } from 'react';

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
              <span>Your life path number is: {lifePathNumber}</span>
            )}
            <img
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHdsc3pkNXcyZ21tdmoxZnc5cmJkNDl5emxnOG5taW83dGRzZzNiMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/3o85xKklNs4DxiFAsM/giphy.gif"
              alt="Abstract face"
            />
          </li>
          <li>
            {expressionNumber !== 0 && (
              <span>Your expression number is: {expressionNumber}</span>
            )}
            <img
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGV1Ymg4aG02cGlwc3l0aWlwMWdxb2w1bWd4OWFoazVld3A3YWs4ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/vwGbmfK9TYfDd3FSca/giphy.gif"
              alt="Abstract face"
            />
          </li>
          <li>
            {soulUrgeNumber !== 0 && (
              <span>Your soul urge number is: {soulUrgeNumber}</span>
            )}
            <img
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXhiMnhhbGxnd2p0dHJ1Y2FwYjhnaHI5bXAxZWFsbXB5eW1panAzMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/pL6w6uW41bzQA/giphy.gif"
              alt="Abstract face"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
