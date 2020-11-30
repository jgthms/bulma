module.exports = Object.freeze({
  SOURCES: [
    `base/animations.sass`,
    `base/generic.sass`,
    `base/minireset.sass`,

    `components/breadcrumb.sass`,
    `components/card.sass`,
    `components/dropdown.sass`,
    `components/level.sass`,
    `components/media.sass`,
    `components/menu.sass`,
    `components/message.sass`,
    `components/modal.sass`,
    `components/navbar.sass`,
    `components/pagination.sass`,
    `components/panel.sass`,
    `components/tabs.sass`,

    `elements/box.sass`,
    `elements/button.sass`,
    `elements/container.sass`,
    `elements/content.sass`,
    `elements/icon.sass`,
    `elements/image.sass`,
    `elements/notification.sass`,
    `elements/other.sass`,
    `elements/progress.sass`,
    `elements/table.sass`,
    `elements/tag.sass`,
    `elements/title.sass`,

    `form/checkbox-radio.sass`,
    `form/file.sass`,
    `form/input-textarea.sass`,
    `form/select.sass`,
    `form/tools.sass`,

    `grid/columns.sass`,
    `grid/tiles.sass`,

    `helpers/color.sass`,
    `helpers/flexbox.sass`,
    `helpers/float.sass`,
    `helpers/other.sass`,
    `helpers/overflow.sass`,
    `helpers/position.sass`,
    `helpers/spacing.sass`,
    `helpers/typography.sass`,
    `helpers/visibility.sass`,

    `layout/footer.sass`,
    `layout/hero.sass`,
    `layout/section.sass`,

    `utilities/controls.sass`,
    `utilities/derived-variables.sass`,
    `utilities/functions.sass`,
    `utilities/initial-variables.sass`,
    `utilities/mixins.sass`,
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
