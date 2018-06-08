import safeString from './safeString';

export default (component, props) => {
  let comp;
  if (props && props.WrappedComponent && props.element) {
    comp = new props.WrappedComponent({
      element: props.element
    });
    return safeString(comp.render());
  }

  if (props && props.element) {
    component = require(`../${component}`).default;
    comp = new component(props);
    return safeString(comp.render());
  }

  return safeString('<div></div>');
};
