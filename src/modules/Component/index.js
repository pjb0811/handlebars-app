import EventHandler from './EventHandler';

class Component {
  constructor(props) {
    this.props = props;
  }

  init({ view, childs = {} }) {
    this.view = view;
    this.childs = childs;
    this.setHTML();
    this.setEventHandler();
    // this.afterRender();
  }

  render() {
    this.setHTML();
    this.eventHandler.rebind();
    return this.props.element.innerHTML;
  }

  /* afterRender() {
    Object.keys(this.childs).map(key => {
      const child = this.childs[key];
      if (child.WrappedComponent) {
        this.setChildProps({
          child,
          key
        });
      }
    });
  } */

  /* setChildProps({ child, key }) {
    const { element } = this.props;
    const { el } = child;
    const childElement = element.querySelector(el);
    this.childs[key] = Object.assign({}, this.childs[key], {
      element: childElement
    });

    this.render();
  } */

  setState(nextState) {
    this.state = Object.assign({}, this.state, nextState);
    this.render();
  }

  setEventHandler() {
    const { element } = this.props;
    this.eventHandler = new EventHandler({
      element,
      component: this
    });
    this.eventHandler.rebind();
  }

  setHTML() {
    const { element } = this.props;
    element.innerHTML = this.view({
      state: this.state,
      childs: this.childs
    });
  }

  getElement(seletor) {
    const { element } = this.props;
    return element.querySelector(seletor);
  }
}

export default Component;
