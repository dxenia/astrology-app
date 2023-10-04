import './Button.css';

interface ButtonProps {
  children: string;
  url?: string;
  target?: '_blank' | '_self';
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, url, target, className, onClick }: ButtonProps) => {
  return (
    <a href={url} target={target} onClick={onClick}>
      <button className={`${className} button--shadow shadow`}>
        {children}
      </button>
    </a>
  );
};

export default Button;
