import mainView from 'views/templates/Main.hbs';

class Main {
  constructor(props) {
    this.props = props;
    this.state = {
      title: 'Main Templates'
    };
  }

  render() {
    const { message } = this.state;

    return mainView({
      title
    });
  }
}

export default Main;
