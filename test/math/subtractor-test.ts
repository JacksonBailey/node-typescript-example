/// <reference path="../../typings/index.d.ts" />

import { assert } from 'chai'

import * as subtractor from '../../src/math/subtractor'

describe('subtractor', function() {
  describe('subtract', function () {
    it('should return 0 when given 1 and 1', function () {
      assert.equal(0, subtractor.subtract(1, 1))
    })
    it('should return 0 when given -1 and -1', function () {
      assert.equal(0, subtractor.subtract(-1, -1))
    })
  })
})
