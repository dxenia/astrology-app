import { ButtonProps } from './Button.types';

import './Button.css';

const Button = ({
  children,
  url,
  target,
  className,
  onClick,
  type,
  as = 'button',
}: ButtonProps) => {
  if (as === 'link' && url) {
    return (
      <a
        href={url}
        target={target}
        className={`${className} button--shadow shadow`}
        onClick={onClick}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button
        type={type}
        className={`${className} button--shadow shadow`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
};

export default Button;
