import Handlebars from 'handlebars/runtime';

export default (component, params) => {
  let comp;
  component = require(`../${component}`).default;
  comp = new component(params);
  return new Handlebars.SafeString(comp.render());
};
