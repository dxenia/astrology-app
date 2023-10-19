import { useState, useMemo } from 'react';

import Button from '../../components/Button/Button';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import { expressionLetters, soulUrgeLetters } from '../../data/lettersData';
import { lifePathData } from '../../data/lifePathData';
import { LifePathProps } from './Numerology.types';

import './Numerology.css';

export default function Numerology() {
  const [dateOfBirth, setDateOfBirth] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [lifePathNumber, setLifePathNumber] = useState<number>(0);
  const [expressionNumber, setExpressionNumber] = useState<number>(0);
  const [soulUrgeNumber, setSoulUrgeNumber] = useState<number>(0);
  const [showCarousel, setShowCarousel] = useState(false);

  const calculateLifePathNumber = (): void => {
    if (!fullName || !dateOfBirth) {
      alert('Please fill in all fields.');
      return;
    } else {
      const cleanedDateOfBirth = dateOfBirth.replace(/\D/g, '');

      let sum = 0;
      for (let i = 0; i < cleanedDateOfBirth.length; i++) {
        sum += parseInt(cleanedDateOfBirth[i]);
      }

      while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
        sum = Math.floor(sum / 10) + (sum % 10);
      }

      setLifePathNumber(sum);

      calculateExpressionNumber(fullName);
      calculateSoulUrgeNumber(fullName);
      setShowCarousel(true);
    }
  };

  const calculateExpressionNumber = useMemo(() => {
    return (name: string): void => {
      let expressionNumber = 0;
      const nameWithoutSpaces = name.replace(/\s/g, '');

      for (const char of nameWithoutSpaces) {
        const uppercaseChar = char.toUpperCase();

        // eslint-disable-next-line no-prototype-builtins
        if (expressionLetters.hasOwnProperty(uppercaseChar)) {
          expressionNumber += expressionLetters[uppercaseChar];
        }

        while (
          expressionNumber > 9 &&
          expressionNumber !== 11 &&
          expressionNumber !== 22 &&
          expressionNumber !== 33
        ) {
          expressionNumber =
            Math.floor(expressionNumber / 10) + (expressionNumber % 10);
        }
      }

      setExpressionNumber(expressionNumber);
    };
  }, []);

  // !IMPORTANT! This is a unnecessary implementation of the useMemo hook, only included as a assignment requirement but not useful in a real-case scenario.
  const calculateSoulUrgeNumber = useMemo(() => {
    return (name: string): void => {
      let soulUrgeNumber = 0;
      const nameWithoutSpaces = name.replace(/\s/g, '');

      for (const char of nameWithoutSpaces) {
        const uppercaseChar = char.toUpperCase();

        // eslint-disable-next-line no-prototype-builtins
        if (soulUrgeLetters.hasOwnProperty(uppercaseChar)) {
          soulUrgeNumber += soulUrgeLetters[uppercaseChar];
        }

        while (
          soulUrgeNumber > 9 &&
          soulUrgeNumber !== 11 &&
          soulUrgeNumber !== 22 &&
          soulUrgeNumber !== 33
        ) {
          soulUrgeNumber =
            Math.floor(soulUrgeNumber / 10) + (soulUrgeNumber % 10);
        }
      }

      setSoulUrgeNumber(soulUrgeNumber);
    };
  }, []);

  const items: LifePathProps[] = lifePathData;
  const selectedItem = items.find((item) => item.number === lifePathNumber);

  return (
    <section className="numerology">
      <h1>Numerology Calculator</h1>
      <p className="numerology__paragraph">
        Numerology has a rich and diverse history that spans millennia. It has
        evolved from ancient mystical beliefs to become a contemporary practice
        that some people use for self-reflection and guidance.
      </p>
      <p className="numerology__paragraph">
        Here you can calculate your numerology in one-click. Insert birth date
        and full name to discover your Life Path Number, Expression Number and
        Soul Urge Number.
      </p>
      <div>
        <form className="numerology__form">
          <label htmlFor="birthday">Date of Birth:</label>
          <input
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            id="birthday"
            placeholder="YYYY/MM/DD"
            required
          />

          <label htmlFor="name">Full Name:</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            id="name"
            type="text"
            placeholder="Jane Doe"
            required
          />
        </form>
      </div>

      <Button onClick={calculateLifePathNumber}>Calculate</Button>

      <div>
        {showCarousel && (
          <ImageCarousel
            lifePathNumber={lifePathNumber}
            expressionNumber={expressionNumber}
            soulUrgeNumber={soulUrgeNumber}
          />
        )}
        {selectedItem && (
          <div className="info--numerology">
            <h3>{selectedItem.title}</h3>
            <p>{selectedItem.description}</p>
          </div>
        )}
      </div>
    </section>
  );
}
