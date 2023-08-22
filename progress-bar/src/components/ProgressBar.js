import React, { useState, useEffect } from "react";
import "../App.css";
import { MAX , MIN} from "./constants";

const ProgressBar = ({ value, onComplete = () => {} }) => {
  const [percentage, setPercentage] = useState(value);

  useEffect(() => {
    setPercentage(Math.min(MAX, Math.max(0, value)));
    if (value >= MAX) {
      onComplete();
    }
  }, [value]);
  return (
    <div className="progress">
      <span style={{ color: percentage > 49 ? "white" : "black" }}>
        {percentage?.toFixed()}%
      </span>
      <div
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        aria-valuenow={percentage}
        role="progressbar"
        style={{ width: `${percentage?.toFixed()}%` }}
        onCompl
      />
    </div>
  );
};

export default ProgressBar;
