import Main from 'components/templates/Main';
import homeView from 'views/pages/Home.hbs';

class Home {
  constructor(props) {
    this.props = props;
    this.state = {
      title: 'home',
      input: {
        value: 123
      }
    };
  }

  render() {
    return homeView(this.state);
  }
}

export default Main(Home);
