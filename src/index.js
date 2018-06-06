import App from './modules/App';
import routes from './lib/routes';

const Root = ({ Component }) => {
  return new Component({
    el: '#root',
    routes
  });
};

let app = Root({
  Component: App
});

if (module.hot) {
  module.hot.accept('./modules/App', () => {
    const NewApp = require('./modules/App').default;
    app = Root({
      Component: NewApp
    });
  });
}

export default app;
