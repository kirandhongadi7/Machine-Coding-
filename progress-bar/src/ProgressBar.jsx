import { useEffect, useState } from "react";

const ProgressBar = ({ value = 0 }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));
  }, [value]);
  return (
    <div className=" progress">
      <div
        className="inner "
        style={{
          width: `${percent}%`,
        }}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent.toFixed()}
      >
        <span>{percent.toFixed()}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
