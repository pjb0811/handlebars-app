import mainView from 'views/templates/Main.hbs';

const Main = WrappedComponent => {
  return class {
    constructor(props) {
      this.props = props;
      this.state = {
        title: 'Main Templates'
      };
    }

    render() {
      const { state, props } = this;
      return mainView({
        state,
        page: new WrappedComponent(props).render()
      });
    }
  };
};

export default Main;
