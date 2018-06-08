import Component from 'modules/Component';
import buttonsView from 'views/molecules/Buttons';

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'button'
    };
    this.init({
      component: this,
      view: buttonsView,
      element: this.props.element
    });
  }
}

export default Buttons;
