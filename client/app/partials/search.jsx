import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class Search extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){


 }

  render() {
    return (
      <div id="search-wrapper">
        <form>
          <input type="text" name="search" placeholder="Search.." />
        </form>
      </div>

    )
  }
}
