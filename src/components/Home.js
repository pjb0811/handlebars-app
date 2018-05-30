import homeView from 'views/Home.hbs';

class Home {
  constructor(props) {
    this.props = props;
    this.state = {
      message: 'home'
    };
  }

  render() {
    return homeView(this.state);
  }
}

export default Home;
