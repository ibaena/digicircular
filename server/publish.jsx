Circular = new Mongo.Collection("circular");

if (Circular.find({}).count() === 0) {
    Circular.insert({
        "flyer_name": "Shitty Ass Circular",
        "description": "Shitty ass circular for high priced foods!"
      });
}
