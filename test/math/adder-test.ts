/// <reference path="../../typings/index.d.ts" />

import { assert } from 'chai'

import * as adder from '../../src/math/adder'

describe('adder', function() {
  describe('add', function () {
    it('should return 2 when given 1 and 1', function () {
      assert.equal(2, adder.add(1, 1))
    })
    it('should return -2 when given -1 and -1', function () {
      assert.equal(-2, adder.add(-1, -1))
    })
  })
})
