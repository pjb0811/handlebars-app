import EventHandler from './EventHandler';

class Component {
  constructor(props) {
    this.props = props;
  }

  init({ component, view, element }) {
    this.view = view;
    this.component = component;
    this.props.element = element;
    this.props.element.innerHTML = view(this.state);
    this.setEventHandler({ component });
  }

  render() {
    this.props.element.innerHTML = this.view(this.state);
    this.eventHandler.rebind();
    return this.props.element.innerHTML;
  }

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
}

export default Component;
