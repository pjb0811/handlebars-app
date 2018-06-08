import safeString from './safeString';

export default (component, props) => {
  if (props && props.element) {
    component = require(`../${component}`).default;
    console.log(props);
    // let comp = new component(props);
    // console.log(comp);
    // return safeString(comp.render());
  }

  return safeString('<div></div>');
};
