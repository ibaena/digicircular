import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class SimpleFilter extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){
   $('.simple-btn ').click(function() {
         $('.simple-btn').removeClass('activated');
         $(this).addClass('activated');
     })

 }

  render() {
    return (
      <div className="simple-filter">
        <div className="btn-group">
          <a href="/"><button className="activated simple-btn" >Featured</button></a>
        </div>
        <div className="btn-group">
          <a href="/alphabetical"><button className="simple-btn">Alphabetical</button></a>
        </div>
        <div className="btn-group">
          <a href="/latest"><button className="simple-btn">Latest</button></a>
        </div>
      </div>

    )
  }
}
