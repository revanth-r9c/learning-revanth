module.exports = [
  {
    method: 'POST',
    path: '/token',
    handler: 'linkedinAuthController.getToken',
    config: {
      policies: [],
      middlewares: [],
      auth: false,
    },
  }
  /* {
    method: 'GET',
    path: '/getUserDetails',
    handler: 'linkedinAuthController.getUserDetails',
    config: {
      policies: [],
      middlewares: [],
      auth: false,
    },
  } */
];
