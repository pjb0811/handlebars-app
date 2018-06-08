class App {
  constructor(props) {
    this.props = props;
    this.init();
  }

  init() {
    const { el = '', component = null, routes } = this.props;

    if (el) {
      this.props.element = this.getRootElement({ el });
    }

    if (component) {
      this.render({
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

  render({ pathname = '', component }) {
    const { el, element } = this.props;
    new component({
      el,
      pathname,
      element
    });
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
        pathname: routes[pathname],
        component
      });

      routeLinks = this.props.element.querySelectorAll('[data-route-link]');
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
      pathname: routes[pathname],
      component
    });

    this.setHistory({ pathname });

    return this.props.element.innerHTML;
  }

  setLinks() {
    this.props.element.addEventListener('click', e => {
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
