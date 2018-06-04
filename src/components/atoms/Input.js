import InputView from 'views/atoms/Input.hbs';

class Input {
  constructor(props) {
    this.props = props;
    this.state = {
      value: ''
    };
  }

  render() {
    const { value } = this.props;
    return InputView({
      value
    });
  }
}

export default Input;
