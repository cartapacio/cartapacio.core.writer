'use strict';

var fs = require('fs-extra'),
  path = require('path')

function Write (output) {
  if(!output){
    throw new Error('output path required')
  }
  this.output = output
}

Write.prototype.clean = function() {
  fs.removeSync(this.output)
}

Write.prototype.write = function(filename, content, callback) {
  var out = path.join(this.output, filename)

  fs.outputFile(out, content, function (err){
    if (err){
      callback(err)
    }

    callback(null)
  })
};


module.exports = Write
