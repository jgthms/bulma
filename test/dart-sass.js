const sass = require('sass');

const sources = [
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
];

const BULMA_SASS_PATH = `./sass/`;

sources.forEach(source => {
  const result = sass.renderSync({
    data: `@use "${BULMA_SASS_PATH}${source}";`,
    outputStyle: "expanded"
  });

  try {
    sass.renderSync({
      data: `@use "${BULMA_SASS_PATH}${source}";`,
    });
  } catch(err) {
    console.error(err);
  }
});
