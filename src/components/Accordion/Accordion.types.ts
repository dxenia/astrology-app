export interface AccordionProps {
  title: string;
  content: string;
  isActive: boolean;
  onToggle: () => void;
}
