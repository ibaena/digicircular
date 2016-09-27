import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class Flyers extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){


 }

  render() {
    return (
      <div id="flyers-wrapper">
          Flyers Screen
      </div>

    )
  }
}
