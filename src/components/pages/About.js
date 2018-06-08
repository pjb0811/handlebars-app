import Main from 'components/templates/Main';
import Component from 'modules/Component';
import aboutView from 'views/pages/About';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'about'
    };
    this.init({
      component: this,
      view: aboutView,
      element: this.props.element
    });
  }
}

export default Main(About);
