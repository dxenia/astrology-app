import { useState } from 'react';
import { AccordionProps } from '../../types/AccordionProps';

const Accordion = ({ title, content }: AccordionProps) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="accordion__item">
      <div className="accordion__title" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      <p className={`accordion__content ${isActive ? 'dropped' : ''}`}>
        {content}
      </p>
    </div>
  );
};

export default Accordion;
