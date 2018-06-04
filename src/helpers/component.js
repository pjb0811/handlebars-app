import safeString from './safeString';

export default (component, props) => {
  let comp;
  component = require(`../${component}`).default;
  comp = new component(props);
  return safeString(comp.render());
};
