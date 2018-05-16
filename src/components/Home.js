import { Component } from '../wmp';

class Home extends Component {
  constructor(props) {
    super(props);
    this.render({
      message: 'Home!'
    });
  }
}

export default Home;
