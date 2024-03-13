const Handlebars = require('handlebars/runtime');
const helpers = require('template-helpers/lib/helpers');

Object.keys(helpers).forEach((k) => {
  const v = helpers[k];
  Object.keys(v).forEach((k2) => {
    Handlebars.registerHelper(k + '_' + k2, v[k2]);
  });
});
module.exports = Handlebars;
