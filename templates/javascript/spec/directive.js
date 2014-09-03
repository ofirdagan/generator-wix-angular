'use strict';

describe('Directive: <%= cameledName %>', function () {

  // load the directive's module
  beforeEach(function () {
    module('<%= scriptAppName %>Internal');

    //add your mocks here
  });

  var element,
    scope;

  function compile(template) {
    inject(function ($rootScope, $compile) {
      scope = $rootScope.$new();
      element = angular.element(template);
      element = $compile(element)(scope);
    });
  }

  it('should make hidden element visible', inject(function () {
    compile('<<%= _.dasherize(name) %>></<%= _.dasherize(name) %>>');
    expect(element.text()).toBe('this is the <%= cameledName %> directive');
  }));
});
