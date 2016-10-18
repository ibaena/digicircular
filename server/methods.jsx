let geocodingUrl = 'https://maps.googleapis.com/maps/api/geocode/json?';
let geoKey ='&key=AIzaSyDqFeP90M0a1uPT6AvKWqTnzi89q-oiuuA';

let nutritionUrl = 'https://api.nutritionix.com/v1_1/&';
let tmdbKey = '?api_key=3729ffa22dfa780e9abb43dee3074695';
let inTheatreCall = 'https://api.themoviedb.org/3/movie/now_playing?api_key=3729ffa22dfa780e9abb43dee3074695';
let popularMovies = 'https://api.themoviedb.org/3/movie/popular?api_key=3729ffa22dfa780e9abb43dee3074695';


Meteor.methods({

  convertZip: function(query){

    let latitude = 'latlng=' + query.lat;
    let longitude = ',' + query.lon;

    this.unblock();
    return HTTP.get(geocodingUrl + latitude + longitude + geoKey, {});
  },

  getTheatreMovies: function(){

    this.unblock();
    return HTTP.get(inTheatreCall, {});
  },
  getPopularMovies: function(){

    this.unblock();
    return HTTP.get(popularMovies, {});
  },

});
