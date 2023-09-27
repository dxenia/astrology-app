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
    <>
      <nav className="box">
        <button onClick={() => scrollToIndex(0)}>Tom</button>
        <button onClick={() => scrollToIndex(1)}>Maru</button>
        <button onClick={() => scrollToIndex(2)}>Jellylorum</button>
      </nav>
      <div>
        <ul ref={listRef} className="box-ul">
          <li>
            <img src="https://placekitten.com/g/200/200" alt="Tom" />
          </li>
          <li>
            <img src="https://placekitten.com/g/300/200" alt="Maru" />
          </li>
          <li>
            <img src="https://placekitten.com/g/250/200" alt="Jellylorum" />
          </li>
        </ul>
      </div>
    </>
  );
}
