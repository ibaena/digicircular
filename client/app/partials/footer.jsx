import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class Footer extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){


 }

  render() {
    return (
      <div id="footer-wrapper">
        <div className="button-group">
          <label>
        <input type="radio" name="button-group" value="item" />
        <span className="button-group-item">Item</span>
      </label>
          <label>
        <input type="radio" name="button-group" value="other-item" />
        <span className="button-group-item">Other But Longer Item</span>
      </label>
          <label>
        <input type="radio" name="button-group" value="other-item" />
        <span className="button-group-item">Third</span>
      </label>
          <label>
        <input type="radio" name="button-group" value="third" />
        <span className="button-group-item">Last Item</span>
      </label>
        </div>
      </div>

    )
  }
}
