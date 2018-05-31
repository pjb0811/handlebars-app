import App from './modules/App';
import Main from 'components/pages/Main';

export default new App({
  el: '#root',
  component: Main,
  routes: {
    '/': 'components/pages/Home',
    '/about': 'components/pages/About'
  }
});
