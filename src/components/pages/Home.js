import Main from 'components/templates/Main';
import Component from 'modules/Component';
import homeView from 'views/pages/Home';
// import Form from 'components/organisms/Form';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'home'
    };

    this.init({
      view: homeView,
      element: this.props.element
    });
  }

  changeTitle() {
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
