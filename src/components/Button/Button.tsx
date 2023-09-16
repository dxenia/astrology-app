import { Link } from 'react-router-dom';

import './Button.css';

interface ButtonProps {
  children: string;
  url: string;
  target: '_blank' | '_self';
  className?: string;
}

const LearnMoreButton = ({ children, url, target, className }: ButtonProps) => {
  return (
    <Link to={url} target={target}>
      <button className={className}>{children}</button>
    </Link>
  );
};

export default LearnMoreButton;
