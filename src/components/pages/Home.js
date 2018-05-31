import homeView from 'views/Home.hbs';

class Home {
  constructor(props) {
    this.props = props;
    this.state = {
      message: 'home',
      test: {
        a: 1,
        b: '2'
      }
    };
  }

  render() {
    return homeView(this.state);
  }
}

export default Home;
