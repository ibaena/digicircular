let geocodingUrl = 'https://maps.googleapis.com/maps/api/geocode/json?';
let geoKey ='&key=AIzaSyDqFeP90M0a1uPT6AvKWqTnzi89q-oiuuA';


Meteor.methods({

  convertZip: function(query){
    console.log(query);
    let latitude = 'latlng=' + query.lat;
    let longitude = ',' + query.lon;

    this.unblock();
    return HTTP.get(geocodingUrl + latitude + longitude + geoKey, {});
  },

});
