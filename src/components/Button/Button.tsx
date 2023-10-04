import './Button.css';

interface ButtonProps {
  children: string;
  url?: string;
  target?: '_blank' | '_self';
  className?: string;
}

interface OnClickProps extends ButtonProps {
  onClick: () => void;
}

const LearnMoreButton = ({ children, url, target, className }: ButtonProps) => {
  return (
    <a href={url} target={target}>
      <button className={`${className} button--shadow shadow`}>
        {children}
      </button>
    </a>
  );
};

export const OnClickButton = ({
  children,
  onClick,
  className,
}: OnClickProps) => {
  return (
    <button onClick={onClick} className={`${className} button--shadow shadow`}>
      {children}
    </button>
  );
};

export default LearnMoreButton;
