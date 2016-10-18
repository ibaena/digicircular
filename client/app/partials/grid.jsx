import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';




export default class Grid extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

    if(Session.get('inTheatres') === undefined){
   Session.set('inTheatres', []);
    }
    if(Session.get('popularMovies') === undefined){
   Session.set('popularMovies', []);
    }
    Meteor.call("getPopularMovies",  {}, (error, res) => {
      Session.set('popularMovies', res.data.results);
    });
    Meteor.call("getTheatreMovies",  {}, (error, res) => {
      Session.set('inTheatres', res.data.results);
    });
  }

 componentDidMount(){
   $('.carousel').carousel();

   $(".featured-products").click(function(){
     Bert.alert({
       title: 'Product Added',
       message: 'Added!',
       type: 'info',
       style: 'growl-top-right',
       icon: 'fa-smile-o'
     });
   $(this).toggleClass('media-box-highlighted');
});


 }

currentMovies() {
return Session.get('inTheatres');
}
popularMovies() {
return Session.get('popularMovies');
}


  render() {
    return (
      <div id="product-grid" >
        <div className="first-catalog row">
            <h4 id="first-title"> Featured Catalog Title</h4>
          <div className="col s12">
            <div className="media-box-carousel">
              <div className="carousel">
              {
                this.currentMovies().map((movie) => {
                  if( movie.poster_path == undefined) {
                    return (
                      <a className="carousel-item" href="#" key={movie.title}><img value={movie.title} className="carousel-img featured-products" src={'https://image.tmdb.org/t/p/w500'+ movie.backdrop_path}  /></a>
                    )
                  }else {
                    return (
                      <a className="carousel-item " href="#" key={movie.title}><img className="carousel-img featured-products" src={'https://image.tmdb.org/t/p/w500'+ movie.poster_path}  /></a>
                    )
                  }

                })
              }

              </div>
            </div>
          </div>
        </div>
        <div className="second-catalog row">
        <h4> Second Catalog Title</h4>
        {
          this.popularMovies().map((popularMovie) => {
            return (
              <div className="col s6" key={popularMovie.title}>
                <div className="media-box">
                  <a href={popularMovie.title+'/'+popularMovie.id} className="" ><img className="featured-products" src={'https://image.tmdb.org/t/p/w500'+ popularMovie.poster_path}  /></a>
                  </div>
              </div>
            )
          })
        }

        </div>
      </div>


    )
  }
}
