'use strict';

describe('Service: <%= cameledName %>', function () {

  // load the service's module
  beforeEach(function () {
    module('<%= scriptAppName %>Internal');
    module(function (<%= cameledName %>Provider) {
      <%= cameledName %>Provider.setSalutation('Servus');
    });
    //add your mocks here
  });

  var <%= cameledName %>;

  // instantiate service
  function aProvider() {
    inject(function (_<%= cameledName %>_) {
      <%= cameledName %> = _<%= cameledName %>_;
    });
  }

  it('should do something', function () {
    aProvider();
    expect(<%= cameledName %>.greet()).toBe('Servus');
  });

});
