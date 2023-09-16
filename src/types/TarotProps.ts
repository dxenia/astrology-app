export interface TarotProps {
  id: number;
  image: string;
  link: string;
  name: string;
  reversed: string[];
  type: 'Major' | 'Minor';
  upright: string[];
}

export interface ApiResponse {
  id: number;
  card: TarotProps;
}
