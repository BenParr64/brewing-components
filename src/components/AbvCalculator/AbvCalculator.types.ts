export interface ABVCalculatorProps {
  initialOriginalGravity?: number;
  initialFinalGravity?: number;
  originalGravity?: number;
  finalGravity?: number;
  title?: string;
  onABVChange?: (abv: number) => void;
}
