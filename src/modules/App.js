class App {
  constructor(props) {
    this.props = props;
    this.init();
  }

  init() {
    const { el = '', component = null, routes } = this.props;

    if (el) {
      this.rootElement = this.getRootElement({ el });
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

  async getComponent({ component }) {
    if (typeof component === 'string') {
      component = await import(`../${component}`);

      component = component.default;
    }
    return component;
  }

  render({ element, component }) {
    element.innerHTML = new component(this.props).render();
    return element.innerHTML;
  }

  async setRoute() {
    const { routes } = this.props;
    const pathname = this.getPathName();

    if (routes[pathname]) {
      let routeLinks;
      let component = await this.getComponent({
        component: routes[pathname]
      });

      this.render({
        element: this.rootElement,
        component
      });

      routeLinks = this.rootElement.querySelectorAll('[data-route-link]');
      if (routeLinks.length) {
        this.setLinks({
          links: routeLinks
        });
      }
    }
  }

  async renderRoutePage({ pathname }) {
    const { routes } = this.props;

    let component = await this.getComponent({
      component: routes[pathname]
    });

    this.render({
      element: this.rootElement,
      component
    });

    this.setHistory({ pathname });

    return this.rootElement.innerHTML;
  }

  setLinks() {
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
  }

  getRootElement({ el }) {
    return document.body.querySelector(el);
  }

  getPathName() {
    return document.location.pathname;
  }

  setHistory({ pathname }) {
    history.pushState({}, '', pathname);
  }

  stopEvent(e) {
    e.preventDefault();
    e.stopPropagation();
  }
}

export default App;
