import App from './modules/App';

const Root = ({ Component }) => {
  return new Component({
    el: '#root',
    routes: {
      '/': 'components/pages/Home',
      '/about': 'components/pages/About'
    }
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
