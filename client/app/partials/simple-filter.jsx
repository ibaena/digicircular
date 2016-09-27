import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class SimpleFilter extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){


 }

  render() {
    return (
      <div className="simple-filter">
        <div className="btn-group">
          <button>Featured</button>
        </div>
        <div className="btn-group">
          <button>Alphabetical</button>
        </div>
        <div className="btn-group">
          <button>Latest</button>
        </div>
      </div>

    )
  }
}
