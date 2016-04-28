'use strict';

module.exports = {
  description: 'Imports TopoJSON dependency from Bower',

  normalizeEntityName: function() {
    // no-op
  },

  afterInstall: function(options) {
    return this.addBowerPackageToProject('topojson');
  }
};
