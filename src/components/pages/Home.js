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
    return new Main().render({
      page: homeView(this.state)
    });
  }
}

export default Home;
