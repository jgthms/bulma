import { createContext, useEffect, useState } from "react";
import classNames from "classnames";
import "../../../../css/bulma.css";

import { CSSVAR_KEYS, SUFFIX_TO_KIND } from "./constants";
import { unslug } from "./utils";

import Colors from "./pages/Colors";
import Scheme from "./pages/Scheme";
import Typography from "./pages/Typography";

const UNITS = ["deg", "rem", "em", "%"];
const PAGE_TO_COMPONENT = {
  colors: <Colors />,
  scheme: <Scheme />,
  typography: <Typography />,
};
const PAGE_IDS = ["colors", "scheme", "typography"];

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
    currentPage: "typography",
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
    const allKeyIds = allKeys.map((i) => i.id);

    allKeyIds.map((key) => {
      const original = rootStyle.getPropertyValue(`--bulma-${key}`);
      const suffix = Object.keys(SUFFIX_TO_KIND).find((kind) =>
        key.endsWith(kind),
      );
      const unit = UNITS.find((unit) => original.endsWith(unit)) || "";
      const value = unit !== "" ? original.split(unit)[0] : original;
      const description =
        allKeys.find((el) => el.id === key)?.description || "None";

      cssvars[key] = {
        id: key,
        kind: SUFFIX_TO_KIND[suffix] || "any",
        original,
        unit,
        current: value,
        start: value,
        description,
      };
    });

    setContext((context) => {
      return {
        ...context,
        cssvars,
      };
    });
  }, []);

  console.log("ZLOG context.cssvars", context.cssvars);

  return (
    <CustomizerContext.Provider value={context}>
      <section className="section">
        <div className="buttons">
          {PAGE_IDS.map((pageId) => {
            const buttonClass = classNames({
              button: true,
              "is-link": pageId === context.currentPage,
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
