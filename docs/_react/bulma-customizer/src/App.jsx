import { createContext, useEffect, useState } from "react";
import classNames from "classnames";

import Colors from "./pages/Colors";

import { CSSVAR_KEYS, SUFFIX_TO_KIND } from "./constants";
import { unslug } from "./utils";

import "../../../../css/bulma.css";
import Scheme from "./pages/Scheme";

const UNITS = ["deg", "rem", "em", "%"];
const PAGE_TO_COMPONENT = {
  colors: <Colors />,
  scheme: <Scheme />,
};
const PAGE_IDS = ["scheme", "colors"];

export const CustomizerContext = createContext({
  cssvars: {},
  currentPage: "",
  getVar: () => {},
  changeTab: () => {},
  updateVar: () => {},
});

function App() {
  const initialContext = {
    cssvars: {},
    currentPage: "colors",
    getVar: (id) => {
      return context.cssvars[id];
    },
    changeTab: (pageId) => {
      setContext((context) => {
        return {
          ...context,
          currentPage: pageId,
        };
      });
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

  const handleTabChange = (event, pageId) => {
    event.preventDefault();
    context.changeTab(pageId);
  };

  useEffect(() => {
    const rootStyle = window.getComputedStyle(document.documentElement);

    const cssvars = {};
    const allKeys = PAGE_IDS.map((pageId) => CSSVAR_KEYS[pageId]).flat();

    allKeys.map((key) => {
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

  return (
    <CustomizerContext.Provider value={context}>
      <section className="section">
        <div className="buttons">
          {PAGE_IDS.map((pageId) => {
            const buttonClass = classNames({
              button: true,
            });

            return (
              <button
                className={buttonClass}
                key={pageId}
                onClick={(e) => handleTabChange(e, pageId)}
              >
                {unslug(pageId)}
              </button>
            );
          })}
        </div>

        {PAGE_TO_COMPONENT[context.currentPage]}
      </section>
    </CustomizerContext.Provider>
  );
}

export default App;
