import { useEffect, useState } from "react";
import "../../../../css/bulma.css";
import "./App.css";
import Slider from "./components/Slider";

// const COLORS = ["primary", "link", "info", "success", "warning", "danger"];

const KEYS = [
  "scheme-h",
  "primary-h",
  "primary-s",
  "primary-l",
  "skeleton-lines-gap",
];
const UNITS = ["deg", "rem", "em", "%"];
const SUFFIX_TO_KIND = {
  "-h": "hue",
  "-s": "saturation",
  "-l": "lightness",
  "-gap": "gap",
};

function App() {
  const [vars, setVars] = useState([]);

  useEffect(() => {
    const rootStyle = window.getComputedStyle(document.documentElement);

    const cssvars = KEYS.map((key) => {
      const original = rootStyle.getPropertyValue(`--bulma-${key}`);
      const suffix = Object.keys(SUFFIX_TO_KIND).find((kind) =>
        key.endsWith(kind),
      );
      const unit = UNITS.find((unit) => original.endsWith(unit)) || "";
      const value = unit !== "" ? original.split(unit)[0] : original;

      return {
        id: key,
        kind: SUFFIX_TO_KIND[suffix] || "any",
        original,
        unit,
        start: Number(value),
      };
    });

    setVars(cssvars);
  }, []);

  console.log("ZLOG vars", vars);

  return (
    <section className="section">
      <div className="card">
        <div className="card-content">
          {vars.map((v) => {
            const { id, kind, original, unit, start } = v;

            return (
              <div key={id} className="block">
                <code>{id}</code>
                <Slider
                  id={id}
                  kind={kind}
                  original={original}
                  start={start}
                  unit={unit}
                />
              </div>
            );
          })}

          <div className="buttons">
            <button className="button">Button</button>

            <button className="button is-primary">Primary</button>
            <button className="button is-link">Link</button>

            <button className="button is-info">Info</button>
            <button className="button is-success">Success</button>
            <button className="button is-warning">Warning</button>
            <button className="button is-danger">Danger</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
