import Component from 'modules/Component';
import fieldView from 'views/molecules/Field';

class Field extends Component {
  constructor(props) {
    super(props);
    this.init({
      component: this,
      view: fieldView,
      element: this.props.element
    });
  }
}

export default Field;
