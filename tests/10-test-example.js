/*!
 * Copyright (c) 2025 Digital Bazaar, Inc.
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import * as chai from 'chai';

const should = chai.should();

describe('Example Test Suite', function() {
  it('should pass a basic test', function() {
    const expected = 42;
    const actual = 40 + 2;
    actual.should.equal(expected);
  });

  it('should fail a basic test', function() {
    const expected = 42;
    const actual = 40 + 1; // This will fail
    actual.should.equal(expected);
  });
});
