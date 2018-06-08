import Component from 'modules/Component';
import formView from 'views/organisms/Form';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'form123'
    };
    this.init({
      view: formView,
      element: this.props.element
    });
  }

  /*
  changeTitle() {
    let { title } = this.state;
    this.setState({
      title: title === 'form' ? 'form1' : 'form'
    });
  }
  */

  /* changeTitle() {
    let { title } = this.state;
    this.setState({
      title: title === 'form' ? 'form1' : 'form'
    });
  }

  afterRender() {
    this.setState({
      field: {
        element: this.getElement('#field')
      },
      buttons: {
        element: this.getElement('#buttons')
      }
    });
  } */
}

export default Form;
