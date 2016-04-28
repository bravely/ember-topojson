(function() {
  /* globals define, topojson */

  function generateModule(name, values) {
    define(name, [], function() {
      'use strict';

      return values;
    });
  }

  generateModule('topojson', { 'default': topojson });
})();
