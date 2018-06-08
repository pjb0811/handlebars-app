import safeString from './safeString';

export default (component, props) => {
  let comp;
  component = require(`../${component}`).default;
  if (props && props.element) {
    comp = new component(props);
    return safeString(comp.render());
  }

  return safeString('<div></div>');
};
