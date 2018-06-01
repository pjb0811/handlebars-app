import App from './modules/App';
// import Main from 'components/templates/Main';

const app = new App({
  el: '#root',
  routes: {
    '/': 'components/pages/Home',
    '/about': 'components/pages/About'
  }
});

export default app;
