export interface ZodiacProps {
  id: number;
  elementId?: number;
  modalityId?: number;
  rulerId?: number;
  name: string;
  dates: string;
  positiveTraits?: string[];
  negativeTraits?: string[];
  image: string;
}

export interface ZodiacResponse {
  data: ZodiacProps[];
}

export interface ZodiacSignResponse {
  data: ZodiacProps;
}
