import React from "react";
import getColor from "../../../hooks/getColor";
import "./_progress_bar.scss"

interface ProgressBarProps {
  usage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ usage }) => {
  return (
    <div className="scale">
      <div
        className="scale_bar"
        style={{
          width: `${usage}%`,
          height: "100%",
          background: getColor(usage)
        }}
      />
      <div className="text-scale">{usage}%</div>
    </div>
  );
};

export default ProgressBar;
