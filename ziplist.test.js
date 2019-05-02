/* eslint-env mocha, chai */
/* global zipList, zipListTheEasyWay, alpha, num */

describe('zipList', function () {
  describe('zipping two test arrays', function () {
    it('should return a simgle array with 6 elements', function () {
      chai.expect(zipList(alpha, num)).to.be.an('array').to.have.lengthOf(6);
    });
    it('should deep equal the passed 6 element array', function () {
      chai.expect(zipList(alpha, num)).to.deep.equal(['a', 1, 'b', 2, 'c', 3]);
    });
  });
});
describe('zipListTheEasyWay', function () {
  describe('zipping two test arrays', function () {
    it('should return a simgle array with 6 elements', function () {
      chai.expect(zipListTheEasyWay(alpha, num)).to.be.an('array').to.have.lengthOf(6);
    });
    it('should deep equal the passed 6 element array', function () {
      chai.expect(zipListTheEasyWay(alpha, num)).to.deep.equal(['a', 1, 'b', 2, 'c', 3]);
    });
  });
});
