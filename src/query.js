const MongoDB = require('mongodb');
const ObjectID = MongoDB.ObjectID;

const Db = require('./mongo');

module.exports = {

  all() {
    return Db.then(db => {
      return db.collection('restaurants')
               .find({})
               .toArray();
    });
  },

  findByName(name) {
    return Db.then(db => {
      const query = { name: name };
      return db.collection('restaurants')
               .find(query)
               .toArray();
    });
  },

  findById(id) {

    return Db.then(db => {
      const query = { _id: ObjectID(id) };
      return db.collection('restaurants')
               .findOne(query);
    });
  }

};