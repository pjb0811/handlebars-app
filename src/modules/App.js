class App {
  constructor(props) {
    this.props = props;
    this.init();
  }

  init() {
    const { el = '', component = null, routes } = this.props;

    if (el && component) {
      const element = document.querySelector(el);
      this.render({
        element,
        component
      });

      if (routes) {
        this.setRouter(element);
      }
    }
  }

  getHTML(id) {
    const element = document.querySelector(id);
    return element.innerHTML;
  }

  setRouter(element) {
    const { el, routes } = this.props;
    const { pathname } = location;
    const routeLinks = element.querySelectorAll('[data-route-link]');
    const routePage = element.querySelector('[data-route-page]');

    element.addEventListener('click', e => {
      const { target } = e;
      const link = target.getAttribute('data-route-link');
      if (link) {
        this.renderRoutePage({
          name: link,
          page: routePage,
          routes
        });
      }
      this.stopEvent(e);
    });

    if (routes[pathname]) {
      this.renderRoutePage({
        name: pathname,
        page: routePage,
        routes
      });
    }
  }

  async renderRoutePage(params) {
    const { name, page, routes } = params;
    let component = routes[name];

    if (typeof component === 'string') {
      component = await import(`../${component}`);
      component = component.default;
    }
    this.render({
      element: page,
      component
    });
    history.pushState(null, name, name);
  }

  render(params) {
    const { element, component } = params;
    const comp = new component();
    element.innerHTML = comp.render();
  }

  stopEvent(e) {
    e.preventDefault();
    e.stopPropagation();
  }
}

export default App;
