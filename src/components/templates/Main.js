import mainView from 'views/templates/Main';
import Component from 'modules/Component';

const Main = WrappedComponent => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: 'test1'
      };
      this.init({
        component: this,
        view: mainView,
        element: this.props.element
      });
      this.WrappedComponent = new WrappedComponent({
        element: this.getElement('[data-route-page]')
      });
    }

    changeTitle() {
      let { title } = this.state;
      this.setState({
        title: title === 'test1' ? 'test2' : 'test1'
      });

      this.WrappedComponent.init({
        component: this.WrappedComponent,
        view: this.WrappedComponent.view,
        element: this.getElement('[data-route-page]')
      });

      this.WrappedComponent.render();
    }
  };
};

export default Main;
