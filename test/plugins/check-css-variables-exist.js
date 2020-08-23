module.exports = plugin;

const utils = require('./utils');
const fs = require('fs');
const regexAssign = /--[a-z-]*:/g;
const regexUsage = /var\(--[a-z-]*\)/g;
const LOG_EVERYTHING = false;

const DEFAULT_ASSIGNMENTS = [
  '--black',
  '--black-70',
  '--black-bis',
  '--black-ter',
  '--grey-darker',
  '--grey-dark',
  '--grey',
  '--grey-light',
  '--grey-lighter',
  '--grey-lightest',
  '--white-ter',
  '--white-bis',
  '--white',
  '--orange',
  '--yellow',
  '--green',
  '--turquoise',
  '--cyan',
  '--blue',
  '--purple',
  '--red',
  '--family-sans-serif',
  '--family-monospace',
  '--render-mode',
  '--size-1',
  '--size-2',
  '--size-3',
  '--size-4',
  '--size-5',
  '--size-6',
  '--size-7',
  '--weight-light',
  '--weight-normal',
  '--weight-medium',
  '--weight-semibold',
  '--weight-bold',
  '--block-spacing',
  '--easing',
  '--radius-small',
  '--radius',
  '--radius-large',
  '--radius-rounded',
  '--speed',
  '--primary',
  '--info',
  '--success',
  '--warning',
  '--danger',
  '--light',
  '--dark',
  '--orange-invert',
  '--yellow-invert',
  '--green-invert',
  '--turquoise-invert',
  '--cyan-invert',
  '--blue-invert',
  '--purple-invert',
  '--red-invert',
  '--primary-invert',
  '--primary-light',
  '--primary-dark',
  '--info-invert',
  '--info-light',
  '--info-dark',
  '--success-invert',
  '--success-light',
  '--success-dark',
  '--warning-invert',
  '--warning-light',
  '--warning-dark',
  '--danger-invert',
  '--danger-light',
  '--danger-dark',
  '--light-invert',
  '--light-light',
  '--light-dark',
  '--dark-invert',
  '--dark-light',
  '--dark-dark',
  '--scheme-main',
  '--scheme-main-bis',
  '--scheme-main-ter',
  '--scheme-invert',
  '--scheme-invert-rgb',
  '--scheme-invert-bis',
  '--scheme-invert-ter',
  '--background',
  '--border',
  '--border-rgb',
  '--border-hover',
  '--border-light',
  '--border-light-hover',
  '--text',
  '--text-invert',
  '--text-light',
  '--text-strong',
  '--code',
  '--code-background',
  '--pre',
  '--pre-background',
  '--link',
  '--link-invert',
  '--link-light',
  '--link-dark',
  '--link-visited',
  '--link-hover',
  '--link-hover-border',
  '--link-focus',
  '--link-focus-border',
  '--link-active',
  '--link-active-border',
  '--family-primary',
  '--family-secondary',
  '--family-code',
  '--size-small',
  '--size-normal',
  '--size-medium',
  '--size-large',
];

function logThis(message) {
  if (LOG_EVERYTHING) {
    console.log(message);
  }
}

function plugin() {
  return (files, metalsmith, done) => {
    setImmediate(done);

    let hasErrors = false;

    Object.keys(files).forEach(filePath => {
      const {fileName, lines} = utils.getLines(files, filePath);
      const file = files[filePath];
      const contents = file.contents.toString();
      const assignments = contents.match(regexAssign);

      if (!assignments) {
        logThis(`${filePath} has no CSS var assignments`);
        return;
      }

      const fileAssignments = assignments.map(assignment => assignment.replace(':', ''));
      const allAssignments = [...fileAssignments, ...DEFAULT_ASSIGNMENTS];

      let usages = contents.match(regexUsage);

      if (!usages) {
        logThis(`${filePath} has no CSS var usages`);
        return;
      }

      // var(--foobar) ==> --foobar
      usages = usages.map(usage => {
        usage = usage.replace('var(', '');
        usage = usage.replace(')', '');
        return usage;
      });

      let errorCount = 0;

      usages.forEach(usage => {
        if (!allAssignments.includes(usage)) {
          console.log(`${usage} is not assigned`);
          errorCount++;
        }
      });

      fileAssignments.forEach(assignment => {
        if (!usages.includes(assignment)) {
          console.log(`${assignment} is not used`);
          errorCount++;
        }
      });

      if (errorCount) {
        console.log(`There are some errors in ${filePath}`);
      } else {
        logThis(`${filePath} is all good!`);
      }
    });

    if (hasErrors) {
      console.log(`There are some errors`);
    } else {
      console.log(`All CSS variables are used and assigned correctly!`);
    }
  };
}
