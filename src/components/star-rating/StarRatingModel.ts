export interface StarRatingProps {
  label?: string;
  subtitle?: string;
  value: number;
  onChange: (rating: number) => void;
  maxStars?: number;
  error?: string;
}
