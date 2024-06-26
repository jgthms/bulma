import { createContext, useEffect, useState } from "react";
import classNames from "classnames";
import "../../../../css/bulma.css";

import { CSSVAR_KEYS } from "./constants";
import { unslug } from "./utils";

import Colors from "./pages/Colors";
import Scheme from "./pages/Scheme";
import Typography from "./pages/Typography";
import Other from "./pages/Other";
import Generic from "./pages/Generic";
import Skeleton from "./pages/Skeleton";

import Box from "./pages/elements/Box";
import Content from "./pages/elements/Content";
import Delete from "./pages/elements/Delete";
import Icon from "./pages/elements/Icon";
import Notification from "./pages/elements/Notification";
import Progress from "./pages/elements/Progress";
import Table from "./pages/elements/Table";
import Tag from "./pages/elements/Tag";
import Title from "./pages/elements/Title";

const SUFFIX_TO_KIND = {
  "-h": "hue",
  "-s": "saturation",
  "-l": "lightness",
  "-delta": "delta",
  "-color": "color",
};
const UNITS = ["deg", "%"];
const PAGE_TO_COMPONENT = {
  colors: <Colors />,
  scheme: <Scheme />,
  typography: <Typography />,
  other: <Other />,
  generic: <Generic />,
  skeleton: <Skeleton />,
  box: <Box />,
  content: <Content />,
  delete: <Delete />,
  icon: <Icon />,
  notification: <Notification />,
  progress: <Progress />,
  table: <Table />,
  tag: <Tag />,
  title: <Title />,
};
const PAGE_IDS = [
  "colors",
  "scheme",
  "typography",
  "other",
  "generic",
  "skeleton",
  "box",
  "content",
  "delete",
  "icon",
  "notification",
  "progress",
  "table",
  "tag",
  "title",
];

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
    currentPage: "delete",
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
        const { start, unit, scope } = context.cssvars[id];
        const computedValue = `${newValue}${unit}`;
        const el = document.querySelector(scope);

        if (start === newValue) {
          el.style.removeProperty(`--bulma-${id}`);
        } else {
          el.style.setProperty(`--bulma-${id}`, computedValue);
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
    const styles = {
      root: window.getComputedStyle(document.documentElement),
      box: window.getComputedStyle(document.querySelector(".box")),
      content: window.getComputedStyle(document.querySelector(".content")),
      delete: window.getComputedStyle(document.querySelector(".delete")),
      icon: window.getComputedStyle(document.querySelector(".icon")),
      notification: window.getComputedStyle(
        document.querySelector(".notification"),
      ),
      progress: window.getComputedStyle(document.querySelector(".progress")),
      table: window.getComputedStyle(document.querySelector(".table")),
      tag: window.getComputedStyle(document.querySelector(".tag")),
      title: window.getComputedStyle(document.querySelector(".title")),
    };

    const cssvars = {};
    const allKeys = PAGE_IDS.map((pageId) => CSSVAR_KEYS[pageId]).flat();
    const allKeyIds = allKeys.map((i) => i.id);

    allKeyIds.map((key) => {
      let original;
      let scope = ":root";

      if (key.startsWith("box")) {
        scope = ".box";
        original = styles.box.getPropertyValue(`--bulma-${key}`);
      } else if (key.startsWith("content")) {
        scope = ".content";
        original = styles.content.getPropertyValue(`--bulma-${key}`);
      } else if (key.startsWith("delete")) {
        scope = ".delete";
        original = styles.delete.getPropertyValue(`--bulma-${key}`);
      } else if (key.startsWith("icon")) {
        scope = ".icon";
        original = styles.icon.getPropertyValue(`--bulma-${key}`);
      } else if (key.startsWith("notification")) {
        scope = ".notification";
        original = styles.notification.getPropertyValue(`--bulma-${key}`);
      } else if (key.startsWith("progress")) {
        scope = ".progress";
        original = styles.progress.getPropertyValue(`--bulma-${key}`);
      } else if (key.startsWith("table")) {
        scope = ".table";
        original = styles.table.getPropertyValue(`--bulma-${key}`);
      } else if (key.startsWith("tag")) {
        scope = ".tag";
        original = styles.tag.getPropertyValue(`--bulma-${key}`);
      } else if (key.startsWith("title")) {
        scope = ".title";
        original = styles.title.getPropertyValue(`--bulma-${key}`);
      } else {
        original = styles.root.getPropertyValue(`--bulma-${key}`);
      }

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
        scope,
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
