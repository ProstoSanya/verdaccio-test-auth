module.exports = (config, options) => ({

  authenticate: function(user, password, cb) {

    console.log('config', config);
    console.log('options', options);
    console.log('user', user);
    console.log('password', password);
    console.log('cb', cb);
  }

});
