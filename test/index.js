'use strict';

var mocha = require('mocha'),
  expect = require('chai').expect,
  Writer = require('../index')

describe('Template', function (){

  describe('constructor', function (){

    it('must throw error if not receive a path', function (){
      var bad = function (){
        return new Writer()
      }
      expect(bad).to.Throw(Error)
    })

   it('should succeed if path exists', function (){
      var good = function (){
        return new Writer('/tmp/output')
      }

      expect(good).to.be.ok
    })


  })
})
