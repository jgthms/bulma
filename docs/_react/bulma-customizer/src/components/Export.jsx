import { useContext, useEffect, useState } from "react";
import { CustomizerContext } from "../App";

import Highlighter from "components/Highlighter";

import cn from "./Export.module.css";

function Export() {
  const { cssvars } = useContext(CustomizerContext);

  const [css, setCSS] = useState("");

  useEffect(() => {
    const rules = {};

    Object.values(cssvars).forEach((cssvar) => {
      const { id, current, start, scope, unit } = cssvar;

      if (current == start) {
        return;
      }

      const computedValue = `${current}${unit}`;
      const declaration = `--bulma-${id}: ${computedValue};\n`;

      if (scope in rules) {
        rules[scope].push(declaration);
      } else {
        rules[scope] = [declaration];
      }
    });

    let content = "";

    for (const [key, arr] of Object.entries(rules)) {
      content += `${key} {\n`;
      arr.forEach((item) => (content += `  ${item}`));
      content += `}\n\n`;
    }

    setCSS(content);
  }, [cssvars]);

  return (
    <div className={cn.main}>
      {css ? (
        <>
          <div className={cn.body}>
            <p className="title is-5">Export</p>

            <div className={cn.explanation}>
              <p>Insert this CSS <em>after</em> importing Bulma.</p>

              <div className="buttons are-small">
                <button className="button is-primary">Copy</button>
                <button className="button is-danger is-outlined">Reset</button>
              </div>
            </div>
          </div>

          <Highlighter PreTag="div" language="css">
            {css.trim()}
          </Highlighter>
        </>
      ) : (
        <div className={cn.explanation}>
          Customize CSS variables in the other pages and come back here to find
          the generated CSS.
        </div>
      )}
    </div>
  );
}

export default Export;
