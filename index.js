/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-topojson',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/topojson/topojson.js');
    app.import('vendor/ember-topojson/ember-topojson-shim.js', {
      exports: {
        topojson: ['default']
      }
    });
  },

  treeForVendor: function() {
    return path.join(__dirname, 'client');
  }
};
