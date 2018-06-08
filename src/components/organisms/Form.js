import Component from 'modules/Component';
import formView from 'views/organisms/Form';

class Form extends Component {
  constructor(props) {
    super(props);
    this.init({
      component: this,
      view: formView,
      element: this.props.element
    });
  }
}

export default Form;
