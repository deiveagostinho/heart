/** @jsx React.DOM */

jest.dontMock('../src/heart');

describe('Heart', function() {

  var React = require('react/addons')
  var Heart = require('../src/hear')
  var TestUtils = React.addons.TestUtils

  it('is a composite component', function() {

    var heart = TestUtils.renderIntoDocument(<Heart/>)
    expect(TestUtils.isCompositeComponent(heart)).toBe(true)

  )}

})
