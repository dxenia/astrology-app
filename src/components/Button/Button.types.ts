export interface ButtonProps {
  children: string;
  url?: string;
  target?: '_blank' | '_self';
  className?: string;
  onClick?: () => void;
  as?: 'button' | 'link';
  type?: 'button' | 'submit' | 'reset';
}
