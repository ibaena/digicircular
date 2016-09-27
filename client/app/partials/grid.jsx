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
      <div id="product-grid" className="row">
        <div className="first-catalog">
            <h4 id="first-title">Catalog Title</h4>
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
        <div className="second-catalog">
        <h4>Catalog Title</h4>
          <div className="col s6">
            <div className="media-box">
              <a href="#!"><img src="http://placehold.it/350x150" /></a>
              </div>
          </div>
          <div className="col s6">
            <div className="media-box">
              <a href="#!"><img src="http://placehold.it/350x150" /></a>
              </div>
          </div>
        </div>
      </div>

    )
  }
}
