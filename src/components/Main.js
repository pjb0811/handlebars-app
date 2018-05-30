import mainView from 'views/Main.hbs';

class Main {
  constructor(props) {
    this.props = props;
    this.state = {
      message: 'main'
    };
  }

  render() {
    const { message } = this.state;

    return mainView({
      message
    });
  }
}

export default Main;
