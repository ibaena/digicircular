import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';




export default class Grid3x3 extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){
   $('.carousel').carousel();

 }

  render() {
    return (
      <div id="product-grid" >
        <div className="first-catalog row">
            <h4 id="first-title"> Featured Catalog Title</h4>
              <div className="col s4">
                <div className="media-box">
                  <a href="#!"><img src="http://placehold.it/200x200" /></a>
                  </div>
              </div>
              <div className="col s4">
                <div className="media-box">
                  <a href="#!"><img src="http://placehold.it/200x200" /></a>
                  </div>
              </div>
              <div className="col s4">
                <div className="media-box">
                  <a href="#!"><img src="http://placehold.it/200x200" /></a>
                  </div>
              </div>
        </div>
        <div className="row">
            <h4 id="subpage-first-title"> Featured Catalog Title</h4>
              <div className="col s4">
                <div className="media-box">
                  <a href="#!"><img src="http://placehold.it/200x200" /></a>
                  </div>
              </div>
              <div className="col s4">
                <div className="media-box">
                  <a href="#!"><img src="http://placehold.it/200x200" /></a>
                  </div>
              </div>
              <div className="col s4">
                <div className="media-box">
                  <a href="#!"><img src="http://placehold.it/200x200" /></a>
                  </div>
              </div>
        </div>
        <div className="row">
            <h4 id="subpage-first-title"> Featured Catalog Title</h4>
              <div className="col s4">
                <div className="media-box">
                  <a href="#!"><img src="http://placehold.it/200x200" /></a>
                  </div>
              </div>
              <div className="col s4">
                <div className="media-box">
                  <a href="#!"><img src="http://placehold.it/200x200" /></a>
                  </div>
              </div>
              <div className="col s4">
                <div className="media-box">
                  <a href="#!"><img src="http://placehold.it/200x200" /></a>
                  </div>
              </div>
        </div>
        <div className="row">
            <h4 id="subpage-first-title"> Featured Catalog Title</h4>
              <div className="col s4">
                <div className="media-box">
                  <a href="#!"><img src="http://placehold.it/200x200" /></a>
                  </div>
              </div>
              <div className="col s4">
                <div className="media-box">
                  <a href="#!"><img src="http://placehold.it/200x200" /></a>
                  </div>
              </div>
              <div className="col s4">
                <div className="media-box">
                  <a href="#!"><img src="http://placehold.it/200x200" /></a>
                  </div>
              </div>
        </div>

      </div>

    )
  }
}
