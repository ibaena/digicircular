let geocodingUrl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452'
let geoKey ='&key=AIzaSyDqFeP90M0a1uPT6AvKWqTnzi89q-oiuuA';


Meteor.methods({

  convertZip: function(lon){
    console.log(lon);

    this.unblock();
    return HTTP.get(geocodingUrl + latitude + longitude + geoKey, {});
  },

});
