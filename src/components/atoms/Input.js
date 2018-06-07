import InputView from 'views/atoms/Input.hbs';

class Input {
  constructor(props) {
    this.props = props;
    this.state = {
      value: 123
    };
  }

  render() {
    const { value } = this.state;
    return InputView({
      value
    });
  }
}

export default Input;
