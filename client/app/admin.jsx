import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import AdminForm from './partials/admin-form.jsx';

export default class Admin extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){


 }

  render() {
    return (
      <div id="admin-wrapper">
          Administrator Screen
          <AdminForm />
      </div>

    )
  }
}
