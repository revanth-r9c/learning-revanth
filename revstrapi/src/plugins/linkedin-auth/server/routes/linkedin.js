'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/linkedin-auth/get-token',
      handler: 'linkedinAuthController.getToken', 
      config: {
        policies: [],
        auth: false, 
      },
    },
    {
      method: 'POST',
      path: '/linkedin-auth/get-user-details',
      handler: 'linkedinAuthController.getUserDetails', 
      config: {
        policies: [],
        auth: false, 
      },
    },
    {
      method: 'POST',
      path: '/token',
      handler: 'linkedin-auth.getToken',
      config: {
        policies: [],
        middlewares: [],
        auth: false,
      },
    },
  ],
};
