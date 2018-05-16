class App {
  constructor(props) {
    this.props = props;
    this.init();
  }

  init() {
    const { component } = this.props;
    if (component) {
      this.getComponent(component);
    }
  }

  async getComponent(name) {
    const component = await import('components/Main');
    if (component.default) {
      new component.default({
        component: name
      });
    }
  }

  /*
  render(params) {
    const { routes } = this.props;
    const { container, template, data } = params;
    container.innerHTML = template(data);
    if (routes) {
      this.getComponent(routes[window.location.pathname]);
    }
  }

  async getComponent(name) {
    const { el, routes, template } = this.props;
    const page = document.querySelector(el).querySelector('[data-route-page]');
    if (name) {
      const component = await import('components/' + name);
      new component.default({
        name
      });
    }
  }
  */
}

export default App;
