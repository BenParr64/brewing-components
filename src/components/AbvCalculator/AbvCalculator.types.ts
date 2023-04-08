export interface ABVCalculatorProps {
  initialOriginalGravity?: number;
  initialFinalGravity?: number;
  onABVChange?: (abv: number) => void;
}
