import EventHandler from './EventHandler';

class Component {
  constructor(props) {
    this.props = props;
  }

  init({ view, element }) {
    this.view = view;
    this.props.element = element;
    this.setHTML();
    this.setEventHandler();
    this.afterRender();
  }

  render() {
    this.setHTML();
    this._eventHandler.rebind();
    return this.props.element.innerHTML;
  }

  afterRender() {}

  setState(nextState) {
    this.state = Object.assign({}, this.state, nextState);
    this.render();
  }

  setEventHandler() {
    const { element } = this.props;
    this._eventHandler = new EventHandler({
      element,
      component: this
    });
    this._eventHandler.rebind();
  }

  setHTML() {
    const { element } = this.props;
    element.innerHTML = this.view(this.state);
  }

  getElement(seletor) {
    const { element } = this.props;
    return element.querySelector(seletor);
  }
}

export default Component;
