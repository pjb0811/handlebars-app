import App from './App';
import Main from 'components/Main';

new App({
  el: '#root',
  component: Main,
  routes: {
    '/': 'components/Home',
    '/about': 'components/About'
  }
});
