class Server {}
export default Server;

// require('jsdom-global')(`<!DOCTYPE html><body>`, {
//   url: 'http://localhost:9001/'
// });

// class Server {
//   constructor(props) {
//     this.props = props;
//     this.init();
//   }

//   init() {
//     // const { el = "", routes, pathname } = this.props;
//     // if (el) {
//     //   this.rootElement = this.getRootElement({ el });
//     // }
//     // if (routes) {
//     //   this.setRoute();
//     // }
//   }

//   // getRootElement({ el }) {
//   //   const div = document.createElement("div");
//   //   document.body.innerHTML = "";
//   //   div.setAttribute("id", el.replace("#", ""));
//   //   document.body.appendChild(div);
//   //   return document.body.querySelector(el);
//   // }

//   // setRoute() {
//   //   const { routes, pathname } = this.props;
//   //   const component = require("../" + routes[pathname]).default;
//   //   this.render({
//   //     element: this.rootElement,
//   //     component
//   //   });

//   //   console.log(this.rootElement);
//   // }

//   // render({ element, component }) {
//   //   element.innerHTML = new component(this.props).render();
//   //   return element.innerHTML;
//   // }

//   // getPathName() {
//   //   const { pathname } = this.props;
//   //   return pathname;
//   // }

//   // setHistory({ pathname }) {}

//   // async getComponent({ component }) {
//   //   if (typeof component === 'string') {
//   //     component = await import(`../${component}`);

//   //     component = component.default;
//   //   }
//   //   return component;
//   // }
// }

// export default Server;
