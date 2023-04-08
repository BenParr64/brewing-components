export interface ABVCalculatorProps {
  initialOriginalGravity?: number;
  initialFinalGravity?: number;
  originalGravity?: number;
  finalGravity?: number;
  onABVChange?: (abv: number) => void;
}
