import './Heading.css';

interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'children'> {
  element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children?: string;
}

const Heading = ({ className, element, children, ...rest }: HeadingProps) => {
  const Element = element;

  return (
    <Element {...rest} className={className}>
      {children}
    </Element>
  );
};

export default Heading;
