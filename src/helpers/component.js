import safeString from './safeString';

export default (component, props) => {
  let comp;

  if (props && props.pathname && props.WrappedComponent && props.element) {
    comp = new props.WrappedComponent({
      el: props.el,
      element: props.element
    });
    return safeString(comp.render());
  }

  return safeString('');
};
