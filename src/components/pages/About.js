import Main from 'components/templates/Main';
import aboutView from 'views/pages/About.hbs';

class About {
  constructor(props) {
    this.props = props;
    this.state = {
      title: 'about'
    };
  }

  render() {
    return aboutView(this.state);
  }
}

export default Main(About);
