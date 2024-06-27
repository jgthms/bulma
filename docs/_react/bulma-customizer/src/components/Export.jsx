import { useContext, useEffect, useState } from "react";
import { CustomizerContext } from "../App";

import cn from "./Export.module.css";

function Export() {
  const { cssvars, resetVars, hideExport } = useContext(CustomizerContext);

  const [css, setCSS] = useState("");
  const [copied, setCopied] = useState(false);

  const handleReset = (event) => {
    event.preventDefault();

    if (window.confirm("Are you sure?")) {
      resetVars();
    }
  };

  const handleGo = (event) => {
    event.preventDefault();
    hideExport();
  };

  const copyToClipboard = async (event) => {
    event.preventDefault();

    try {
      await navigator.clipboard.writeText(css);
      setCopied(true);
      window.setTimeout(() => {
        setCopied(false);
      }, 500);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

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
      <div className={cn.body}>
        <p className="title is-5">Export</p>

        {css ? (
          <div className={cn.explanation}>
            <p>
              Insert this CSS <em>after</em> importing Bulma.
            </p>

            <div className="buttons are-small">
              {copied ? (
                <span className="button is-success">Copied!</span>
              ) : (
                <button onClick={copyToClipboard} className="button is-primary">
                  Copy
                </button>
              )}
              <button
                onClick={handleReset}
                className="button is-danger is-outlined"
              >
                Reset
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className={cn.explanation}>
              <p>
                Customize CSS variables in the other pages and come back here to
                find the generated CSS.
              </p>
            </div>

            <div className={cn.go}>
              <button className="button is-primary" onClick={handleGo}>
                Let&apos;s go!
              </button>
            </div>
          </>
        )}
      </div>

      {css && <pre className={cn.pre}>{css.trim()}</pre>}
    </div>
  );
}

export default Export;
