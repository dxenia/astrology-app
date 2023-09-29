'use client';
import { useState } from 'react';
import { expressionLetters, soulUrgeLetters } from '../../api/data';

type Props = {};

export default function Home(_props: Props): any {
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

  const calculateExpressionNumber = (name: string): void => {
    let expressionNumber = 0;
    const nameWithoutSpaces = name.replace(/\s/g, '');

    for (const char of nameWithoutSpaces) {
      const uppercaseChar = char.toUpperCase();

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

  const calculateSoulUrgeNumber = (name: string): void => {
    let soulUrgeNumber = 0;
    const nameWithoutSpaces = name.replace(/\s/g, '');

    for (const char of nameWithoutSpaces) {
      const uppercaseChar = char.toUpperCase();

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

  return (
    <section className="dark:bg-[#09090b] dark:text-white text-black bg-slate-400">
      <div className="container flex flex-col items-center justify-center min-h-screen ">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Numerology Calculator</CardTitle>
            <CardDescription>
              Calculate your numerology one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid items-center w-full gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Date of Birth:</Label>
                  <Input
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    id="name"
                    placeholder="YYYY/MM/DD"
                  />
                </div>
              </div>
              <div className="grid items-center w-full gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Full Name:</Label>
                  <Input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    id="name"
                    type="text"
                    placeholder="John Wick"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button onClick={calculateLifePathNumber}>Calculate</Button>
          </CardFooter>
        </Card>
        <Accordion
          type="single"
          collapsible
          className="min-w-[350px] max-w-[90%]"
        >
          {lifePathNumber !== 0 && (
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Your Life Path Number is: {lifePathNumber}
              </AccordionTrigger>
              {/* <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent> */}
            </AccordionItem>
          )}
          {expressionNumber !== 0 && (
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Your Expression Number is: {expressionNumber}
              </AccordionTrigger>
              {/* <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent> */}
            </AccordionItem>
          )}
          {soulUrgeNumber !== 0 && (
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Your Soul Urge Number is: {soulUrgeNumber}
              </AccordionTrigger>
              {/* <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent> */}
            </AccordionItem>
          )}
        </Accordion>
      </div>
    </section>
  );
}
