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
    menuWidth: 250, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
}

geolocation() {
  $('#loader').html('loading..');
    navigator.geolocation.getCurrentPosition(function(position) {
      Session.set('current_location', '');
      Session.set('lat', position.coords.latitude);
      Session.set('lon', position.coords.longitude);

      let lon = Session.get('lon');
      let lat = Session.get('lat');

      Meteor.call("convertZip",  {lon: lon, lat: lat,}, (error, res) => {
        Session.set('current_location', res.data.results[0].formatted_address);
      });
    });
  };

  render() {
    return (
      <nav role="navigation" id="nav-wrapper" className="grey">
        <ul id="slide-out" className="side-nav">
          <li className="container">
            <br />
            <div id="zip" className="black-text">
              <button className="waves-effect waves-light btn zip-btn blue" onClick= {this.geolocation}><i className="fa fa-map-marker" aria-hidden="true"></i></button>
            </div>
          </li>
          <li>
            <a href="#!" className="disabled" >
            <span id="loader">
            {
              Session.get('current_location')
            }
          </span>

            </a>
          </li>
          <li><a href="/"><i className="fa fa-home fa-lg" aria-hidden="true"></i>Home</a></li>
          <li><a href="/flyers"><i className="fa fa-newspaper-o fa-lg" aria-hidden="true"></i>Flyers</a></li>
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
        <a href="#" data-activates="slide-out" className="button-collapse show-on-large"><i className="fa fa-bars" id="side-burger"></i></a>
        <div className="container">
          &nbsp; VCG
        </div>
      </nav>


    )
  }
}
