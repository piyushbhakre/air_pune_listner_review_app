export interface StarRatingProps {
  value: number;
  onChange: (rating: number) => void;
  maxStars?: number;
  error?: string;
}
