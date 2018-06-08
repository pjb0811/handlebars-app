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
      view: homeView
    });
  }

  changeTitle() {
    let { title } = this.state;
    this.setState({
      title: title === 'home' ? 'home1' : 'home'
    });
  }
}

export default Main(Home);
