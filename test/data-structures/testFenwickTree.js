/* eslint-env mocha */
const FenwickTree = require('../../src').DataStructures.FenwickTree;
const assert = require('assert');

describe('Fenwick Tree', () => {
  it('should be empty when initialized', () => {
    const inst = new FenwickTree([]);
    assert(inst.isEmpty());
    assert.equal(inst.size, 0);
  });

  it('should build tree with array', () => {
    const inst = new FenwickTree(4);

    inst.buildTree([1, 2, 3, 4]);
    assert(!inst.isEmpty());
    assert.equal(inst.size, 4);
  });

  it('should sum the array till index', () => {
    const inst = new FenwickTree(4);

    inst.buildTree([1, 2, 3, 4]);

    assert.equal(inst.getSum(2), 6);
    assert.equal(inst.getSum(0), 1);
    assert.equal(inst.getSum(3), 10);
    assert.throws(() => inst.getSum(4), Error);
  });
});
