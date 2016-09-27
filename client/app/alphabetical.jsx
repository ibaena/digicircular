import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import Grid3x3 from './partials/grid3x3.jsx';

export default class Alphabetical extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){


 }

  render() {
    return (
      <div id="alphabetical-wrapper">

          <Grid3x3 />

      </div>

    )
  }
}
