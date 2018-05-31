import domino from 'domino';

if (!global.window) {
  var window = domino.createWindow(
    `<!doctype html><html><head></head><body><div id="root"></div></body></html>`
  );
  var document = window.document;
}

class App {
  constructor(props) {
    this.props = props;
    this.init();
  }

  init() {
    const { el = '', component = null, routes } = this.props;

    if (el && component) {
      this.rootElement = document.querySelector(el);

      this.render({
        element: this.rootElement,
        component
      });

      if (routes) {
        this.setRouter();
      }
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

  async renderRoutePage(params) {
    const { pathname } = params;
    const { routes } = this.props;
    const element = this.rootElement.querySelector('[data-route-page]');
    let component = routes[pathname];

    if (typeof component === 'string') {
      component = await import(`../${component}`);
      component = component.default;
    }

    history.pushState(null, pathname, pathname);

    this.render({
      element,
      component
    });

    return this.rootElement.innerHTML;
  }

  stopEvent(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  getString() {
    return this.rootElement.innerHTML;
  }
}

export default App;
