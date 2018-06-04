import mainView from 'views/templates/Main.hbs';

class Main {
  constructor(props) {
    this.props = props;
    this.state = {
      title: 'Main Templates'
    };
  }

  render({ page }) {
    const { state, props } = this;
    return mainView({
      state,
      page
    });
  }
}

export default Main;
