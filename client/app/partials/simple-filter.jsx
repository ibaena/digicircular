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
          <a href="/featured"><button>Featured</button></a>
        </div>
        <div className="btn-group">
          <a href="/alphabetical"><button>Alphabetical</button></a>
        </div>
        <div className="btn-group">
          <a href="/latest"><button>Latest</button></a>
        </div>
      </div>

    )
  }
}
