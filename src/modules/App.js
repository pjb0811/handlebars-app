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

    if (el && component) {
      this.render({
        element: this.rootElement,
        component
      });
    }

    if (routes) {
      this.setRouter();
    }
  }

  render(params) {
    const { element, component } = params;
    element.innerHTML = new component().render();
  }

  setRouter() {
    const { routes } = this.props;
    const { pathname } = document.location;
    const routeLinks = this.rootElement.querySelectorAll('[data-route-link]');

    if (routes[pathname]) {
      this.renderRoutePage({
        pathname
      });
    }

    /* if (routes[pathname]) {
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
    }); */
  }

  /* async renderRoutePage(params) {
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
