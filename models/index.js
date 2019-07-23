// Export all of our Mongoose models in an object

module.exports = {
    user: require('./user'),
    // DANCE STYLES
    ballet: require('./ballet'),
    contemporary: require('./contemporary'),
    hipHop: require('./hipHop'),
    latin: require('./latin'),
    // PHOTOGRAPHY STYLES
    portrait: require('./portrait'),
    landscape: require('./landscape'),
    street: require('./street'),
    motion: require('./motion'),
  }