const Handlebars = require('handlebars/runtime');

module.exports = function(component, params) {
  let comp;
  component = require(`../${component}`).default;
  comp = new component(params);
  return new Handlebars.SafeString(comp.render());
};
