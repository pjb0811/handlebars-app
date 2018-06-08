import EventHandler from './EventHandler';

class Component {
  constructor(props) {
    this.props = props;
  }

  init({ component, view, element }) {
    this.view = view;
    this.component = component;
    this.props.element = element;
    this.setElement();
    this.setEventHandler({ component });
    this.afterRender();
  }

  render() {
    this.setElement();
    this.eventHandler.rebind();
    return this.props.element.innerHTML;
  }

  afterRender() {}

  setState(nextState) {
    this.state = Object.assign({}, this.state, nextState);
    this.render();
  }

  setEventHandler({ component }) {
    const { element } = this.props;
    this.eventHandler = new EventHandler({
      element,
      component
    });
    this.eventHandler.rebind();
  }

  setElement() {
    const { element } = this.props;
    element.innerHTML = this.view(this.state);
  }

  getElement(seletor) {
    const { element } = this.props;
    return element.querySelector(seletor);
  }
}

export default Component;
