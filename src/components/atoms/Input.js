import Component from 'modules/Component';
import inputView from 'views/atoms/Input';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '123'
    };
    this.init({
      component: this,
      view: inputView,
      element: this.props.element
    });
  }

  changeInput() {
    console.log(this.state);
  }
}

export default Input;
