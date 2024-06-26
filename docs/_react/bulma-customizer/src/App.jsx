import { createContext, useEffect, useRef, useState } from "react";
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
import Control from "./pages/form/Control";
import Input from "./pages/form/Input";
import File from "./pages/form/File";
import Columns from "./pages/grid/Columns";
import Grid from "./pages/grid/Grid";
import Footer from "./pages/layout/Footer";
import Hero from "./pages/layout/Hero";
import Media from "./pages/layout/Media";
import Section from "./pages/layout/Section";

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
  // Elements
  box: <Box />,
  content: <Content />,
  delete: <Delete />,
  icon: <Icon />,
  notification: <Notification />,
  progress: <Progress />,
  table: <Table />,
  tag: <Tag />,
  title: <Title />,
  // Form
  control: <Control />,
  input: <Input />,
  file: <File />,
  // Grid
  columns: <Columns />,
  grid: <Grid />,
  // Layout
  footer: <Footer />,
  hero: <Hero />,
  media: <Media />,
  section: <Section />,
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
  "control",
  "input",
  "file",
  "columns",
  "grid",
  "footer",
  "hero",
  "media",
  "section",
];

export const CustomizerContext = createContext({
  cssvars: {},
  currentPage: "",
  getVar: () => {},
  changeTab: () => {},
  updateVar: () => {},
});

function App() {
  const styleRef = useRef();
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
        // const { start, unit, scope } = context.cssvars[id];
        // const computedValue = `${newValue}${unit}`;
        // const el = document.querySelector(`#scope ${scope}`);

        // if (start === newValue) {
        //   el.style.removeProperty(`--bulma-${id}`);
        // } else {
        //   el.style.setProperty(`--bulma-${id}`, computedValue);
        // }

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
      file: window.getComputedStyle(document.querySelector(".file")),
      input: window.getComputedStyle(document.querySelector(".input")),
      columns: window.getComputedStyle(document.querySelector(".columns")),
      grid: window.getComputedStyle(document.querySelector(".grid")),
      footer: window.getComputedStyle(document.querySelector(".footer")),
      hero: window.getComputedStyle(document.querySelector(".hero")),
      media: window.getComputedStyle(document.querySelector(".media")),
      section: window.getComputedStyle(document.querySelector(".section")),
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
      } else if (key.startsWith("file")) {
        scope = ".file";
        original = styles.file.getPropertyValue(`--bulma-${key}`);
      } else if (key.startsWith("input")) {
        scope = ".input";
        original = styles.input.getPropertyValue(`--bulma-${key}`);
      } else if (key.startsWith("columns")) {
        scope = ".columns";
        original = styles.columns.getPropertyValue(`--bulma-${key}`);
      } else if (key.startsWith("grid")) {
        scope = ".grid";
        original = styles.grid.getPropertyValue(`--bulma-${key}`);
      } else if (key.startsWith("footer")) {
        scope = ".footer";
        original = styles.footer.getPropertyValue(`--bulma-${key}`);
      } else if (key.startsWith("hero")) {
        scope = ".hero";
        original = styles.hero.getPropertyValue(`--bulma-${key}`);
      } else if (key.startsWith("media")) {
        scope = ".media";
        original = styles.media.getPropertyValue(`--bulma-${key}`);
      } else if (key.startsWith("section")) {
        scope = ".section";
        original = styles.section.getPropertyValue(`--bulma-${key}`);
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

  useEffect(() => {
    const rules = {};

    Object.values(context.cssvars).forEach((cssvar) => {
      const { id, current, start, scope, unit } = cssvar;

      if (current == start) {
        return;
      }

      const computedValue = `${current}${unit}`;
      const declaration = `--bulma-${id}: ${computedValue};`;

      if (scope in rules) {
        rules[scope].push(declaration);
      } else {
        rules[scope] = [declaration];
      }
    });

    let content = "";

    for (const [key, arr] of Object.entries(rules)) {
      content += `${key} {`;
      arr.forEach((item) => (content += item));
      content += `}`;
    }

    if (styleRef) {
      styleRef.current.innerHTML = content;
    }
  }, [context.cssvars]);

  return (
    <CustomizerContext.Provider value={context}>
      <style ref={styleRef} />
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
