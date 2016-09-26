import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Accounts extends Component {

  componentDidMount() {
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container));
      $('.login-link-text').append('<i class="fa fa-bars" aria-hidden="true"></i>');
  }

  componentWillUnmount() {
    Blaze.remove(this.view);

  }

  render() {
    return <span id="accounts-wrapper" ref="container" />
  }
}
