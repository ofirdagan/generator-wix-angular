'use strict';

describe('Filter: <%= cameledName %>', function () {

  // load the filter's module
  beforeEach(function () {
    module('<%= scriptAppName %>Internal');

    //add your mocks here
  });

  var <%= cameledName %>;

  // initialize a new instance of the filter before each test
  function aFilter() {
    inject(function ($filter) {
      <%= cameledName %> = $filter('<%= cameledName %>');
    });
  }

  it('should return the input prefixed with "<%= cameledName %> filter:"', function () {
    aFilter();
    var text = 'angularjs';
    expect(<%= cameledName %>(text)).toBe('<%= cameledName %> filter: ' + text);
  });

});
