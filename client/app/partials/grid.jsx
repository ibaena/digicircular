import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';




export default class Grid extends TrackerReact(Component) {

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
          <div className="col s12">
            <div className="media-box">
              <div className="carousel">
                <a className="carousel-item" href="#one!"><img src="http://placehold.it/200x200" /></a>
                <a className="carousel-item" href="#two!"><img src="http://placehold.it/200x200" /></a>
                <a className="carousel-item" href="#three!"><img src="http://placehold.it/200x200" /></a>
                <a className="carousel-item" href="#four!"><img src="http://placehold.it/200x200" /></a>
                <a className="carousel-item" href="#five!"><img src="http://placehold.it/200x200" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="second-catalog row">
        <h4> Second Catalog Title</h4>
          <div className="col s6">
            <div className="media-box">
              <a href="#!"><img src="http://placehold.it/200x200" /></a>
              </div>
          </div>
          <div className="col s6">
            <div className="media-box">
              <a href="#!"><img src="http://placehold.it/200x200" /></a>
              </div>
          </div>
        </div>
        <div className="third-catalog row">
        <h4> Third Catalog Title</h4>
          <div className="col s6">
            <div className="media-box">
              <a href="#!"><img src="http://placehold.it/200x200" /></a>
              </div>
          </div>
          <div className="col s6">
            <div className="media-box">
              <a href="#!"><img src="http://placehold.it/200x200" /></a>
              </div>
          </div>
        </div>
      </div>

    )
  }
}
