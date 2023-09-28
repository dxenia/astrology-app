import { useRef } from 'react';

import './ImageCarousel.css';

export default function Carousel() {
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
    <div className="carousel-container">
      <nav className="box">
        <button onClick={() => scrollToIndex(0)}>Astrology</button>
        <button onClick={() => scrollToIndex(1)}>Tarots</button>
        <button onClick={() => scrollToIndex(2)}>Numerology</button>
      </nav>
      <div>
        <ul ref={listRef} className="box-ul">
          <li>
            <img
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHdsc3pkNXcyZ21tdmoxZnc5cmJkNDl5emxnOG5taW83dGRzZzNiMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/3o85xKklNs4DxiFAsM/giphy.gif"
              alt="Abstract face"
            />
          </li>
          <li>
            <img
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGV1Ymg4aG02cGlwc3l0aWlwMWdxb2w1bWd4OWFoazVld3A3YWs4ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/vwGbmfK9TYfDd3FSca/giphy.gif"
              alt="Abstract face"
            />
          </li>
          <li>
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
