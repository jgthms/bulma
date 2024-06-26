import { useContext } from "react";
import PropTypes from "prop-types";

import Slider from "./Slider";
import { CustomizerContext } from "../App";

import cn from "./VarItem.module.css";
import classNames from "classnames";

function VarItem({ id }) {
  const { cssvars, updateVar } = useContext(CustomizerContext);

  const cssvar = cssvars[id];

  if (!cssvar) {
    return;
  }

  const handleReset = (event) => {
    event.preventDefault();
    updateVar(cssvar.id, cssvar.start);
  };

  const handleInputChange = (event, cssvar) => {
    let value = event.target.value;
    updateVar(cssvar.id, value);
  };

  const isDisabled = cssvar.current == cssvar.start;
  const resetClass = classNames({
    "button is-small": true,
    "is-float-right": true,
    "ml-2": true,
    "is-danger is-outlined": !isDisabled,
  });
  const resetStyle = isDisabled ? { opacity: 0.1 } : {};

  let control;

  switch (cssvar.kind) {
    case "hue":
    case "saturation":
    case "lightness":
    case "delta":
      control = (
        <>
          <Slider id={cssvar.id} />

          <p className={cn.form}>
            <input
              type="text"
              className="input"
              value={cssvar.current}
              onChange={(e) => handleInputChange(e, cssvar)}
              size="3"
            />
            <span>{cssvar.unit}</span>
          </p>
        </>
      );
      break;
    default:
      control = (
        <input
          className="input"
          type="text"
          value={cssvar.current}
          onChange={(e) => handleInputChange(e, cssvar)}
        />
      );
      break;
  }

  return (
    <div className={cn.main}>
      <div className={cn.side}>
        <button
          className={resetClass}
          onClick={handleReset}
          disabled={isDisabled}
          style={resetStyle}
        >
          Reset
        </button>

        <div className={cn.name}>
          <code>{cssvar.id}</code>
        </div>

        <div className={cn.description}>{cssvar.description}</div>
      </div>

      <div className={cn.slider}>{control}</div>
    </div>
  );
}

VarItem.propTypes = {
  id: PropTypes.string,
};

export default VarItem;
