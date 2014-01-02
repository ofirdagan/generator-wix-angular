'use strict';

module.exports = [
  {from: '${locale}', to: 'en'},
  {from: '${googleAnalytics}', to: 'UA-2117194-2'},<% if (dashboardApp) { %>
  {from: '${metaSiteId}', to: 'c853c829-503e-48b1-892f-28d8c22a887c'},<% } %>

  {from: '${clientTopology.frogUrl}', to: 'http://www.frog.wixpress.com/'},
  {from: '${clientTopology.publicUrl}', to: 'http://www.pizza.wixpress.com/'},
  {from: '${clientTopology.staticBaseUrl}', to: 'http://static.pizza.wixpress.com/'},
  {from: '${clientTopology.dashboardFrameworkStaticsUrl}', to: 'http://static.pizza.wixpress.com/services/wix-dashboard-framework-statics/current/'},

  {from: '${clientTopology.<%= simplename %>StaticsUrl}', to: 'http://localhost:9000/'}
];