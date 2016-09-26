import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import Search from './search.jsx';


export default class Nav extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){
   $('.button-collapse').sideNav({
    menuWidth: 300, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  }
);
 }

  render() {
    return (
      <nav role="navigation" id="nav-wrapper" className="grey">
        <ul id="slide-out" className="side-nav">
          <li>
          <form>
            <input name="geolocation" type="text" />
          </form>
          </li>
          <li><a href="#!"><i className="fa fa-newspaper-o fa-lg" aria-hidden="true"></i>Flyers</a></li>
          <li><a href="#!"><i className="fa fa-money fa-lg" aria-hidden="true"></i>Coupons</a></li>
          <li><a href="#!"><i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>Lists</a></li>
          <li><a href="#!"><i className="fa fa-calendar fa-lg" aria-hidden="true"></i>Deals</a></li>
            <div className="divider"></div>
          <li className="grey-text list-title">Categories</li>
          <li><a href="#!"><i className="fa fa-cutlery fa-lg" aria-hidden="true"></i>Groceries</a></li>
          <li><a href="#!"><i className="fa fa-glass fa-lg" aria-hidden="true"></i>Drinks</a></li>
          <li><a href="#!"><i className="fa fa-user-md fa-lg" aria-hidden="true"></i>Pharmacy</a></li>
          <li><a href="#!"><i className="fa fa-child fa-lg" aria-hidden="true"></i>Baby & Kids</a></li>
          <li><a href="#!"><i className="fa fa-paw fa-lg" aria-hidden="true"></i>Pets</a></li>
          <li><a href="#!"><i className="fa fa-television fa-lg" aria-hidden="true"></i>Electronics</a></li>
            <div className="divider"></div>
          <li><a href="#!"><i className="fa fa-sliders fa-lg" aria-hidden="true"></i>Settings</a></li>
        </ul>
        <a href="#" data-activates="slide-out" className="button-collapse show-on-large"><i className="material-icons">view_list</i></a>
        <div className="container">
          &nbsp; VCG
        </div>
      </nav>


    )
  }
}
