import React, { useState, useEffect } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { ABVCalculatorProps } from "./AbvCalculator.types";
import { OpacityRounded } from "@mui/icons-material";

export const ABVCalculator: React.FC<ABVCalculatorProps> = ({
  initialOriginalGravity = 1.05,
  initialFinalGravity = 1.01,
  originalGravity: propOriginalGravity,
  finalGravity: propFinalGravity,
  title = "ABV Calculator",
  onABVChange,
}) => {
  const [originalGravity, setOriginalGravity] = useState(
    propOriginalGravity ?? initialOriginalGravity
  );
  const [finalGravity, setFinalGravity] = useState(
    propFinalGravity ?? initialFinalGravity
  );
  const [abv, setAbv] = useState(0);

  useEffect(() => {
    const calculatedABV =
      ((76.08 * (originalGravity - finalGravity)) / (1.775 - originalGravity)) *
      (finalGravity / 0.794);
    setAbv(calculatedABV);
    if (onABVChange) {
      onABVChange(calculatedABV);
    }
  }, [originalGravity, finalGravity, onABVChange]);

  return (
    <>
      <h2 className="mb-4">{title}</h2>
      <div className="grid grid-cols-1 gap-y-5">
        <Box display="flex" alignItems="center" gap={2}>
          <OpacityRounded />
          <TextField
            label="Original Gravity"
            type="number"
            value={originalGravity}
            onChange={(e) => setOriginalGravity(parseFloat(e.target.value))}
          />
        </Box>
        <Box display="flex" alignItems="center" gap={2}>
          <OpacityRounded />
          <TextField
            label="Final Gravity"
            type="number"
            value={finalGravity}
            onChange={(e) => setFinalGravity(parseFloat(e.target.value))}
          />
        </Box>
        <Box display="flex" alignItems="center" gap={2}>
          <span tabIndex={0} className="font-semibold">
            ABV: {abv.toFixed(2)}%
          </span>
        </Box>
      </div>
    </>
  );
};
