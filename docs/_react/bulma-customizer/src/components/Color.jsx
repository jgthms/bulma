import { useContext } from "react";
import PropTypes from "prop-types";

import Slider from "./Slider";

import cn from "./Color.module.css";
import { CustomizerContext } from "../App";
import classNames from "classnames";

export function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s;
  let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  let m = l - c / 2;
  let r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return `${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}

function hexToHsl(hex) {
  // Remove the hash at the start if it's there
  hex = hex.replace(/^#/, "");

  // Parse the hex values
  let r = parseInt(hex.slice(0, 2), 16);
  let g = parseInt(hex.slice(2, 4), 16);
  let b = parseInt(hex.slice(4, 6), 16);

  // Convert the RGB values to the range [0, 1]
  r /= 255;
  g /= 255;
  b /= 255;

  // Find the maximum and minimum values to get the lightness
  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // Achromatic
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h *= 60;
  }

  return {
    hue: Math.round(h),
    saturation: Math.round(s * 100),
    lightness: Math.round(l * 100),
  };
}

function Color({ color }) {
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
    updateVar(h.id, h.start);
    updateVar(s.id, s.start);
    updateVar(l.id, l.start);
  };

  const handleHexInput = (event) => {
    event.preventDefault();

    let value = window.prompt("Enter a Hexadecimal value (e.g. 00d1b2)");

    if (value.startsWith("#")) {
      value = value.replace(/^#/, "");
    }

    const hexPattern = /^([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/;

    if (!hexPattern.test(value) || value.length > 6) {
      window.prompt("That is not a valid Hexadecimal value. Please try again.");
      return;
    }

    if (value.length === 3) {
      value = value[0] + value[0] + value[1] + value[1] + value[2] + value[2];
    }

    const { hue, saturation, lightness } = hexToHsl(value);

    updateVar(h.id, hue);
    updateVar(s.id, saturation);
    updateVar(l.id, lightness);
  };

  const handleInputChange = (event, cssvar) => {
    let value = event.target.value;
    updateVar(cssvar.id, value);
  };

  if (!h || !s || !l) {
    return;
  }

  const isDisabled =
    Number(h.current) === Number(h.start) &&
    Number(s.current) === Number(s.start) &&
    Number(l.current) === Number(l.start);
  const resetClass = classNames({
    button: true,
    "is-danger is-outlined": !isDisabled,
  });
  const resetStyle = isDisabled ? { opacity: 0.1 } : {};

  return (
    <div className={cn.main} style={mainStyle}>
      <div className={cn.side}>
        <div className="buttons are-small is-float-right ml-2">
          <button className="button" onClick={handleHexInput}>
            Enter a Hex code
          </button>

          <button
            className={resetClass}
            style={resetStyle}
            onClick={handleReset}
            disabled={isDisabled}
          >
            Reset
          </button>
        </div>

        <div className={cn.name}>
          <div className={cn.swatch} />
          <p>{name}</p>
        </div>
      </div>

      <div className={cn.lines}>
        <div className={cn.line}>
          <p className={cn.label}>Hue</p>
          <div className={cn.slider}>
            <Slider id={hName} kind="hue" color={color} />
            <p className={cn.form}>
              <input
                type="text"
                className="input"
                value={Number(h.current)}
                onChange={(e) => handleInputChange(e, h)}
                size="3"
              />
              <span>{h.unit}</span>
            </p>
          </div>
        </div>

        <div className={cn.line}>
          <p className={cn.label}>Saturation</p>
          <div className={cn.slider}>
            <Slider id={sName} kind="saturation" color={color} />
            <p className={cn.form}>
              <input
                type="text"
                className="input"
                value={Number(s.current)}
                onChange={(e) => handleInputChange(e, s)}
                size="3"
              />
              <span>{s.unit}</span>
            </p>
          </div>
        </div>

        <div className={cn.line}>
          <p className={cn.label}>Lightness</p>
          <div className={cn.slider}>
            <Slider id={lName} kind="lightness" color={color} />
            <p className={cn.form}>
              <input
                type="text"
                className="input"
                value={Number(l.current)}
                onChange={(e) => handleInputChange(e, l)}
                size="3"
              />
              <span>{l.unit}</span>
            </p>
          </div>
        </div>
      </div>

      <div className={cn.example}>
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
