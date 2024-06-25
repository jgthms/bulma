import { useContext } from "react";
import PropTypes from "prop-types";

import Slider from "./Slider";

import cn from "./Color.module.css";
import { CustomizerContext } from "../App";

function Color({ color }) {
  // const [hue, setHue] = useState(h.start);
  // const [saturation, setSaturation] = useState(s.start);
  // const [lightness, setLightness] = useState(l.start);

  const { cssvars, updateVar } = useContext(CustomizerContext);
  const hName = `${color}-h`;
  const sName = `${color}-s`;
  const lName = `${color}-l`;
  const h = cssvars[hName];
  const s = cssvars[sName];
  const l = cssvars[lName];

  const mainStyle = {
    "--h": `var(--bulma-${hName})`,
    "--s": `var(--bulma-${sName})`,
    "--l": `var(--bulma-${lName})`,
  };
  const name = color.charAt(0).toUpperCase() + color.slice(1);

  const handleReset = (event) => {
    event.preventDefault();
    updateVar(h.id, h.start, h.unit);
    updateVar(s.id, s.start, s.unit);
    updateVar(l.id, l.start, l.unit);
    // document.documentElement.style.removeProperty(`--bulma-${hName}`);
    // document.documentElement.style.removeProperty(`--bulma-${sName}`);
    // document.documentElement.style.removeProperty(`--bulma-${lName}`);
  };

  if (!h) {
    return;
  }

  const isDisabled =
    h.current === h.start && s.current === s.start && l.current === l.start;

  return (
    <div className={cn.main} style={mainStyle}>
      <div className={cn.side}>
        <div className={cn.name}>
          <div className={cn.swatch} />
          <p>{name}</p>
        </div>

        <button
          className="button is-small"
          onClick={handleReset}
          disabled={isDisabled}
        >
          Reset
        </button>
      </div>

      <div className={cn.lines}>
        <div className={cn.line}>
          <p>Hue</p>
          <Slider id={hName} kind="hue" color={color} />
          <p>
            <code>
              {h.current}
              {h.unit}
            </code>
          </p>
        </div>

        <div className={cn.line}>
          <p>Saturation</p>
          <Slider id={sName} kind="saturation" color={color} />
          <p>
            <code>
              {s.current}
              {s.unit}
            </code>
          </p>
        </div>

        <div className={cn.line}>
          <p>Lightness</p>
          <Slider id={lName} kind="lightness" color={color} />
          <p>
            <code>
              {l.current}
              {l.unit}
            </code>
          </p>
        </div>
      </div>

      <div className={cn.side}>
        <button className={`button is-${color}`}>{name}</button>
      </div>
    </div>
  );
}

Color.propTypes = {
  color: PropTypes.string,
  h: PropTypes.string,
  s: PropTypes.string,
  l: PropTypes.string,
};

export default Color;
