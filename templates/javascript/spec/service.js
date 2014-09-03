'use strict';

describe('Service: <%= cameledName %>', function () {

  // load the service's module
  beforeEach(function () {
    module('<%= scriptAppName %>Internal');

    //add your mocks here
  });

  var <%= cameledName %>;

  // instantiate service
  function aService() {
    inject(function (_<%= cameledName %>_) {
      <%= cameledName %> = _<%= cameledName %>_;
    });
  }

  it('should do something', function () {
    aService();
    expect(<%= cameledName %>.someMethod()).toBe(42);
  });

});
