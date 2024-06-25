import { useContext } from "react";
import PropTypes from "prop-types";

import Slider from "./Slider";
import { CustomizerContext } from "../App";

import cn from "./VarItem.module.css";

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

  const isDisabled = cssvar.current === cssvar.start;

  return (
    <div className={cn.main}>
      <div className={cn.side}>
        <div className={cn.name}>
          <code>{cssvar.id}</code>
        </div>

        <div className="buttons are-small">
          <button
            className="button"
            onClick={handleReset}
            disabled={isDisabled}
          >
            Reset
          </button>
        </div>
      </div>

      <div className={cn.slider}>
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
      </div>

      <div className={cn.description}>{cssvar.description}</div>
    </div>
  );
}

VarItem.propTypes = {
  id: PropTypes.string,
};

export default VarItem;
