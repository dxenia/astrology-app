import { useEffect, useState } from 'react';

import useFetch from '../../hooks/useFetch';
import Button from '../Button/Button';
import Loading from '../../components/Loading/Loading';
import MagicCard from '../../components/MagicCard/MagicCard';
import { TarotProps } from '../../types/Tarot.types.ts';

import './CardReading.css';

export default function CardReading() {
  const url = 'https://jps-tarot-api.azurewebsites.net/api/Tarot/Get';
  const { data: allCards, loading, error } = useFetch<TarotProps[]>(url);

  const [selectedCards, setSelectedCards] = useState<TarotProps[] | null>(null);

  useEffect(() => {
    if (allCards) {
      const randomIndexes = getRandomIndexes(allCards.length, 3);
      const randomCards = randomIndexes.map((index) => allCards[index]);
      setSelectedCards(randomCards);
    }
  }, [allCards]);

  const handleRerenderClick = () => {
    if (allCards) {
      const remainingCards = allCards.filter(
        (card) => !selectedCards?.some((selected) => selected.id === card.id)
      );
      const randomIndexes = getRandomIndexes(remainingCards.length, 3);
      const randomCards = randomIndexes.map((index) => remainingCards[index]);
      setSelectedCards(randomCards);
    }
  };

  if (error) {
    console.log(`Error: ${error.message}`);
  }

  return (
    <div>
      <h1>Today's Reading</h1>
      <p className="reading--description">
        The history of tarot card reading is marked by a blend of traditional
        playing card origins and the overlay of esoteric and mystical
        interpretations. Today, tarot cards are used by individuals for a wide
        range of purposes, including personal insight, meditation,
        self-discovery, and entertainment. The practice continues to evolve and
        adapt in response to changing beliefs and cultural contexts.
      </p>
      {error && <div>{error?.message}</div>}
      {loading ? (
        <Loading />
      ) : (
        <div className="card__list--reading">
          {selectedCards?.map((card) => (
            <MagicCard key={card.id} card={card} />
          ))}
        </div>
      )}
      <Button onClick={handleRerenderClick} className="card__btn--reading">
        Generate a new reading
      </Button>
    </div>
  );
}

function getRandomIndexes(max: number, count: number): number[] {
  const indexes: number[] = [];
  while (indexes.length < count) {
    const randomIndex = Math.floor(Math.random() * max);
    if (!indexes.includes(randomIndex)) {
      indexes.push(randomIndex);
    }
  }
  return indexes;
}
