import App from './app';
// import main from './views/main.hbs';

/*
const routes = {
  '/': 'Home',
  '/about': 'About',
  notFound: 'NotFound'
};
*/

new App({
  el: '#root',
  component: 'components/Main'
});
