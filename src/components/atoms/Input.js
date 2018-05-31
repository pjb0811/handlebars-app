import InputView from 'views/atoms/Input.hbs';

class Input {
  constructor(props) {
    this.props = props;
    this.state = {
      value: ''
    };
  }

  render() {
    const { a, b } = this.props;
    return InputView({
      value: a + b
    });
  }
}

export default Input;
