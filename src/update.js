const Db = require('./mongo');

module.exports = {

  update(query, document) {
    return Db.then(db => {
      const restaurants = db.collection('restaurants');
      return restaurants.findAndModify(query, [], { $set: document });
    });
  }

};
