import Main from 'components/templates/Main';
import Component from 'modules/Component';
import homeView from 'views/pages/Home.hbs';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'home'
    };
    this.init({
      component: this,
      view: homeView,
      element: this.props.element
    });
  }

  chanageTitle() {
    console.log('test');
  }
}

export default Main(Home);
