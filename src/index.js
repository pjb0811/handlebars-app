import Client from './modules/Client';
import routes from './lib/routes';

const Root = ({ Component }) => {
  return new Component({
    el: '#root',
    routes
  });
};

let app = Root({
  Component: Client
});

if (module.hot) {
  module.hot.accept('./modules/Client', () => {
    const NewApp = require('./modules/Client').default;
    app = Root({
      Component: NewApp
    });
  });
}

export default app;
