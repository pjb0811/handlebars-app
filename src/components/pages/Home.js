import Main from 'components/templates/Main';
import Component from 'modules/Component';
import homeView from 'views/pages/Home';

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
    let { title } = this.state;
    this.setState({
      title: title === 'home' ? 'home1' : 'home'
    });
  }

  afterRender() {
    this.setState({
      form: {
        element: this.getElement('#form')
      }
    });
  }
}

export default Main(Home);
