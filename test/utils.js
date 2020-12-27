module.exports = Object.freeze({
  SOURCES: [
    `base/animations`,
    `base/generic`,
    `base/minireset`,

    `components/breadcrumb`,
    `components/card`,
    `components/dropdown`,
    `components/level`,
    `components/media`,
    `components/menu`,
    `components/message`,
    `components/modal`,
    `components/navbar`,
    `components/pagination`,
    `components/panel`,
    `components/tabs`,

    `elements/box`,
    `elements/button`,
    `elements/container`,
    `elements/content`,
    `elements/icon`,
    `elements/image`,
    `elements/notification`,
    `elements/other`,
    `elements/progress`,
    `elements/table`,
    `elements/tag`,
    `elements/title`,

    `form/checkbox-radio`,
    `form/file`,
    `form/input-textarea`,
    `form/select`,
    `form/tools`,

    `grid/columns`,
    `grid/tiles`,

    `helpers/color`,
    `helpers/flexbox`,
    `helpers/float`,
    `helpers/other`,
    `helpers/overflow`,
    `helpers/position`,
    `helpers/spacing`,
    `helpers/typography`,
    `helpers/visibility`,

    `layout/footer`,
    `layout/hero`,
    `layout/section`,

    `utilities/controls`,
    `utilities/derived-variables`,
    `utilities/extends`,
    `utilities/functions`,
    `utilities/initial-variables`,
    `utilities/mixins`,
  ],
  buildCSS: (fn, name, options) => {
    try {
      console.log(`Processing ${name}`);
      fn.renderSync(options);
    } catch (err) {
      console.log(`Error with ${name}`);
      console.error(err);
    }
  },
  exportCSS: (fn, fs, basepath, filepath, options) => {
    const exportFile = `${basepath}${filepath}.css`;

    fn.render(
      {
        ...options,
        outFile: exportFile,
      },
      (error, result) => {
        if (!error) {
          fs.writeFile(exportFile, result.css, (err) => {
            if (!err) {
              console.log(`File ${exportFile} written on disk`);
            }
          });
        }
      }
    );
  }
});
