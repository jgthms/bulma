import Color from "../components/Color";

const COLORS = ["primary", "link", "info", "success", "warning", "danger"];

import cn from "root/App.module.css";

function Colors() {
  return (
    <div className={cn.colors}>
      {COLORS.map((color) => {
        return <Color key={color} color={color} />;
      })}
    </div>
  );
}

export default Colors;
