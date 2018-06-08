import mainView from 'views/templates/Main';
import Component from 'modules/Component';

const Main = WrappedComponent => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: 'template'
      };

      this.init({
        view: mainView,
        childs: {
          page: {
            pathname: this.props.pathname,
            el: '#page',
            WrappedComponent
          }
        }
      });
    }

    changeTitle() {
      let { title } = this.state;
      this.setState({
        title: title === 'test1' ? 'test2' : 'test1'
      });
    }
  };
};

export default Main;
