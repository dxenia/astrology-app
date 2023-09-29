import { useState, useMemo } from 'react';

function NumerologyCalculator() {
  const [firstName, setFirstName] = useState('');
  const [birthDate, setBirthDate] = useState('');

  // Function to calculate numerology numbers
  const calculateNumerology = (firstName: string, birthDate: string) => {
    // Calculate the life path number
    const lifePath = firstName
      .split('')
      .map((char) => parseInt(char, 36) - 9)
      .reduce((acc, num) => acc + num, 0)
      .toString();

    // Convert the birth date to a single-digit number
    const birthDateNumber = birthDate
      .split('')
      .map(Number)
      .reduce((acc, digit) => acc + digit, 0)
      .toString();

    // Calculate the destiny number (sum of all digits in the birth date)
    const destiny = birthDateNumber;

    // Calculate the soul urge number (sum of all vowels in the first name)
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const soulUrge = firstName
      .toLowerCase()
      .split('')
      .filter((char) => vowels.includes(char))
      .map((char) => parseInt(char, 36) - 9)
      .reduce((acc, num) => acc + num, 0)
      .toString();

    return {
      lifePath,
      destiny,
      soulUrge,
    };
  };

  // Memoize the calculated numerology values
  const numerologyValues = useMemo(
    () => calculateNumerology(firstName, birthDate),
    [firstName, birthDate]
  );

  const { lifePath, destiny, soulUrge } = numerologyValues;

  return (
    <div>
      <h2>Numerology Calculator</h2>
      <div>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Birth Date (e.g., 01/01/2000):
          <input
            type="text"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </label>
      </div>
      <div>
        <h3>Results:</h3>
        <p>Life Path Number: {lifePath}</p>
        <p>Destiny Number: {destiny}</p>
        <p>Soul Urge Number: {soulUrge}</p>
      </div>
    </div>
  );
}

export default NumerologyCalculator;
