var sim = require('./simple.js');
var My = require('./sqrt');
var src = {
  // sim,
  My,
};

// privacy function
var limit = function (num) { return num < 0 ? 0 : num * 2; };

module.exports = src;
