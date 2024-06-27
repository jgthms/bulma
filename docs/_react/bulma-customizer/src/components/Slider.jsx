import { useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import cn from "./Slider.module.css";
import { CustomizerContext } from "../App";

const RANGES = {
  hue: [0, 360, 1],
  saturation: [0, 100, 1],
  lightness: [0, 100, 1],
  gap: [0, 100, 1],
  delta: [0, 100, 1],
  any: [0, 100, 1],
};

const xToValue = (x, width, min, max) => {
  const decimal = x / width;
  const newValue = decimal * (max - min);
  return Math.round(newValue);
};

const valueToX = (value, width, min, max) => {
  const decimal = Number(value) / (max - min);
  const newValue = decimal * width;
  return Math.round(newValue);
};

function Slider({ id, color }) {
  const { cssvars, updateVar } = useContext(CustomizerContext);
  const { start, current, kind } = cssvars[id];
  const [min, max] = kind ? RANGES[kind] : RANGES.any;

  const sliderRef = useRef(null);
  const handleRef = useRef(null);

  const [isMoving, setMoving] = useState(false);
  const [x, setX] = useState(valueToX(start, 360, min, max));

  const handleMouseDown = (event) => {
    setMoving(true);
    const slider = sliderRef.current;
    const sliderRect = slider.getBoundingClientRect();
    const target = event.clientX - sliderRect.left;
    setX(Math.round(target));
  };

  const docMouseLeave = () => {
    setMoving(false);
  };

  const docMouseUp = () => {
    setMoving(false);
  };

  // useEffect(() => {
  //   const computedValue = `${current}${unit}`;

  //   if (current === start) {
  //     document.documentElement.style.removeProperty(`--bulma-${id}`);
  //   } else {
  //     document.documentElement.style.setProperty(
  //       `--bulma-${id}`,
  //       computedValue,
  //     );
  //   }
  // }, [current, id, start, unit]);

  useEffect(() => {
    if (!isMoving) {
      return;
    }
    const slider = sliderRef.current;
    const sliderRect = slider.getBoundingClientRect();
    const final = xToValue(x, sliderRect.width, min, max);
    updateVar(id, final);
  }, [id, isMoving, min, max, updateVar, x]);

  useEffect(() => {
    const newX = valueToX(current, 360, min, max);
    setX(Math.round(newX));
  }, [min, max, current]);

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

      setX(Math.round(target));
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

  const mainStyle = color
    ? {
        "--h": `var(--bulma-${color}-h)`,
        "--s": `var(--bulma-${color}-s)`,
        "--l": `var(--bulma-${color}-l)`,
      }
    : {};

  const handleStyle = {
    transform: `translateX(${x}px)`,
  };

  return (
    <div
      className={mainCN}
      ref={sliderRef}
      style={mainStyle}
      onMouseDown={handleMouseDown}
    >
      <div className={backgroundCN}>
        <span ref={handleRef} className={cn.handle} style={handleStyle} />
      </div>
    </div>
  );
}

Slider.propTypes = {
  id: PropTypes.string,
  color: PropTypes.string,
};

export default Slider;
