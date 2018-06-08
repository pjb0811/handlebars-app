import Component from 'modules/Component';
import labelView from 'views/atoms/Label';

class Label extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '123'
    };
    this.init({
      component: this,
      view: labelView,
      element: this.props.element
    });
  }
}

export default Label;
