import "./DotRing.css";
import useMousePosition from "../hooks/useMousePosition";
import { useState, useEffect } from "react";

const DotRing = () => {
  const { x, y } = useMousePosition();
  const [progress, setProgress] = useState(0);

  const updateMouseProgress = () => {
    const windowHeight = window.innerHeight;

    const verticalProgress = (y / windowHeight) * 100;

    const clampedProgress = Math.min(Math.max(verticalProgress, 0), 100);

    setProgress(clampedProgress);
  };

  useEffect(() => {
    updateMouseProgress();
  }, [y]); 

  const cursorStyle = {
    transform: `translate(${x + 5}px, ${y - 100}px)`,
    "--progress": `${progress}%`,
  };

  return (
    <>
      <div className="ring" style={cursorStyle}></div>
      {/* <div
        className="counter"
        style={{ transform: `translate(${x + 70}px, ${y - 250}px)` }}
      >
        <div className="count">{Math.round(progress)}%</div>
      </div> */}
    </>
  );
};

export default DotRing;
