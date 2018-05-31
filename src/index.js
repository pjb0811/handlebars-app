import App from './modules/App';
import Main from 'components/pages/Main';

const app = new App({
  el: '#root',
  component: Main,
  routes: {
    '/': 'components/pages/Home',
    '/about': 'components/pages/About'
  }
});

app
  .renderRoutePage({
    pathname: '/'
  })
  .then(str => {
    console.log(str);
  });

export default app;
