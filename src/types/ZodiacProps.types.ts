export interface ZodiacProps {
  id: number;
  elementId: number;
  modalityId: number;
  rulerId: number;
  name: string;
  dates: string;
  positiveTraits: string[];
  negativeTraits: string[];
  image: string;
  element: { image: string; keywords: string[]; name: string };
  ruler: {
    image: string;
    keywords: string[];
    name: string;
    transition: string;
    type: string;
  };
  modality: { image: string; keywords: string[]; name: string };
}

export interface ZodiacCardProps {
  sign: ZodiacProps;
}
