import { AccordionProps } from './Accordion.types';

import './Accordion.css';

const Accordion = ({ title, content, isActive, onToggle }: AccordionProps) => {
  const handleClick = () => {
    onToggle();
  };

  return (
    <div className="accordion__item">
      <div className="accordion__title" onClick={handleClick}>
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
