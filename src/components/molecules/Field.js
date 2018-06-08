import Component from 'modules/Component';
import fieldView from 'views/molecules/Field';

class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'field'
    };
    this.init({
      component: this,
      view: fieldView,
      element: this.props.element
    });
  }

  afterRender() {
    this.setState({
      input: {
        element: this.getElement('#input')
      },
      label: {
        element: this.getElement('#label')
      }
    });
  }
}

export default Field;
