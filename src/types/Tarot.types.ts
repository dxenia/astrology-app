export interface TarotProps {
  id: number;
  image: string;
  link: string;
  name: string;
  reversed: string[];
  upright: string[];
  type: 'Major' | 'Minor';
}

export interface TarotCardProps {
  card: TarotProps;
}
