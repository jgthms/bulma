import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import cn from "./Slider.module.css";

const RANGES = {
  hue: [0, 360, 1],
  saturation: [0, 100, 1],
  lightness: [0, 100, 1],
  gap: [0, 100, 1],
  any: [0, 100, 1],
};

function Slider({ id, kind, start, unit }) {
  const [value, setValue] = useState(start);
  const [isMoving, setMoving] = useState(false);
  const [x, setX] = useState(0);
  const sliderRef = useRef(null);
  const handleRef = useRef(null);

  const [min, max, step] = RANGES[kind];

  const handleMouseDown = (event) => {
    setMoving(true);
    const slider = sliderRef.current;
    const sliderRect = slider.getBoundingClientRect();
    const target = event.clientX - sliderRect.left;
    setX(target);
  };

  const docMouseLeave = () => {
    setMoving(false);
  };

  const docMouseUp = () => {
    setMoving(false);
  };

  useEffect(() => {
    const computedValue = `${value}${unit}`;

    if (value === start) {
      document.documentElement.style.removeProperty(`--bulma-${id}`);
    } else {
      document.documentElement.style.setProperty(
        `--bulma-${id}`,
        computedValue,
      );
    }
  }, [id, start, unit, value]);

  useEffect(() => {
    const docMouseMove = (event) => {
      if (!isMoving || !sliderRef.current || !handleRef.current) {
        return;
      }

      const slider = sliderRef.current;
      const sliderRect = slider.getBoundingClientRect();
      let target = event.clientX - sliderRect.left;

      if (target < 0) {
        target = 0;
      } else if (target > sliderRect.width) {
        target = sliderRect.width;
      }

      setX(target);
    };

    window.addEventListener("mousemove", docMouseMove);

    return () => {
      window.removeEventListener("mousemove", docMouseMove);
    };
  }, [isMoving, min, max, x]);

  useEffect(() => {
    window.addEventListener("mouseleave", docMouseLeave);

    return () => {
      window.removeEventListener("mouseleave", docMouseLeave);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("mouseup", docMouseUp);

    return () => {
      window.removeEventListener("mouseup", docMouseUp);
    };
  }, []);

  const mainCN = classNames({
    [cn.main]: true,
    [cn.moving]: isMoving,
  });

  const backgroundCN = classNames({
    [cn.background]: true,
    [cn[kind]]: true,
  });

  const handleStyle = {
    transform: `translateX(${x}px)`,
  };

  return (
    <div className={mainCN} ref={sliderRef} onMouseDown={handleMouseDown}>
      <div className={backgroundCN}>
        <span ref={handleRef} className={cn.handle} style={handleStyle} />
      </div>
    </div>
  );
}

Slider.propTypes = {
  id: PropTypes.string,
  kind: PropTypes.string,
  original: PropTypes.string,
  start: PropTypes.number,
  unit: PropTypes.string,
};

export default Slider;
