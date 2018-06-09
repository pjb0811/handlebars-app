import mainView from 'views/templates/Main';
import Component from 'modules/Component';

const Main = WrappedComponent => {
  return class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: 'template'
      };

      this.init({
        view: mainView
        /* childs: {
          page: {
            pathname: this.props.pathname,
            el: '#page',
            WrappedComponent
          }
        } */
      });
      this.WrappedComponent = new WrappedComponent({
        el: '#page',
        element: this.getElement('#page')
      });
    }

    changeTitle() {
      let { title } = this.state;
      this.setState({
        title: title === 'test1' ? 'test2' : 'test1'
      });

      this.props.element.querySelector(
        '#page'
      ).innerHTML = this.WrappedComponent.render();

      // console.log(this.props.element.querySelector('#page [data-on-click]'));
      // this.props.element
      //   .querySelector('#page [data-on-click]')
      //   .addEventListener('click', e => {
      //     console.log(e);
      //   });
      /* this.WrappedComponent.eventHandler.props.element = this.props.element.querySelector(
        '#page'
      );
      console.log(this.WrappedComponent.eventHandler.rebind()); */
      // this.WrappedComponent.eventHandler.rebind();
    }
  };
};

export default Main;
