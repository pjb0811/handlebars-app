import App from './modules/App';

const app = new App({
  el: '#root',
  routes: {
    '/': 'components/pages/Home',
    '/about': 'components/pages/About'
  }
});

export default app;
