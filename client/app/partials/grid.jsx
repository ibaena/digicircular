import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';




export default class Grid extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){


 }

  render() {
    return (
      <div id="product-grid">
        <div className="featured-item">
          <div className="featured-image">
            <img src="http://placehold.it/400x400" />
          </div>
        </div>
        <div className="list-products">
          <ul>
            <li className="block">
              <div className="product-image">
                <img src="http://placehold.it/140x100" />
              </div>
            </li>
            <li className="block">
              <div className="product-image">
                <img src="http://placehold.it/140x100" />
              </div>
            </li>
            <li className="block">
              <div className="product-image">
                <img src="http://placehold.it/140x100" />
              </div>
            </li>
            <li className="block">
              <div className="product-image">
                <img src="http://placehold.it/140x100" />
              </div>
            </li>
            <li className="block">
              <div className="product-image">
                <img src="http://placehold.it/140x100" />
              </div>
            </li>
            <li className="block">
              <div className="product-image">
                <img src="http://placehold.it/140x100" />
              </div>
            </li>
            <li className="block">
              <div className="product-image">
                <img src="http://placehold.it/140x100" />
              </div>
            </li>
            <li className="block">
              <div className="product-image">
                <img src="http://placehold.it/140x100" />
              </div>
            </li>
            <li className="block">
              <div className="product-image">
                <img src="http://placehold.it/140x100" />
              </div>
            </li>
          </ul>
        </div>
      </div>

    )
  }
}
