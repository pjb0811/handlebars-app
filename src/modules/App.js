class App {
  constructor(props) {
    this.props = props;
    this.init();
  }

  init() {
    const { el = '', component = null, routes } = this.props;

    if (el) {
      this.rootElement = document.querySelector(el);
    }

    if (component) {
      this.render({
        element: this.rootElement,
        component
      });
    }

    if (routes) {
      this.setRoute();
    }
  }

  render({ element, component }) {
    element.innerHTML = new component(this.props).render();
    return element.innerHTML;
  }

  async getComponent({ route }) {
    if (typeof route === 'string') {
      component = await import(`../${route}`);
      component = component.default;
    }
    return;
  }

  setRoute() {
    const { routes } = this.props;
    const { pathname } = document.location;

    if (routes[pathname]) {
      let component = this.getComponent({
        path: routes[pathname]
      });
      this.render({
        element: this.rootElement,
        component
      });
    }

    // const routeLinks = this.rootElement.querySelectorAll('[data-route-link]');

    /*
    if (routes[pathname]) {
      this.renderRoutePage({
        pathname
      });
    }

    if (routes[pathname]) {
      this.renderRoutePage({
        pathname
      });
    }

    this.rootElement.addEventListener('click', e => {
      const { target } = e;
      const link = target.getAttribute('data-route-link');
      if (link) {
        this.renderRoutePage({
          pathname: link
        });
      }
      this.stopEvent(e);
    });
    */
  }

  /* setRoute() {
    const { routes } = this.props;
    const { pathname } = document.location;
    const routeLinks = this.rootElement.querySelectorAll('[data-route-link]');

    if (routes[pathname]) {
      this.renderRoutePage({
        pathname
      });
    }

    if (routes[pathname]) {
      this.renderRoutePage({
        pathname
      });
    }

    this.rootElement.addEventListener('click', e => {
      const { target } = e;
      const link = target.getAttribute('data-route-link');
      if (link) {
        this.renderRoutePage({
          pathname: link
        });
      }
      this.stopEvent(e);
    });
  } */

  /*
  async renderRoutePage(params) {
    const { pathname } = params;
    const { routes } = this.props;
    const element = this.rootElement.querySelector('[data-route-page]');
    let component = routes[pathname];

    if (typeof component === 'string') {
      component = await import(`../${component}`);
      component = component.default;
    }

    history.pushState({}, '', pathname);

    this.render({
      element,
      component
    });

    return this.rootElement.innerHTML;
  } */

  stopEvent(e) {
    e.preventDefault();
    e.stopPropagation();
  }
}

export default App;
