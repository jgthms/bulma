'use strict';

document.addEventListener('DOMContentLoaded', function () {

  // Toggle search between current, and deprecated documentation versions
  var algoliaOptions = {};
  if(bdSettings.deprecated) {
    algoliaOptions.facetFilters = ['version:' + bdSettings.version];
  } else {
    algoliaOptions.facetFilters = ['tags:current'];
  }

  // Configure DocSearch
  var options = {
    algoliaOptions: algoliaOptions,
    apiKey: bdSettings.algolia.key,
    indexName: bdSettings.algolia.index,
    inputSelector: '#documentionSearch',
    autocompleteOptions: {
      appendTo: "#documentionSearchWrapper",
      hint: false
    },
    transformData: function (hits) {
      return hits.map(function (hit) {
        hit.url = hit.url
          .replace('https://bulma.io/', '/')
          .replace('https://versions.bulma.io/', '/');
        return hit;
      });
    }
  };

  // Add an optional appId (used for development and testing)
  if(bdSettings.algolia.app) {
    options.appId = bdSettings.algolia.app;
  }

  docsearch(options);

});
