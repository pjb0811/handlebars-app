class App {
  constructor(props) {
    this.props = props;
    this.store = {};
    this.init();
  }

  init() {
    const { el = '', component = null, routes } = this.props;

    if (el && component) {
      const element = document.querySelector(el);
      element.innerHTML = new component(this.store).render();

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
    let Component = routes[name];

    if (typeof Component === 'string') {
      Component = await import(`./${Component}`);
      Component = Component.default;
    }

    page.innerHTML = new Component(this.store).render();
    history.pushState(null, name, name);
  }

  stopEvent(e) {
    e.preventDefault();
    e.stopPropagation();
  }
}

export default App;
