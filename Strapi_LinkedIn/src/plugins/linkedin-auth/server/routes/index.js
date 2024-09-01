module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
      middlewares: [],
    },
  },


  {
    method: 'GET',
    path: '/connect/linkedin/callback',
    handler: 'linkedin.callback', 
    config: {
      policies: [],
      middlewares: [],
    },
  },


];
