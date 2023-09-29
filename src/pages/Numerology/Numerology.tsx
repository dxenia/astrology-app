import { useState, useMemo } from 'react';
import { expressionLetters, soulUrgeLetters } from '../../api/data';

export default function Numerology() {
  const [dateOfBirth, setDateOfBirth] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [lifePathNumber, setLifePathNumber] = useState<number>(0);
  const [expressionNumber, setExpressionNumber] = useState<number>(0);
  const [soulUrgeNumber, setSoulUrgeNumber] = useState<number>(0);

  const calculateLifePathNumber = (): void => {
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

  const calculateSoulUrgeNumber = useMemo(() => {
    return (name: string): void => {
      let soulUrgeNumber = 0;
      const nameWithoutSpaces = name.replace(/\s/g, '');

      for (const char of nameWithoutSpaces) {
        const uppercaseChar = char.toUpperCase();
        console.log(uppercaseChar);

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
      console.log(soulUrgeNumber);
    };
  }, []);

  return (
    <section className="dark:bg-[#09090b] dark:text-white text-black bg-slate-400">
      <div className="container flex flex-col items-center justify-center min-h-screen ">
        <div>
          <h2>Numerology Calculator</h2>
          <span>Calculate your numerology one-click.</span>

          <div>
            <form className="space-y-4">
              <div className="grid items-center w-full gap-4">
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="name">Date of Birth:</label>
                  <input
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    id="name"
                    placeholder="YYYY/MM/DD"
                  />
                </div>
              </div>
              <div className="grid items-center w-full gap-4">
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="name">Full Name:</label>
                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    id="name"
                    type="text"
                    placeholder="John Wick"
                  />
                </div>
              </div>
            </form>
          </div>

          <button onClick={calculateLifePathNumber}>Calculate</button>
        </div>
        <div>
          {lifePathNumber !== 0 && (
            <div>Your Life Path Number is: {lifePathNumber}</div>
          )}
          {expressionNumber !== 0 && (
            <div>Your Expression Number is: {expressionNumber}</div>
          )}
          {soulUrgeNumber !== 0 && (
            <div>Your Soul Urge Number is: {soulUrgeNumber}</div>
          )}
        </div>
      </div>
    </section>
  );
}
