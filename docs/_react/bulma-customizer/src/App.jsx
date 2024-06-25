import { createContext, useEffect, useState } from "react";

import "../../../../css/bulma.css";
import cn from "./App.module.css";

import Color from "./components/Color";

const COLORS = ["primary", "link", "info", "success", "warning", "danger"];

const KEYS = [
  "scheme-h",
  "primary-h",
  "primary-s",
  "primary-l",
  "link-h",
  "link-s",
  "link-l",
  "info-h",
  "info-s",
  "info-l",
  "success-h",
  "success-s",
  "success-l",
  "warning-h",
  "warning-s",
  "warning-l",
  "danger-h",
  "danger-s",
  "danger-l",
  "skeleton-lines-gap",
];
const UNITS = ["deg", "rem", "em", "%"];
const SUFFIX_TO_KIND = {
  "-h": "hue",
  "-s": "saturation",
  "-l": "lightness",
  "-gap": "gap",
};

export const CustomizerContext = createContext({
  cssvars: {},
  getVar: () => {},
  updateVar: () => {},
});

function App() {
  const initialContext = {
    cssvars: {},
    getVar: (id) => {
      return context.cssvars[id];
    },
    updateVar: (id, newValue) => {
      setContext((context) => {
        const { start, unit } = context.cssvars[id];
        const computedValue = `${newValue}${unit}`;

        if (start === newValue) {
          document.documentElement.style.removeProperty(`--bulma-${id}`);
        } else {
          document.documentElement.style.setProperty(
            `--bulma-${id}`,
            computedValue,
          );
        }

        return {
          ...context,
          cssvars: {
            ...context.cssvars,
            [id]: {
              ...context.cssvars[id],
              current: newValue,
            },
          },
        };
      });
    },
  };
  const [context, setContext] = useState(initialContext);

  useEffect(() => {
    const rootStyle = window.getComputedStyle(document.documentElement);

    const cssvars = {};

    KEYS.map((key) => {
      const original = rootStyle.getPropertyValue(`--bulma-${key}`);
      const suffix = Object.keys(SUFFIX_TO_KIND).find((kind) =>
        key.endsWith(kind),
      );
      const unit = UNITS.find((unit) => original.endsWith(unit)) || "";
      const value = unit !== "" ? original.split(unit)[0] : original;

      cssvars[key] = {
        id: key,
        kind: SUFFIX_TO_KIND[suffix] || "any",
        original,
        unit,
        current: Number(value),
        start: Number(value),
      };
    });

    setContext((context) => {
      return {
        ...context,
        cssvars,
      };
    });
  }, []);

  // useEffect(() => {
  //   Object.values(context.cssvars).forEach((cssvar) => {
  //     const { id, current, unit } = cssvar;
  //     const computedValue = `${current}${unit}`;

  //     document.documentElement.style.setProperty(
  //       `--bulma-${id}`,
  //       computedValue,
  //     );
  //   });
  // }, [context.cssvars]);

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
  // }, [id, start, unit, value]);

  return (
    <CustomizerContext.Provider value={context}>
      <section className="section">
        <div className="card">
          <div className="card-content">
            <div className={cn.colors}>
              {COLORS.map((color) => {
                return <Color key={color} color={color} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </CustomizerContext.Provider>
  );
}

export default App;
