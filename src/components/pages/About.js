import aboutView from 'views/About.hbs';

class About {
  constructor(props) {
    this.props = props;
    this.state = {
      message: 'about'
    };
  }

  render() {
    return aboutView(this.state);
  }
}

export default About;
