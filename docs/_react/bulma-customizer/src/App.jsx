import { createContext, useEffect, useRef, useState } from "react";
import classNames from "classnames";
// import "../../../../css/bulma.css";
import "./App.css";
import cn from "./App.module.css";

import { CSSVAR_KEYS } from "./constants";
import { unslug } from "./utils";

import Colors from "./pages/Colors";
import Scheme from "./pages/Scheme";
import Typography from "./pages/Typography";
import Other from "./pages/Other";
import Generic from "./pages/Generic";
import Skeleton from "./pages/Skeleton";

import Breadcrumb from "./pages/components/Breadcrumb";
import Card from "./pages/components/Card";
import Dropdown from "./pages/components/Dropdown";
import Menu from "./pages/components/Menu";
import Message from "./pages/components/Message";
import Modal from "./pages/components/Modal";
import Navbar from "./pages/components/Navbar";
import Pagination from "./pages/components/Pagination";
import Panel from "./pages/components/Panel";
import Tabs from "./pages/components/Tabs";

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
import Export from "./components/Export";

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
  // Components
  breadcrumb: <Breadcrumb />,
  card: <Card />,
  dropdown: <Dropdown />,
  menu: <Menu />,
  message: <Message />,
  modal: <Modal />,
  navbar: <Navbar />,
  pagination: <Pagination />,
  panel: <Panel />,
  tabs: <Tabs />,
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
  // Export
  export: <Export />,
};
const TAB_IDS = [
  "Global Variables",
  "Components",
  "Elements",
  "Form",
  "Grid",
  "Layout",
  "Export",
];
const PAGE_IDS = {
  "Global Variables": [
    "colors",
    "scheme",
    "typography",
    "other",
    "generic",
    "skeleton",
  ],
  Components: [
    "breadcrumb",
    "card",
    "dropdown",
    "menu",
    "message",
    "modal",
    "navbar",
    "pagination",
    "panel",
    "tabs",
  ],
  Elements: [
    "box",
    "content",
    "delete",
    "icon",
    "notification",
    "progress",
    "table",
    "tag",
    "title",
  ],
  Form: ["control", "input", "file"],
  Grid: ["columns", "grid"],
  Layout: ["footer", "hero", "media", "section"],
  Export: ["export"],
};
const LOCAL_STORAGE_KEY = "bulma-customizer-vars";

export const CustomizerContext = createContext({
  isOpen: false,
  showExport: false,
  cssvars: {},
  saved: {},
  currentTab: "",
  currentPage: "",
  getVar: () => {},
  changeTab: () => {},
  changePage: () => {},
  updateVar: () => {},
  hideExport: () => {},
});

function App() {
  const styleRef = useRef();
  const initialContext = {
    isOpen: false,
    showExport: false,
    cssvars: {},
    saved: {},
    currentTab: "Global Variables",
    currentPage: "colors",
    getVar: (id) => {
      return context.cssvars[id];
    },
    changeTab: (tabId) => {
      setContext((context) => {
        return {
          ...context,
          currentTab: tabId,
        };
      });
    },
    changePage: (pageId) => {
      setContext((context) => {
        return {
          ...context,
          currentPage: pageId,
        };
      });
    },
    updateVar: (id, newValue) => {
      setContext((context) => {
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
    resetVars: () => {
      setContext((context) => {
        const cssvars = {};

        for (const [key, value] of Object.entries(context.cssvars)) {
          const item = { ...value, current: value.start };
          cssvars[key] = item;
        }

        return {
          ...context,
          cssvars,
        };
      });
    },
    hideExport: () => {
      setContext((context) => {
        return {
          ...context,
          showExport: false,
        };
      });
    },
  };
  const [context, setContext] = useState(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (saved) {
      const initialValue = JSON.parse(saved);
      initialContext.cssvars = initialValue;
      initialContext.saved = initialValue;
    }

    return initialContext;
  });

  const handleTabChange = (event) => {
    event.preventDefault();
    const tabId = event.target.value;
    context.changeTab(tabId);
    context.changePage(PAGE_IDS[tabId][0]);
  };

  const handlePageChange = (event, pageId) => {
    event.preventDefault();
    context.changePage(pageId);
  };

  const handleOpening = (event) => {
    event.preventDefault();

    setContext((context) => {
      return {
        ...context,
        isOpen: !context.isOpen,
      };
    });
  };

  const handleExport = (event) => {
    event.preventDefault();
    setContext((context) => {
      return {
        ...context,
        showExport: !context.showExport,
      };
    });
  };

  // Get the computed styles of all cssvars
  useEffect(() => {
    const styles = {
      root: window.getComputedStyle(document.documentElement),
      breadcrumb: window.getComputedStyle(
        document.querySelector(".breadcrumb"),
      ),
      card: window.getComputedStyle(document.querySelector(".card")),
      dropdown: window.getComputedStyle(document.querySelector(".dropdown")),
      menu: window.getComputedStyle(document.querySelector(".menu")),
      message: window.getComputedStyle(document.querySelector(".message")),
      modal: window.getComputedStyle(document.querySelector(".modal")),
      navbar: window.getComputedStyle(document.querySelector(".navbar")),
      pagination: window.getComputedStyle(
        document.querySelector(".pagination"),
      ),
      panel: window.getComputedStyle(document.querySelector(".panel")),
      tabs: window.getComputedStyle(document.querySelector(".tabs")),
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
    const allKeys = Object.values(PAGE_IDS)
      .flat()
      .map((pageId) => {
        if (!(pageId in CSSVAR_KEYS)) {
          return;
        }

        return CSSVAR_KEYS[pageId];
      })
      .flat();
    const allKeyIds = allKeys.map((i) => {
      if (!i) {
        return;
      }

      return i.id;
    });

    allKeyIds.map((key) => {
      if (!key) {
        return;
      }

      // Keep the value saved in localStorage
      if (key in context.saved) {
        cssvars[key] = context.saved[key];
        return;
      }

      let original;
      let scope = ":root";

      if (key.startsWith("breadcrumb")) {
        scope = ".breadcrumb";
        original = styles.breadcrumb.getPropertyValue(`--bulma-${key}`);
      } else if (key.startsWith("card")) {
        scope = ".card";
        original = styles.card.getPropertyValue(`--bulma-${key}`);
      } else if (key.startsWith("dropdown")) {
        scope = ".dropdown";
        original = styles.dropdown.getPropertyValue(`--bulma-${key}`);
      } else if (key.startsWith("menu")) {
        scope = ".menu";
        original = styles.menu.getPropertyValue(`--bulma-${key}`);
      } else if (key.startsWith("message")) {
        scope = ".message";
        original = styles.message.getPropertyValue(`--bulma-${key}`);
      } else if (key.startsWith("modal")) {
        scope = ".modal";
        original = styles.modal.getPropertyValue(`--bulma-${key}`);
      } else if (key.startsWith("navbar")) {
        scope = ".navbar";
        original = styles.navbar.getPropertyValue(`--bulma-${key}`);
      } else if (key.startsWith("pagination")) {
        scope = ".pagination";
        original = styles.pagination.getPropertyValue(`--bulma-${key}`);
      } else if (key.startsWith("panel")) {
        scope = ".panel";
        original = styles.panel.getPropertyValue(`--bulma-${key}`);
      } else if (key.startsWith("tabs")) {
        scope = ".tabs";
        original = styles.tabs.getPropertyValue(`--bulma-${key}`);
      } else if (key.startsWith("box")) {
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
  }, [context.saved]);

  // Update the styling when the cssvars change
  useEffect(() => {
    const rules = {};
    const storedVars = {};

    Object.values(context.cssvars).forEach((cssvar) => {
      const { id, current, start, scope, unit } = cssvar;

      if (current == start) {
        return;
      }

      storedVars[id] = cssvar;

      const computedValue = `${current}${unit}`;
      const declaration = `--bulma-${id}: ${computedValue} !important;`;

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

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storedVars));
  }, [context.cssvars]);

  // Computed values
  // const isExportAvailable = Object.values(context.cssvars).some(
  //   (item) => item.current != item.start,
  // );

  // Styles
  const tabsStyle = {
    "--bulma-tabs-link-active-color": "var(--bulma-primary)",
  };

  const customizerClass = classNames({
    [cn.customizer]: true,
    [cn.open]: context.isOpen,
  });

  const controlsClass = classNames({
    [cn.controls]: true,
  });

  const exportClass = classNames({
    [cn.button]: true,
    "is-hidden": !context.isOpen,
    button: !context.showExport,
    "button is-primary": context.showExport,
  });

  const buttonClass = classNames({
    [cn.button]: true,
    "button is-primary": !context.isOpen,
    button: context.isOpen,
  });

  return (
    <CustomizerContext.Provider value={context}>
      <div className={cn.app}>
        <style ref={styleRef} />

        <div className={customizerClass}>
          {context.showExport ? (
            PAGE_TO_COMPONENT.export
          ) : (
            <>
              {" "}
              <div className={controlsClass}>
                <div className="select" style={tabsStyle}>
                  <select onChange={handleTabChange} value={context.currentTab}>
                    {TAB_IDS.map((tabId) => {
                      return (
                        <option key={tabId} value={tabId}>
                          {unslug(tabId)}
                        </option>
                      );
                    })}
                  </select>
                </div>

                {PAGE_IDS[context.currentTab].map((pageId) => {
                  const buttonClass = classNames({
                    button: true,
                    "is-primary": pageId === context.currentPage,
                  });

                  return (
                    <button
                      className={buttonClass}
                      key={pageId}
                      onClick={(e) => handlePageChange(e, pageId)}
                    >
                      {unslug(pageId)}
                    </button>
                  );
                })}
              </div>
              {PAGE_TO_COMPONENT[context.currentPage]}
            </>
          )}
        </div>

        <div className={cn.buttons}>
          <button className={exportClass} onClick={handleExport}>
            <i className="fa-solid fa-code"></i>
            <span>Export</span>
          </button>

          <button className={buttonClass} onClick={handleOpening}>
            <i className="fa-solid fa-palette"></i>
            <span>
              {context.isOpen ? "Close Customizer" : "Open Customizer"}
            </span>
          </button>
        </div>
      </div>
    </CustomizerContext.Provider>
  );
}

export default App;
