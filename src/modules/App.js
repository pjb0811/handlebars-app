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

  async getComponent({ component }) {
    if (typeof component === 'string') {
      component = await import(`../${component}`);
      component = component.default;
    }
    return component;
  }

  async setRoute() {
    const { routes } = this.props;
    const { pathname } = document.location;

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

  async renderRoutePage({ pathname }) {
    const { routes } = this.props;

    let component = await this.getComponent({
      component: routes[pathname]
    });

    this.render({
      element: this.rootElement,
      component
    });

    history.pushState({}, '', pathname);
  }

  stopEvent(e) {
    e.preventDefault();
    e.stopPropagation();
  }
}

export default App;
