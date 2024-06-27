import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import cn from "./Slider.module.css";

const RANGES = {
  deg: [0, 360, 1],
  "%": [0, 100, 1],
};

function Picker({ id, kind, start, unit }) {
  const [value, setValue] = useState(start);

  let min = 0;
  let max = 360;
  let step = 1;

  if (unit in RANGES) {
    [min, max, step] = RANGES[unit];
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleReset = () => {
    setValue(start);
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

  const mainCN = classNames({
    [cn.main]: true,
    [cn[kind]]: kind,
  });

  return (
    <div className={mainCN}>
      <code>{id}</code>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
      />
      <code>
        {value}
        {unit}
      </code>
      <button className="button is-small" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

Picker.propTypes = {
  id: PropTypes.string,
  kind: PropTypes.string,
  original: PropTypes.string,
  start: PropTypes.number,
  unit: PropTypes.string,
};

export default Picker;
